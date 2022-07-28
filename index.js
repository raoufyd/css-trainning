function start() {
  var x = document.getElementById("hamburgerBlock");
  var y = document.getElementById("hamburger");
  var z = document.getElementById("close");

  if (x.style.display === "block") {
    x.style.display = "none";
    document.body.classList.remove("overflowHidden");
    document.body.classList.add("overflowScroll");
  } else {
    x.style.filter = "drop-shadow(8px 100px 250px black)";
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "block";

    document.body.classList.remove("overflowScroll");
    document.body.classList.add("overflowHidden");
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
