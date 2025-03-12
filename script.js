//varaibles


// BELOW (Lines 7-22) =
// 1. This is an ARRAY that that is holding the images for my ROTATION.FEATURE (carousel)
// 2. I commented out items i DO NOT want to come up in the rotation.feature - These images should be CONSTANT to their current position on the HTML & would be duplicates in carousel.
// 3. See JS (lines 28, 46, 71)
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

// BELOW (line 2) = 
// This is a VARIABLE that tracks which image is currently displayed. Chose LET instead of CONST since this value SHOULD change based on user interaction.

let currentIndex = 0;


// BELOW (Lines 43-52)

// 43. grabbing the prevButton element
// 44. grabbing the nextButton element
// 45. grabbing the CONTAINER(queryselector)for rotating images 
// 46. grabbing the GLASSES BUTTON to TOGGLE the NAV MENU
// 47. grabbing the NAV MENU SECTIONS for toggling hidden
// 48. grabbing the DARK-MODE toggle
// 49. grabbing the H1 element to add tooltip hover
// 50. grabbing the TOOLTIP to display HIDDEN text content
// 51. grabbing the LINKEDINLINK SPAN to make the content clickable via JS in HTML footer
// 52. grabbing the EMAIL SPAN to make the content clickable via JS in HTML footer 

const prevButton = document.getElementById("prevbutton");
const nextButton = document.getElementById("nextbutton");
const rotationFeature = document.querySelector(".rotationfeature");
const nerdyGlassesBtn = document.getElementById('nerdy-glasses');
const navMenu = document.getElementById('nav-sections');
const darkModeToggle = document.getElementById('dark-mode');
const notRealDoctor = document.querySelector('h1');
const tooltip = document.getElementById('tooltip');
const linkedInLink = document.getElementById('linkedin-link');
const emailLink = document.getElementById('email-link');


// BELOW (Lines 69-75 )

// 69. creating the IMAGE ELEMENT. the element is currently stored inside the newly created variable- imageElement.

// 71. This line sets the source (src) of this image and where to pull the image from images ARRAY- JS (lines 7-22).
// 72. this line sets the alternate (alt) text for the image which is important for visually impaired users and search engine optimization. 
// 73. This line sets the imageElement width to 200px so all images APPEAR the same size. I can play with the height of the imageElement in css so it fits proportionally.

// 75. This line i am APPENDING (attaching) the imageElement into the rotationFeature container that exists in my HTML (lines 73-76)...
//     The div element has a CLASS of rotationFeature with only the buttons currently in the container - waiting to add the content or IMAGE in this case...
//     I am GRABBING this container from JS (line 45) and now rotationFeature represents that div in the HTML (lines 73-76)...
//     This line places image inside that div, without appendChild the image would only exist in the JS memory and never actually be displayed.

const imageElement = document.createElement("img");

imageElement.src = images[currentIndex];
imageElement.alt = "My Passions Image";
imageElement.width = 200;

rotationFeature.appendChild(imageElement);



//functions



function updateImage() {
    imageElement.src = images[currentIndex];
}




//event listeners


//BELOW
//next and prev buttons


nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
})

//BELOW
//1- currentIndex = (cirrentIndex -1 goes back one image. 
//2- if current value of currentIndex is 0, we don't want a negative number, rather a loop.  
//3- + images.length (if currentIndex - 1, adding images.length makes it wrap around)
//4- % images.length the mudulo (%) turns the array into a circular loop.
//BELOW

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();

});

nerdyGlassesBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

});




// BELOW 

// hover interaction (see HTML line 19: <span id="tooltip">(not a real doctor)</span>)

// i am adding a new type of event: mouseover & mouseleave. 
// any time my  EventListener (mouseover or HOVER in css) is triggered-
// i want to display the .tooltip hidden content (not a real doctor)

// this only worked AFTER i REMOVED display: none; in my .tooltip css.... BECAUSE javascript and css were conflicting over the control of the same property
// javascript is responsible for WHEN this happens and my css (.tooltip) is responsible for HOW it looks and WHERE it is displayed


// BELOW

notRealDoctor.addEventListener('mouseover', () => {
    tooltip.style.display = 'inline';
});

//hide the tool tip 

notRealDoctor.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
});






linkedInLink.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/alexander-jungers/', '_blank');
});






// NEEDS WORK!!!!
emailLink.addEventListener('click', () => {
    window.location.href = 'mailto:alex.jungers@gmail.com';
});