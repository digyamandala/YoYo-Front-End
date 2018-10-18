var username = document.getElementById("_username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var address = document.getElementById("address");
var genders = document.querySelectorAll("#gender");
var city = document.getElementById("city");
var submitButton = document.getElementsByClassName("submit-button")[0];

var errorMessage = document.getElementById("error-message");

var isValidated = false;

var gender = "";

$(".container-box").slideDown(1000, function(){
    $(".container-box").fadeIn(1000);
});

function isNumeric(_string) {
    for (var i = 0; i < _string.length; i++) {
        if (_string.charAt(i) >= "0" && _string.charAt(i) <= "9") {
            return true;
        }
    }
    return false;
}

function isAlphaNumeric(_string) {
    var alphaCount = 0;
    var numericCount = 0;
    for (var i = 0; i < _string.length; i++) {
        if (_string.charAt(i) >= "0" && _string.charAt(i) <= "9") {
            numericCount = numericCount + 1;
        }
        else {
            alphaCount = alphaCount + 1;
        }

        if (alphaCount > 1 && numericCount > 1) {
            return true;
        }
    }
    return false;
}

function isNameValidated(_username) {
    if (isNumeric(_username) == true || _username.split(" ").length < 2 || _username.length < 8) {
        return false;
    }
    return true;
}

function isEmailValidated(_email) {
    if (_email == "" || (_email.endsWith(".com") == false && _email.endsWith(".co.id") == false) || (_email.indexOf("@") == -1 || _email.indexOf(".@") != -1 || _email.indexOf("@.") != -1) || (_email.startsWith("@") || _email.startsWith(".")) || (countLetter(_email, "@") > 1)) {
        // alert("incorrect email")
        return false;
    }
    return true;
}

function isPasswordValidated(_password) {
    if (_password.length < 8 || isAlphaNumeric(_password) == false) {
        return false;
    }
    return true;
}

// function isAddressFilled(_address){
//     if(_address == ""){
//         return false;
//     }
//     return true;
// }

function isGenderChecked(_gender) {
    for (var i = 0; i < _gender.length; i++) {
        if (_gender[i].checked == true) {
            gender = _gender[i].value;
            return true;
        }
    }
    return false;
}

function isCityChoosen(_city) {
    if (city.value == "nothing") {
        return false;
    }
    return true;
}

function countLetter(string, letter) {
    var letterCount = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) == letter) {
            letterCount = letterCount + 1;
        }
    }
    return letterCount;
}

submitButton.addEventListener("click", function () {

    if (isNameValidated(username.value) == false) {
        errorMessage.innerHTML = "Name must be at least 8 Chars, 2 Words, Alphabetic";
    }
    else if (isEmailValidated(email.value) == false) {
        errorMessage.innerHTML = "Email Is Incorrect";
    }
    else if (isPasswordValidated(password.value) == false) {
        errorMessage.innerHTML = "Password must be at least 8 Chars and AlphaNumeric";
    }

    else if(address.value == ""){
        errorMessage.innerHTML = "Address must be filled";
    }

    else if (isGenderChecked(genders) == false) {
        errorMessage.innerHTML = "Gender must be choosen";
    }
    else if (isCityChoosen(city) == false) {
        errorMessage.innerHTML = "City must be choosen";
    }
    else {
        errorMessage.innerHTML = ""
        submitButton.removeAttribute("type");
    }

});
