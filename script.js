// File Purpose: Convert vanilla JS from oldscript.js file to jQuery in this script.js file


const images = [
    "images/IMG_E0838.JPG",
    // "images/Ingram_truck.jpg",
    "images/KLFFL_Champions.jpg",
    "images/PictureAtAWildGame.jpg",
    "images/Winter_classic.JPG",
    "images/alex_dad_golf.JPG",
    "images/alex_gideon.JPG",
    "images/alex_gideon_selfie.JPG",
    // "images/alexwithhair.jpg",
    // "images/flowerboy.JPG",
    "images/major_win.PNG",
    "images/presentation_major_win.JPG",
    "images/year_end_awards.JPG",
    "images/young_gideon.JPG"
];

let currentIndex = 0;


const $prevButton = $("#prevbutton");
const $nextButton = $("#nextbutton");
const $rotationFeature = $(".rotationfeature");
const $nerdyGlassesBtn = $("#nerdy-glasses");
const $navMenu = $("#nav-sections");
const $darkModeToggle = $("#dark-mode");
const $notRealDoctor = $("h1");
const $tooltip = $("#tooltip");
const $linkedInLink = $("#linkedin-link");
const $emailLink = $("#email-link");



const $imageElement = $("<img>", {
  src: images[currentIndex],
  alt: "My Passions Image",
  width: 200
});
$rotationFeature.append($imageElement);


function updateImage() {
  $imageElement.attr("src", images[currentIndex]);
}


$nextButton.on("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

$prevButton.on("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});


$nerdyGlassesBtn.on("click", () => {
  $navMenu.toggleClass("show");
});


$darkModeToggle.on("click", () => {
  $("body").toggleClass("dark-mode");
});


$notRealDoctor.on("mouseenter", () => {
  $tooltip.css("display", "inline");
});

$notRealDoctor.on("mouseleave", () => {
  $tooltip.css("display", "none");
});


$linkedInLink.on("click", () => {
  window.open("https://www.linkedin.com/in/alexander-jungers/", "_blank");
});


