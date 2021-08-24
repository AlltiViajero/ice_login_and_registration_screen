const login = document.getElementById('login');
const register = document.getElementById('register');
const btn = document.getElementById('btn');

const lo = document.getElementById('lo');
const reg = document.getElementById('reg');


lo.addEventListener("click", function log_in(){
    register.style.left = "400px";
    login.style.left = "0px";
    btn.style.left = "0px";
    btn.style.background = " linear-gradient(to left, rgb(228, 216, 216),rgb(3, 187, 178), rgb(41, 144, 195))";
}, false);

reg.addEventListener("click", function reg_ister(){
    register.style.left = "0px";
    login.style.left = "-400px";
    btn.style.left = "130px";
    btn.style.background = " linear-gradient(to right, rgb(228, 216, 216),rgb(3, 187, 178), rgb(41, 144, 195))";
}, false);