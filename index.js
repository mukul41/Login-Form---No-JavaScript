const btn=document.getElementById("signinbtn");
const loginbtn=document.getElementById("sign_in");
const registerbtn=document.getElementById("register_form");

btn.addEventListener("click",()=>{
    alert("click");
loginbtn.style.display="none";
registerbtn.style.display="block";
})