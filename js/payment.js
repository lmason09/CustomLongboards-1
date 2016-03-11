//Set character and length parameters of text fields

function checkInput(ob) {
    var invalidChars = /[^0-9]/gi
    if (invalidChars.test(ob.value)) {
        ob.value = ob.value.replace(invalidChars, "");
    }
}

function maxLength(field, maxChars) {
    if (field.value.length >= maxChars) {
        event.returnValue = false;
        return false;
    }
}

//Fill shipping info from collected billing info
//if user checks that it is the same

function maxLengthPaste(field, maxChars) {
    event.returnValue = false;
    if ((field.value.length + window.clipboardData.getData("Text").length) >
        maxChars) {
        return false;
    }
    event.returnValue = true;
}

function FillBilling(f) {
    if (f.billingtoo.checked == true) {
        f.SContact_FullName.value = f.Contact_FullName.value;
        f.SContact_StreetAddress.value =                                 f.Contact_StreetAddress.value;
        f.SContact_Address2.value = f.Contact_Address2.value;
        f.SContact_City.value = f.Contact_City.value;
        f.SContact_State.value = f.Contact_State.value;
        f.Szip.value = f.zip.value;
        f.SContact_HomePhone.value = f.Contact_Phone.value;
        f.Semail.value = f.email.value;
    }
}

//Set validation parameters for all text fields and alert
//user that input is required

function validateForm() {
    var x = document.forms["myForm"]["AccountNumber"].value;
    if (x == "") {
        alert("Invalid Card Number");
        myForm.AccountNumber.focus();
        return false;
    }
    var x = document.forms["myForm"]["AccountNumber2"].value;
    if (x == "") {
        alert("Invalid Card Number");
        myForm.AccountNumber2.focus();
        return false;
    }
    var x = document.forms["myForm"]["AccountNumber3"].value;
    if (x == "") {
        alert("Invalid Card Number");
        myForm.AccountNumber3.focus();
        return false;
    }
	var x = document.forms["myForm"]["AccountNumber4"].value;
    if (x == "") {
        alert("Invalid Card Number");
        myForm.AccountNumber4.focus();
        return false;
    }
    var x = document.forms["myForm"]["ExpMonth"].value;
    if (x == "") {
        alert("Please Enter Expiration Month");
        myForm.ExpMonth.focus();
        return false;
    }
    var x = document.forms["myForm"]["ExpYear"].value;
    if (x == "") {
        alert("Please Enter Expiration Year");
        myForm.ExpYear.focus();
        return false;
    }
    var x = document.forms["myForm"]["AVS"].value;
    if (x == "") {
        alert("Please Enter the AVS Code");
        myForm.AVS.focus();
        return false;
    }
    
    var x = document.forms["myForm"]["Contact_FullName"].value;
    if (x == "") {
        alert("Please Enter Your Name as it Appears on Your Card");
        myForm.Contact_FullName.focus();
        return false;
    }
    var x = document.forms["myForm"]["Contact_StreetAddress"].value;
    if (x == "") {
        alert("Please Enter Your Billing Address");
        myForm.Contact_StreetAddress.focus();
        return false;
    }
    var x = document.forms["myForm"]["Contact_City"].value;
    if (x == "") {
        alert("Please Enter Your Billing City");
        myForm.Contact_City.focus();
        return false;
    }
    var x = document.forms["myForm"]["Contact_State"].value;
    if (x == "") {
        alert("Please Enter Your Billing State");
        myForm.Contact_State.focus();
        return false;
    }
    var x = document.forms["myForm"]["zip"].value;
    if (x == "") {
        alert("Please Enter Your Billing Zip Code");
        myForm.zip.focus();
        return false;
    }
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        alert("Please Enter a Valid Email Address");
        myForm.email.focus();
        return false;
    }
    var x = document.forms["myForm"]["SContact_FullName"].value;
    if (x == "") {
        alert("Please Enter Your Full Name");
        myForm.SContact_FullName.focus();
        return false;
    }
    var x = document.forms["myForm"]["SContact_StreetAddress"].value;
    if (x == "") {
        alert("Please Enter Your Shipping Address");
        myForm.SContact_StreetAddress.focus();
        return false;
    }
    var x = document.forms["myForm"]["SContact_City"].value;
    if (x == "") {
        alert("Please Enter Your Shipping City");
        myForm.SContact_City.focus();
        return false;
    }
    var x = document.forms["myForm"]["SContact_State"].value;
    if (x == "") {
        alert("Please Enter Your Shipping State");
        myForm.SContact_State.focus();
        return false;
    }
    var x = document.forms["myForm"]["Szip"].value;
    if (x == "") {
        alert("Please Enter Your Shipping Zip Code");
        myForm.zip.focus();
        return false;
    }
}