const email = document.querySelector("#email_address");
const err_email = document.querySelector(".err_email");
const tel = document.querySelector("#phone_number");
const err_tel = document.querySelector(".err_tel");
const pass1 = document.querySelector("#password1");
const err_pass1 = document.querySelector(".err_pass1");
const pass2 = document.querySelector("#password2");
const err_pass2 = document.querySelector(".err_pass2");

// toggle error messages oninvalid, revert on input
email.oninvalid = () => err_email.style.display = "block";
email.addEventListener('input', () => err_email.style.display = 'none');
tel.oninvalid = () => err_tel.style.display = "block";
tel.addEventListener('input', () => err_tel.style.display = 'none');
pass1.oninvalid = () => err_pass1.style.display = "block";
pass1.addEventListener('input', () => err_pass1.style.display = 'none');
pass2.oninvalid = () => err_pass2.style.display = "block";
pass2.addEventListener('input', () => err_pass2.style.display = 'none');