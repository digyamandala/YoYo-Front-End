var email = document.querySelector('input[type="email"]')
var submitButton = document.getElementsByClassName("submit-button")[0];

function isEmailValidated(_email) {
    if (_email == "" || (_email.endsWith(".com") == false && _email.endsWith(".co.id") == false) || (_email.indexOf("@") == -1 || _email.indexOf(".@") != -1 || _email.indexOf("@.") != -1) || (_email.startsWith("@") || _email.startsWith(".")) || (countLetter(_email, "@") > 1)) {
        // alert("incorrect email")
        return false;
    }
    return true;
}

submitButton.addEventListener('click',function(){
    if(isEmailValidated(email.value) == false){
        alert("email false");
    }
    else if(isEmailValidated(email.value) == true){
        alert("email true");
    }
});