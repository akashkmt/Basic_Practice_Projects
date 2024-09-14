var signUpData = JSON.parse(localStorage.getItem("signUpData")) || [];

document
  .querySelector("#login-form-div>form")
  .addEventListener("submit", function () {
    event.preventDefault();
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    signUpData.forEach((element) => {
      if (email == element.email && password == element.password) {
        window.location.href = "./index.html";
      } else {
        alert("Invalid Credentials");
      }
    });
  });
