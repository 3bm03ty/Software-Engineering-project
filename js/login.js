var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var loginBtn = document.getElementById("loginBtn");
var users;


if (localStorage.getItem("users") == null) {
    users = [];
} else {
    users = JSON.parse(localStorage.getItem("users"));
    console.log(users)
}

function login(){
    // console.log(users)
    for(let i = 0; i<users.length ;i++){
        if(emailInput.value==users[i].email && passwordInput.value==users[i].password){
            localStorage.setItem("currentUser",JSON.stringify(users[i]))    ;
            window.location.href="index.html";
        }
    }
}