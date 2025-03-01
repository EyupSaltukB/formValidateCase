const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

function error(input, message) {
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
}
function success(input) {
  input.className = "form-control is-valid";
}

const checkEmail = (input) => {
  const regexMail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(regexMail.test(input.value)){
    success(input);
  }else {
    error(input, "email address is wrong")
  }
};

function checkRequired(inputs) {
  inputs.forEach(function (input) {
    if (input.value === "") {
      error(input, `${input.id} is required`);
    } else {
      success(input);
    }
  });
}

function checkLength(input, min ,max){
    if(input.value.length < min){
        error(input, `${input.id} en az ${min} karakter olmalıdır`)
    } else if (input.value.length > max){
        error(input, `${input.id} en fazla ${max} karakter olmalıdır`)
    } else {
        success(input);
    }
}

function checkPasswords(input1, input2,){
    if(input1.value !== input2.value){
        error(input2, "passwords don't match");
    }
}

function checkPhone(input){
    var regexPhone = /^\d{10}$/;
    if(!regexPhone.test(input.value))
        error(input, 'phone number must be 10 digits') 
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, phone, password, repassword]);
  checkEmail(email);
  checkLength(username, 8, 18);
  checkLength(password , 8, 15);
  checkPasswords(password , repassword);
  checkPhone(phone)
});
