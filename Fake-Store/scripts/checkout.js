var totalPrice = +localStorage.getItem("payablePrice");
document.getElementById("cartTotal").innerText =
  "Total Payable Amount : " + totalPrice.toFixed(2);

document.querySelector("#submitBtn").addEventListener("click", function () {
  event.preventDefault();
  if (
    document.getElementById("userName").value != "" ||
    document.getElementById("userEmail").value != "" ||
    document.getElementById("userNumber").value != "" ||
    document.getElementById("userAddress").value != ""
  ) {
    window.location.href = "./payment.html";
    document.getElementById("userData").reset();
  } else {
    alert("Please Provide Correct Details.");
  }
});
