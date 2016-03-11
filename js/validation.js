
//Set variables for required registration form fields

function formValidation() {
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uplanet = document.registration.planet;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var uhuman = document.registration.human;
    var ualien = document.registration.alien;
    if (userid_validation(uid, 5, 12)) {
        if (passid_validation(passid, 7, 12)) {
                    if (planetselect(uplanet)) {
                        if (allnumeric(uzip)) {
                            if (ValidateEmail(uemail)) {
                                if (validsex(uhuman, ualien)) {}
                            }
                        }
                    }
                }
            }
            
    return false;
}

//Check validity of userid input and alert user if incorrect,
//Show correct format of input required

function userid_validation(uid, mx, my) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) {
        alert("Length of Userid Needs to be Between " + mx +
            " and " + my + " Characters ");
        uid.focus();
        return false;
    }
    return true;
}

//Check validity of password input and alert user if incorrect,
//Show correct format of input required


function passid_validation(passid, mx, my) {
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
        alert("Length of Password Needs to be between " + mx +
            " and " + my + " Characters ");
        passid.focus();
        return false;
    }
    return true;
}

//Alert user to choose from drop down menu if no selection made

function planetselect(uplanet) {
    if (uplanet.value == "Default") {
        alert('Please Select Your Home Planet From the List');
        uplanet.focus();
        return false;
    } else {
        return true;
    }
}

//Check validity of zip code entered and alert to
//enter numbers if necessary

function allnumeric(uzip) {
    var numbers = /^[0-9]+$/;
    if (uzip.value.match(numbers)) {
        return true;
    } else {
        alert('Please Enter a Valid Zip Code');
        uzip.focus();
        return false;
    }
}

//Check validity of email entered and alert to
//enter correct format if necessary

function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    } else {
        alert("Please Enter a Valid Email Address");
        uemail.focus();
        return false;
    }
}

//Check if radio button is checked and alert user
//to check one if necessary

function validsex(uhuman, ualien) {
    x = 0;
    if (uhuman.checked) {
        x++;
    }
    if (ualien.checked) {
        x++;
    }
    if (x == 0) {
        alert('Select Species (Note: Aliens do not get Discounts)');
        uhuman.focus();
        return false;
    } else {
        alert('Thanks! Now you will be directed to the payment screen');
        window.location.href = "payment.html";
        return true;
    }
}