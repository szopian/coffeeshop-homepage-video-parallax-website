window.onscroll = function () {
  myFunction();
};

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

const leftImg = document.querySelector("#left");
leftImg.addEventListener("click", () => {
  console.log("clicked video-1");
  const video1 = document.getElementById("video-1");
  video1.scrollIntoView();
});

const centerLeftImg = document.querySelector("#center-left");
centerLeftImg.addEventListener("click", () => {
  console.log("clicked center-left");
  const img2 = document.getElementById("img2");
  img2.scrollIntoView();
});

const centerRightImg = document.querySelector("#center-right");
centerRightImg.addEventListener("click", () => {
  console.log("clicked center-right");
  const img3 = document.getElementById("img3");
  img3.scrollIntoView();
});

const rightImg = document.querySelector("#right");
rightImg.addEventListener("click", () => {
  console.log("clicked right");
  const img4 = document.getElementById("img4");
  img4.scrollIntoView();
});
