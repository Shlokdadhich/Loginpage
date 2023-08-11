const username=document.getElementById("name");
const nameval=document.getElementById("nameval");
const email=document.getElementById("email");
const emailerror=document.getElementById("email-error");
const password=document.getElementById("password");
const passlength=document.getElementById("pass-len");
const specialchar=document.getElementById("pass-special");
const confirmpassword=document.getElementById("confirm-password");
const confirmpasswordcheck =document.getElementById("pass-conf-check");
function ValidateName() {
    if (username.value !== "") {
        nameval.classList.add("hidden")
    }
    else {
        nameval.classList.remove("hidden")     
    }
}
username.addEventListener("keyup", () => {
    ValidateName()
})
function Validatepassword() {
    if (password.value.length >= 8) {
        passlength.classList.add("hidden") 
    }
    else {
        passlength.classList.remove("hidden") 
      
    }
}
password.addEventListener("keyup", () => {
    Validatepassword()
})
function passwordchecker(){
    if(password.value===confirmpassword.value){
        confirmpasswordcheck.classList.add("hidden")
    }
    else{
        confirmpasswordcheck.classList.remove("hidden")
    }
}
confirmpassword.addEventListener("keyup",()=>{
    passwordchecker()
})
const spec = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g

function checkpassword() {
    if (password.value.match(spec)) {
        specialchar.classList.add("hidden") 
    }
    else {
        specialchar.classList.remove("hidden") 
      
    }
}

password.addEventListener("keyup", () => {
    checkpassword()
})
