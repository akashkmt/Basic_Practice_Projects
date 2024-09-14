function playVideo() {
  document.getElementById("videoPlayer").innerHTML = "";
  var videoDetails = JSON.parse(localStorage.getItem("videoDetails"));
  document.getElementById("videoPlayer").innerHTML =
    videoDetails.items[0].player.embedHtml;

  var div = document.createElement("div");
  div.setAttribute("class", "textDiv");

  var title = document.createElement("h4");
  title.setAttribute("class", "title");
  title.innerText = videoDetails.items[0].snippet.title;

  var channelName = document.createElement("h4");
  channelName.setAttribute("class", "channelName");
  channelName.innerText = videoDetails.items[0].snippet.channelTitle;

  div.append(title, channelName);
  document.getElementById("videoPlayer").append(div);
}

window.onload = playVideo();
