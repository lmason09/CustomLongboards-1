#!/usr/bin/perl
#Lisa Mason Web 221 
#chfeedback.pl
$mailprog = "/usr/lib/sendmail" ;
$mailto = 'mail@lmason09.com' ;
$subject = "Feedback Form" ;
$formurl = "http://lmason09.com/feedback.html" ;
$errorurl = "http://error.html" ;
$thankyouurl = "http://thankyou.html" ;

# END OF USER CONFIGURATION SECTION

#  functions 
sub redirect_url {
	my ( $url )	= shift ;
	print "Location: $url\n\n" ;
}

sub parse_form_data {
	my ($request_method, $input_string, $content_length) ;
	my (@vars, $indiv_var, $name, $value);
	my (%form) ;

	$request_method	= $ENV{'REQUEST_METHOD'} ;
	$content_length	= $ENV{'CONTENT_LENGTH'} ;

	# load the entire string into $input_string
	if ($request_method	=~ /post/i) {
		$input_string	= "" ;
		read( STDIN, $input_string, $content_length ) ;
	}
	else {
		$input_string	= $ENV{ 'QUERY_STRING' };
	}
	unless (defined $input_string) {
		$input_string	= "" ;
	}

	# put all the variable pairs (name=value) into an array
	@vars	= split( /&/, $input_string );

	# process each individual name, value pair, putting them
	# into a hash for easy access
	foreach $indiv_var ( @vars ) {

		# separate the pair
		($name, $value)	= split( /=/, $indiv_var, 2 );

		# translate encoding
		$name	=~ s/%([\da-fA-F]{2})/pack("C", hex($1))/eg;
		$name	=~ tr/+/ /;
		unless (defined $value) {
			# just in case there was no equals as in ISINDEX
			$value	= "" ;
		}
		$value	=~ s/%([\da-fA-F]{2})/pack("C", hex($1))/eg;
		$value	=~ tr/+/ /;

		# put the pair in the hash for easy access
		$form{$name}	= $value ;
	}

	return wantarray ? %form : undef ;
}

sub send_email {
	my ($mailprog, $email, $name, $mailto, $subject, $message) = @_ ;

	if (open MAIL, "|$mailprog -t") {
		print MAIL "To: $mailto\n" ;
		print MAIL "From: \"$name\" <$email>\n" ;
		print MAIL "Reply-To: \"$name\" <$email>\n" ;
		print MAIL "X-Mailer: chfeedback.pl 2.2.4\n" ;
		print MAIL "Subject: $subject\n\n" ;
		print MAIL $message ;
		close MAIL ;
	}
	# ignore fails, just don't do anything

	return ;
}

# main program

my %form = parse_form_data();

my $email ;
if (exists $form{"email"}) {
	$email	= $form{"email"} ;
}
else {
	redirect_url( $formurl );
	exit ;
}
if (($email eq "") || ($email =~ /[\r\n]/)) {
	redirect_url( $errorurl );
	exit ;
}

my $name = $form{"fullname"} ;
if (($name eq "") || ($name	=~ /[\r\n]/)) {
	redirect_url( $errorurl );
	exit ;
}

my $comments = $form{'comments'} ;
if ($comments eq "") {
	redirect_url( $errorurl );
	exit ;
}

my $http_referer = $ENV{ 'HTTP_REFERER' };
my $message	=
	"This message was sent from:\n" .
	"$http_referer\n" .
	"------------------------------------------------------------\n" .
	"Name of sender: " . $name . "\n" .
	"Email of sender: " . $email . "\n" .
	"------------------------- COMMENTS -------------------------\n\n" .
	$comments .
	"\n\n------------------------------------------------------------\n" ;

send_email ( $mailprog, $email, $name, $mailto, $subject, $message );
redirect_url( $thankyouurl );
