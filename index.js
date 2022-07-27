function start() {
  var x = document.getElementById("hamburgerBlock");
  var y = document.getElementById("hamburger");
  var z = document.getElementById("close");
  var scrollBar = document.getElementsByClassName("scrollbar-hidden");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.filter = "drop-shadow(8px 400px 250px black)";
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "block";
  }
}
function closer() {
  var x = document.getElementById("hamburgerBlock");
  var y = document.getElementById("hamburger");
  var z = document.getElementById("close");

  if (x.style.display === "block") {
    x.style.display = "none";
    z.style.display = "none";
    y.style.display = "block";
  }
}
