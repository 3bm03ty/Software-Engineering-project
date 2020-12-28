var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var signUpBtn = document.getElementById("signUpBtn");
var success = document.getElementById("success");
var users;

if (localStorage.getItem("users") == null) {
    users = [];
} else {
    users = JSON.parse(localStorage.getItem("users"));
    console.log(users)
}

function signUp() {
    var user = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }
    if (validEmail() && validName() && validPassword()) {
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        clearInputs();
        success.removeAttribute("hidden");
        restore()
    }
}

function clearInputs() {
    nameInput.value = ""
    emailInput.value = "";
    passwordInput.value = "";
}

nameInput.onkeyup = function () {
    validName();
    success.hidden = true;
}

function validName() {
    var nameRegex = /^[a-zA-Z ]+$/;
    if (nameRegex.test(nameInput.value) == false) {
        signUpBtn.disabled = true;
        nameInput.classList.add("is-invalid");
        return false;
    } else {
        signUpBtn.removeAttribute("disabled");
        nameInput.classList.remove("is-invalid");
        nameInput.classList.add("is-valid");
        return true;
    }
}

emailInput.onkeyup = function () {
    validEmail();
    success.hidden = true;
};

function validEmail() {
    var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(emailInput.value) == false) {
        signUpBtn.disabled = true;
        emailInput.classList.add("is-invalid");
        return false;
    } else {
        signUpBtn.removeAttribute("disabled");
        emailInput.classList.remove("is-invalid");
        emailInput.classList.add("is-valid");
        return true;
    }
}

passwordInput.onkeyup = function () {
    validPassword();
    success.hidden = true;
};

function validPassword() {
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (passwordRegex.test(passwordInput.value) == false) {
        signUpBtn.disabled = true;
        passwordInput.classList.add("is-invalid");
        return false;

    } else {
        signUpBtn.removeAttribute("disabled");
        passwordInput.classList.remove("is-invalid");
        passwordInput.classList.add("is-valid");
        return true;
    }
}

function restore(){
    passwordInput.classList.remove("is-valid");
    emailInput.classList.remove("is-valid");
    nameInput.classList.remove("is-valid");
}