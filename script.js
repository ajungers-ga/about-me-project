const images = [
    "images/IMG_E0838.JPG",
    "images/Ingram_truck.jpg",
    "images/KLFFL_Champions.jpg",
    "images/PictureAtAWildGame.jpg",
    "images/Winter_classic.JPG",
    "images/alex_dad_golf.JPG",
    "images/alex_gideon.JPG",
    "images/alex_gideon_selfie.JPG",
    "images/alexwithhair.jpg",
    "images/flowerboy.JPG",
    "images/major_win.PNG",
    "images/presentation_major_win.JPG",
    "images/year_end_awards.JPG",
    "images/young_gideon.JPG"
];

let currentIndex = 0;

const  prevButton = document.getElementById("prevbutton");
const nextButton = document.getElementById("nextbutton");
const rotationFeature = document.querySelector(".rotationfeature");

const imageElement = document.createElement("img");
imageElement.src = images[currentIndex];
imageElement.alt = "My Passions Image";
imageElement.width = 300;

rotationFeature.appendChild(imageElement);

function updateImage(){
    imageElement.src = images[currentIndex];
}

nextButton.addEventListener("click",() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
})

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1) % images.length;
    updateImage();
    // more content?
});