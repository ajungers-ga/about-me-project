// //varaibles

// // BELOW (Lines 7-22) =
// // 1. This is an ARRAY that that is holding the images for my ROTATION.FEATURE (carousel)
// // 2. I commented out items i DO NOT want to come up in the rotation.feature - These images should be CONSTANT to their current position on the HTML & would be duplicates in carousel.
// // 3. See JS (lines 28, 46, 71)
// const images = [
//     "images/IMG_E0838.JPG",
//     // "images/Ingram_truck.jpg",
//     "images/KLFFL_Champions.jpg",
//     "images/PictureAtAWildGame.jpg",
//     "images/Winter_classic.JPG",
//     "images/alex_dad_golf.JPG",
//     "images/alex_gideon.JPG",
//     "images/alex_gideon_selfie.JPG",
//     // "images/alexwithhair.jpg",
//     // "images/flowerboy.JPG",
//     "images/major_win.PNG",
//     "images/presentation_major_win.JPG",
//     "images/year_end_awards.JPG",
//     "images/young_gideon.JPG"
// ];

// // BELOW (line 27) = 
// // This is a VARIABLE that tracks which image is currently displayed. Chose LET instead of CONST since this value SHOULD change based on user interactions (prevButton & nextButton).

// let currentIndex = 0; //THIS IS A GLOBAL VARIABLE that will be used for images being displayed and button logic.

// // BELOW (Lines 43-52, 69) Defining variables

// // 43. grabbing the prevButton element by ID (HTML line 82)
// // 44. grabbing the nextButton element by ID (HTML line 83)
// // 45. grabbing the CONTAINER for rotationFeature by queryselector (HTML lines 81-84)
// // 46. grabbing the GLASSES BUTTON to TOGGLE the NAV MENU by ID (HTML line 20)
// // 47. grabbing the NAV MENU SECTIONS for toggling hidden by ID (HTML lines 23-30)
// // 48. grabbing the DARK-MODE toggle by ID (HTML line 15)
// // 49. grabbing the notRealDoctor in H1 by queryselector (HTML line 17) which exists inside the h1.
// // 50. grabbing the TOOLTIP to display HIDDEN text content by ID (HTML line 17)
// // 51. grabbing the LINKEDINLINK SPAN to make the content clickable via JS in (HTML line 116)
// // 52. grabbing the EMAIL SPAN to make the content clickable via JS in (HTML line 117)
// // 69. grabbing the IMAGE ELEMENT, this is stored inside the variable imageElement 

// // const prevButton = document.getElementById("prevbutton");
// // const nextButton = document.getElementById("nextbutton");
// // const rotationFeature = document.querySelector(".rotationfeature"); //since .rotationFeature is a CLASS im using queryselector not id
// // const nerdyGlassesBtn = document.getElementById('nerdy-glasses'); // (HTML line 20, JS lines 137-139, CSS Lines 117-123)
// // const navMenu = document.getElementById('nav-sections'); // (HTML Lines 24-29)
// // const darkModeToggle = document.getElementById('dark-mode'); // (HTML Line 15)
// // const notRealDoctor = document.querySelector('h1');
// // const tooltip = document.getElementById('tooltip');
// // const linkedInLink = document.getElementById('linkedin-link'); //
// // const emailLink = document.getElementById('email-link');



// // BELOW (Lines 69-75 )

// // 69. creating the IMAGE ELEMENT. the element is currently stored inside the newly created variable- imageElement.

// // 71. This line sets the source (src) of this image and where to pull the image from images ARRAY- JS (lines 7-22).
// // 72. this line sets the alternate (alt) text for the image which is important for visually impaired users and search engine optimization. 
// // 73. This line sets the imageElement width to 200px so all images APPEAR the same size. I can play with the height of the imageElement in css so it fits proportionally.

// // 75. This line i am APPENDING (attaching) the imageElement into the rotationFeature container that exists in my HTML (lines 73-76)...
// //     The div element has a CLASS of rotationFeature with only the buttons currently in the container - waiting to add the content or IMAGE in this case...
// //     I am GRABBING this container from JS (line 45) and now rotationFeature represents that div in the HTML (lines 73-76)...
// //     This line places image inside that div, without appendChild the image would only exist in the JS memory and never actually be displayed.

// const imageElement = document.createElement("img");    //this is my imageElement Creation

// imageElement.src = images[currentIndex];
// imageElement.alt = "My Passions Image";
// imageElement.width = 200;

// rotationFeature.appendChild(imageElement);


// //////                 FUNCTIONS                   //////

// //BELOW (Lines 92-94)

// // This code block is a function to update the displayed image based on currentIndex in the images array JS (Lines 7-22). 
// // The idea is change the images displayed based on USER ACTIONS (click next/prev buttons)
// // The purpose of the fuction is to update the source (src) of the image that is displayed in the rotationFeature container HTML (lines 73-76). 
// // This function seperates logic of what SHOULD HAPPEN from interactable ACTIONS from the user like clicking nextButton.

// // 92. This line defines the function updateImage. 
// // 92. No parameter is needed because the function already knows what to do (it uses the GLOBAL varaible currentIndex)  
// // 93. I am changing the source (src) attribute for imageElement.
// // 93. I am grabbing the string from the array of images based on currentIndex. This line is necessary to make the image change on the users display when clicking next or prev buttons

