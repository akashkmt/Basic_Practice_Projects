// fetch products

async function fetchProducts() {
  var response = await fetch("https://fakestoreapi.com/products");

  var products = await response.json();

  return products;
}

// DOM update

function updateDOM() {
  var products = JSON.parse(localStorage.getItem("fakeProducts"));

  if (!products) {
    fetchProducts().then((products) => {
      localStorage.setItem("fakeProducts", JSON.stringify(products));
      displayProducts(products);
    });
  } else {
    displayProducts(products);
  }
}

//Display Products on homepage

function displayProducts(products) {
  document.getElementById("container").innerHTML = "";

  products.forEach((element) => {
    var div = document.createElement("div");
    div.setAttribute("class", "product");

    var image = document.createElement("img");
    image.setAttribute("src", element.image);
    image.setAttribute("class", "productImage");

    var name = document.createElement("h4");
    name.innerText = element.title;
    name.setAttribute("class", "name");

    var price = document.createElement("p");
    price.innerText = `$ ${element.price}`;

    var cartBtn = document.createElement("button");
    cartBtn.setAttribute("class", "cartBtn");
    cartBtn.innerText = "Add to Cart";
    cartBtn.addEventListener("click", function () {
      addToCart(element);
    });

    div.append(image, name, price, cartBtn);

    document.getElementById("container").append(div);
  });
}

// Add to Cart

function addToCart(product) {
  var cart = JSON.parse(localStorage.getItem("fakeCart")) || [];

  var findItem = cart.find((cartItem) => {
    return cartItem.id == product.id;
  });

  if (findItem) {
    alert("Product is already in cart");
    return;
  } else {
    cart.push(product);
    localStorage.setItem("fakeCart", JSON.stringify(cart));
    alert("Added to Cart Successfully");
  }

  document.getElementById("cart-counter").innerText =
    "Cart - Count : " + cart.length;
}

//filter Products

function filterProducts() {
  var products = JSON.parse(localStorage.getItem("fakeProducts"));
  var filterValue = document.getElementById("filterButton").value;
  var sortValue = document.getElementById("sortButton").value;

  var custom = products
    .filter((product) => {
      if (filterValue == "") {
        return product;
      } else if (filterValue == "0-50") {
        return product.price < 50;
      } else if (filterValue == "51-100") {
        return product.price > 50 && product.price <= 100;
      } else if (filterValue == "101-200") {
        return product.price > 100 && product.price <= 200;
      } else if (filterValue == ">200") {
        return product.price > 200;
      }
    })
    .sort((a, b) => {
      if (sortValue == "") {
        return 0;
      } else if (sortValue == "ASC") {
        return a.price - b.price;
      } else if (sortValue == "DESC") {
        return b.price - a.price;
      }
    });
  displayProducts(custom);
}

updateDOM();
if (JSON.parse(localStorage.getItem("fakeCart"))) {
  document.getElementById("cart-counter").innerText =
    "Cart - Count : " + JSON.parse(localStorage.getItem("fakeCart")).length;
} else {
  document.getElementById("cart-counter").innerText = "Cart - Count : 0";
}
