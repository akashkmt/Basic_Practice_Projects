var start = 0;
var images = [
  "1.jpg",
  "2.jpg",
  "3.png",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];
var time = 5000;

//need to do it with setInterval

function changeImg() {
  document.slide.src = images[start];

  if (start < images.length - 1) {
    start++;
  } else {
    start = 0;
  }
}

setInterval(changeImg, time);

window.onload = changeImg;

var moviesData = [
  {
    name: "Free Guy",
    image: "1.jpg",
    imdb: 7.2,
    release: "13 August 2021",
  },
  {
    name: "Dune",
    image: "2.jpg",
    imdb: 8.1,
    release: "22 October 2021",
  },
  {
    name: "Dr. Strange 2",
    image: "3.png",
    imdb: 9.1,
    release: "6 May 2022",
  },
  {
    name: "Beast",
    image: "4.jpg",
    imdb: 6.9,
    release: "13 April 2022",
  },
  {
    name: "RRR",
    image: "5.jpg",
    imdb: 8.9,
    release: "24 March 2022",
  },
  {
    name: "No Way Home",
    image: "6.jpg",
    imdb: 8.4,
    release: "16 December 2021",
  },
  {
    name: "The Batman",
    image: "7.jpg",
    imdb: 8.2,
    release: "4 March 2022",
  },
  {
    name: "Moon Knight",
    image: "8.jpg",
    imdb: 7.7,
    release: "30 March 2022",
  },
  {
    name: "KGF Chapter 2",
    image: "9.jpg",
    imdb: 9.6,
    release: "14 April 2022",
  },
];

localStorage.setItem("movies", JSON.stringify(moviesData));

function displayData(moviesData) {
  document.querySelector("#movies").innerHTML = "";
  moviesData.forEach((element) => {
    var div = document.createElement("div");
    div.setAttribute("class", "moviesDiv");

    var img = document.createElement("img");
    img.setAttribute("src", element.image);
    img.setAttribute("class", "moviesDivImg");

    var name = document.createElement("h4");
    name.innerText = element.name;

    var rating = document.createElement("p");
    rating.innerText = "Imdb Rating : " + element.imdb;

    var release = document.createElement("p");
    release.innerText = "Release Date : " + element.release;

    div.append(img, name, rating, release);

    document.querySelector("#movies").append(div);
  });
}

window.addEventListener("load", function () {
  displayData(moviesData);
});

document.querySelector("#sort-lh").addEventListener("click", function () {
  moviesData.sort((a, b) => {
    return a.imdb - b.imdb;
  });
  displayData(moviesData);
});

document.querySelector("#sort-hl").addEventListener("click", function () {
  moviesData.sort((a, b) => {
    return b.imdb - a.imdb;
  });
  displayData(moviesData);
});
