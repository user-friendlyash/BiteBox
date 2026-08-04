function login()
{
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error");

// Simple condition
if (email==="admin@1234" && password==="1234"){

  // save login state in localstorage.
  localStorage.setItem("user ", email);
  localStorage.setItem("userpassword", password);

  // Redirect.
  window.location.href = "index.html";
} 
else{
 error.innerText = "Invalid email or password";
}

}

function togglePassword() {
  let passwordInput = document.getElementById("password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}