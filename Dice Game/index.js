function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is inclusive and the minimum is inclusive
}

document.querySelector("#roll").addEventListener("click", () => {
  document.querySelector("#number1").innerText = getRandomInt(1, 6);
  document.querySelector("#number2").innerText = getRandomInt(1, 6);
  document.querySelector("#number3").innerText = getRandomInt(1, 6);

  var a = document.querySelector("#number1").innerText;
  var b = document.querySelector("#number2").innerText;
  var c = document.querySelector("#number3").innerText;

  var max = Math.max(a, b, c);
  var min = Math.min(a, b, c);

  document.querySelector("#winner>h1").innerText = max;

  document.getElementById("member-1").style.backgroundColor = "#f7f7f7";
  document.getElementById("member-2").style.backgroundColor = "#f7f7f7";
  document.getElementById("member-3").style.backgroundColor = "#f7f7f7";

  //Green
  if (a > b && a > c) {
    document.getElementById("member-1").style.backgroundColor = "green";
  } else if (b > a && b > c) {
    document.getElementById("member-2").style.backgroundColor = "green";
  } else if (c > a && c > b) {
    document.getElementById("member-3").style.backgroundColor = "green";
  }

  //Red
  if (a < b && a < c) {
    document.getElementById("member-1").style.backgroundColor = "red";
  } else if (b < a && b < c) {
    document.getElementById("member-2").style.backgroundColor = "red";
  } else if (c < a && c < b) {
    document.getElementById("member-3").style.backgroundColor = "red";
  }

  //Yellow
  if (a != max && a != min) {
    document.getElementById("member-1").style.backgroundColor = "yellow";
  } else if (b != max && b != min) {
    document.getElementById("member-2").style.backgroundColor = "yellow";
  } else if (c != max && c != min) {
    document.getElementById("member-3").style.backgroundColor = "yellow";
  }

  //Blue
  if (a == b && b == c) {
    document.getElementById("member-1").style.backgroundColor = "blue";
    document.getElementById("member-2").style.backgroundColor = "blue";
    document.getElementById("member-3").style.backgroundColor = "blue";
  }
  if (a == b && a != c) {
    document.getElementById("member-1").style.backgroundColor = "blue";
    document.getElementById("member-2").style.backgroundColor = "blue";
  } else if (b == c && b != a) {
    document.getElementById("member-2").style.backgroundColor = "blue";
    document.getElementById("member-3").style.backgroundColor = "blue";
  } else if (a == c && a != b) {
    document.getElementById("member-1").style.backgroundColor = "blue";
    document.getElementById("member-3").style.backgroundColor = "blue";
  }
});
