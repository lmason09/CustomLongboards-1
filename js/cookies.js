//Check for zip code and email fields and if populated,
//write cookie for values and fill fields when page reloaded and cursor placed


function getCookie(name) {
    var cname = name + "=";
    var dc = document.cookie;
    if (dc.length > 0) {
        begin = dc.indexOf(cname);
        if (begin != -1) {
            begin += cname.length;
            end = dc.indexOf(";", begin);
            if (end == -1) end = dc.length;
            return unescape(dc.substring(begin, end));
        }
    }
    return null;
}

function setCookie(name, value) {
    var now = new Date();
    var then = new Date(now.getTime() + 31536000000);
    document.cookie = name + "=" + escape(value) + "; expires=" + then.toGMTString() +
        "; path=/";
}

//Get cookie info if available

function getInfo(form) {
    form.info.value = "Browser Information: " + navigator.userAgent;
}

function getValue(element) {
    var value = getCookie(element.name);
    if (value != null) element.value = value;
}

function setValue(element) {
    setCookie(element.name, element.value);
}

function fixElement(element, message) {
    alert(message);
    element.focus();
}

//Verify email value

function isMailReady(form) {
    var passed = false;
    if (form.fullname.value == "") {} else if (form.email.value.indexOf("@") ==
        -1 || form.email.value.indexOf(".") == -1) {} else if (form.message
        .value == "") {} else {
        getInfo(form);
        passed = true;
    }
    return passed;
}