// function updateImage() {                    //function declaration
//     imageElement.src = images[currentIndex];               
// }




// //event listeners

// // BELOW (arrow functions) (Lines 114-116)

// // 114. I am defining the function(nextButton) as part of the .addEventListener. 
// // 114. When the nextButton is CLICKED run the following functions. 
// // 114. () this represents an EMPTY parameter (unnamed function), because my button does not need extra input.
// // 114. => { } defines the ARROW function

// // 115. This line INCREASES the current index by 1
// // 115. % images.length is used so that when the user gets to the last image, the currentIndex LOOPS back to 0 (or the first image)
// //
// // 116. This line CALLS the function (updateImage) which was defined earlier to update the displayed image. 
// // 116. With out CALLING the function, the image would never show up on the users screem

// // // nextButton.addEventListener("click", () => {                  // () => this connects our parameters
// //     // currentIndex = (currentIndex + 1) % images.length; // the modulus operator makes sure we go back to start (image 0) AFTER last image. Making it a loop.,
// //     // updateImage(); // if current index is 9/9 the % images.length changes this into a loop so currentImage does not go over 9.
// // })

// //BELOW (lines 126-129)
// //1- currentIndex = (cirrentIndex -1 goes back one image. 
// //2- if current value of currentIndex is 0, we don't want a negative number, rather a loop.  
// //3- + images.length (if currentIndex - 1, adding images.length makes it wrap around)
// //4- % images.length the mudulo (%) turns the array into a circular loop.
// //BELOW

// // prevButton.addEventListener("click", () => {
// //     currentIndex = (currentIndex - 1 + images.length) % images.length;
// //     updateImage();
// // });



// // BELOW =
// // JS controlling actions from the user to toggle my dropdown (nerdyGlasses) & toggle for my dark mode
// // Both are waiting for a click event and then target their specific css sections. 
// //

// //const nerdyGlassesBtn = document.getElementById('nerdy-glasses'); 
// nerdyGlassesBtn.addEventListener('click', () => {   // menu toggle using the nerdy glasses button (HTML Line 20)
//     navMenu.classList.toggle('show');
// });



// darkModeToggle.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');

// });




// // BELOW 

// // hover interaction (see HTML line 19: <span id="tooltip">(not a real doctor)</span>)

// // i am adding a new type of event: mouseover & mouseleave. 
// // any time my  EventListener (mouseover or HOVER in css) is triggered-
// // i want to display the .tooltip hidden content (not a real doctor)

// // this only worked AFTER i REMOVED display: none; in my .tooltip css.... BECAUSE javascript and css were conflicting over the control of the same property
// // javascript is responsible for WHEN this happens and my css (.tooltip) is responsible for HOW it looks and WHERE it is displayed


// // BELOW

// notRealDoctor.addEventListener('mouseover', () => {           //notRealDoctor = .tooltip
//     tooltip.style.display = 'inline';
// });

// //hide the tool tip 

// notRealDoctor.addEventListener('mouseout', () => {
//     tooltip.style.display = 'none';
// });



// //BELOW
// // linkedInLink is a variable defined (JS Line 51)
// // .addEventListener is a METHOD that waits for a specific EVENT to happen
// // 'click' is the TYPE of EVENT to listen for
// // () the parentheses are empty because no parameters on needed for this function. Not passing any data to it.
// // => is the OPERATOR in the function. It separates the empty parameters from the code.
// // { } Inside these curly braces is the code to run.
// // window.open is a built in JS function that opens a new widow or tab.
// // 'https:.... represents the URL to open my linkedin
// // '_blank' represents the SECOND argument telling the browser to open the URL in a NEW TAB/WINDOW.
// // (without '_blank - the user may be removed from this site and taken directly to the link.

// //const linkedInLink = document.getElementById('linkedin-link');

// linkedInLink.addEventListener('click', () => {
//     window.open('https://www.linkedin.com/in/alexander-jungers/', '_blank');
// });






// // // NEEDS WORK!!!!
// // emailLink.addEventListener('click', () => {
// //     window.open = ('alex.jungers@gmail.com', 'mattisawesome');
// // });













// //        LINES 224 - 236 Represent my ORIGINAL functioning CAROUSEL




// // prevButton.addEventListener("click", () => {
// //     currentIndex = (currentIndex - 1 + images.length) % images.length;
// //     updateImage();
// // });





// // nextButton.addEventListener("click", () => {                 
// //     currentIndex = (currentIndex + 1) % images.length; 
// //     updateImage();
// // });


// //              HOW CAN I KEEP MY CAROUSEL FUNCTIONING, WITHOUT USING THE MODULUS OPERATOR ( % ) ?????



// nextButton.addEventListener("click", () => {
//     if (currentIndex === images.length - 1) {
//         currentIndex = 0;                   // If its the last image, go back to the first giving a loop effect
//     } else {
//         currentIndex += 1;                  // or else, display the next image
//     }    
//     updateImage();
// });


// prevButton.addEventListener("click", () => {
//     if (currentIndex === 0) {
//         currentIndex =images.length -1; // if its the first image, display the last image of the array. Giving a loop effect
//     } else {
//         currentIndex -= 1;              // or else, display the PREVIOUS image
//     }
//     updateImage();  
    
// });



// // BY USING IF, ELSE STATEMENTS - I created the same desired functional arrow function to loop through the images in my array. No changes to my CSS or HTML we're necessary with this change.




