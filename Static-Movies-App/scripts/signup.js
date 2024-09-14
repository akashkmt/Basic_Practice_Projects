var signUpData = JSON.parse(localStorage.getItem("signUpData")) || [];

document
  .querySelector("#signup-form-div>form")
  .addEventListener("submit", function () {
    event.preventDefault();
    if (
      document.querySelector("#name").value == "" ||
      document.querySelector("#number").value == "" ||
      document.querySelector("#email").value == "" ||
      document.querySelector("#password").value == ""
    ) {
      alert("Please Fill all Required Details.");
    } else {
      var obj = {
        name: document.querySelector("#name").value,
        number: document.querySelector("#number").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
      };
      signUpData.push(obj);
      localStorage.setItem("signUpData", JSON.stringify(signUpData));
      alert("Account Created Successfully.");
      document.querySelector("#name").value = "";
      document.querySelector("#number").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#password").value = "";
    }
  });
