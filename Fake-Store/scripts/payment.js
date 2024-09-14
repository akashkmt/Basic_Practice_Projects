var totalPrice = +localStorage.getItem("payablePrice");
document.getElementById("cartTotal").innerText =
  "Total Payable Amount : " + totalPrice.toFixed(2);

document.querySelector("#submitBtn").addEventListener("click", function () {
  event.preventDefault();
  if (
    document.getElementById("cardName").value != "" ||
    document.getElementById("cardNumber").value != "" ||
    document.getElementById("cardDate").value != "" ||
    document.getElementById("cardCVV").value != ""
  ) {
    window.location.href = "./index.html";
    document.getElementById("cardData").reset();
    localStorage.removeItem("fakeCart");
    alert("Order Placed Successfully");
  } else {
    alert("Please Provide Correct Details.");
  }
});
