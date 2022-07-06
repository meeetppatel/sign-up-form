const firstname = document.getElementById("first-name");
const lastname = document.getElementById("last-name");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phone-number");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirm-password");
const form = document.getElementById("form");
const errorElement = document.querySelector(".errors");

form.addEventListener("submit", () => {
  console.log("peepuupee");
});

function checkPassword() {
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmpassword.value.trim();
  if (passwordValue === confirmPasswordValue) {
    checkForSuccess(password);
    checkForSuccess(confirmPassword);
  } else {
    checkForError(password, "Passwords does not match");
    checkForError(confirmPassword, "Passwords does not match");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  password.addEventListener("keyup", () => {
    validate();
  });

  confirmpassword.addEventListener("keyup", () => {
    confirmpass();
  });
});
// function CheckPassword(inputtxt) {
//   var passw = /^[A-Za-z]\w{7,14}$/;
//   if (inputtxt.value.match(passw)) {
//     alert("Correct, try another...");
//     return true;
//   } else {
//     alert("Wrong...!");
//     return false;
//   }
// }

// var check = function() {
//     if (document.getElementById('password').value ==
//       document.getElementById('confirm_password').value) {
//       document.getElementById('message').style.color = 'green';
//       document.getElementById('message').innerHTML = 'matching';
//     } else {
//       document.getElementById('message').style.color = 'red';
//       document.getElementById('message').innerHTML = 'not matching';
//     }
//   }

function validate() {
  const pass = document.getElementById("password");
  var upper = document.getElementById("upper");
  var lower = document.getElementById("lower");
  var sp_char = document.getElementById("special-char");
  var num = document.getElementById("num");
  var len = document.getElementById("length");

  console.log(pass.value);
  // num
  if (pass.value.match(/[0-9]/)) {
    num.style.color = "rgb(93, 224, 93)";
  } else {
    num.style.color = "rgb(182, 63, 63)";
  }
  // upper
  if (pass.value.match(/[A-Z]/)) {
    upper.style.color = "rgb(93, 224, 93)";
  } else {
    upper.style.color = "rgb(182, 63, 63)";
  }
  // lower
  if (pass.value.match(/[a-z]/)) {
    lower.style.color = "rgb(93, 224, 93)";
  } else {
    lower.style.color = "rgb(182, 63, 63)";
  }
  //   Special char
  if (pass.value.match(/[!\@\#\$\%\^\&\*\(\)\_\+\?\>\<\,\.]/)) {
    sp_char.style.color = "rgb(93, 224, 93)";
  } else {
    sp_char.style.color = "rgb(182, 63, 63)";
  }
  // len
  if (pass.value.length < 8) {
    len.style.color = "rgb(182, 63, 63)";
  } else {
    len.style.color = "rgb(93, 224, 93)";
  }
}

function confirmpass() {
  const pass1 = document.getElementById("password");
  const pass2 = document.getElementById("confirm-password");
    console.log(pass2)
  if (pass1.value.trim() == pass2.value.trim()) {
    document.getElementById("num").style.display = "none";
    document.getElementById("length").style.display = "none";
    document.getElementById("special-char").style.display = "none";
    document.getElementById("lower").style.display = "none";
    document.getElementById("upper").style.display = "none";
    pass1.style.backgroundColor="rgba(39, 139, 39, 0.25)";
    pass2.style.backgroundColor="rgba(39, 139, 39, 0.25)";
  } else {
    document.getElementById("num").style.display = "block";
    document.getElementById("length").style.display = "block";
    document.getElementById("special-char").style.display = "block";
    document.getElementById("lower").style.display = "block";
    document.getElementById("upper").style.display = "block";
  }
}
