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

// const leftImg = document.querySelector("#left");
// leftImg.addEventListener("click", () => {

//   console.log("clicked left");
// });
