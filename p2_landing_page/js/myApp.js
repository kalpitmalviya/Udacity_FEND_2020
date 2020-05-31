/**

 * 

 * Manipulating the DOM exercise.

 * Exercise programmatically builds navigation,

 * scrolls to anchors from navigation,

 * and highlights section in viewport upon scrolling.

 * 

 * Dependencies: None

 * 

 * JS Version: ES2015/ES6

 * 

 * JS Standard: ESlint

 * 

*/



/**

 * Define Global Variables

 * 

*/

//Declaration of gloabal variable for navigation
const navigation = document.getElementById('navbar__list');
// Sections Of Global Variable
const sections = document.querySelectorAll('section');



/**

 * End Global Variables

 * Start Helper Functions

 * 

*/

// Build navigation
const navigationBuild = () => {

    let navigationUI = ' ';
    // looping over all sections
    sections.forEach(section => {

        const sectionID = section.id;
        const sectionNavData = section.dataset.nav;

        navigationUI += `<li><a class="menu__link" href="#${sectionID}">${sectionNavData}</a></li>`;

    });
    // append all elements to the navigation
    navigation.innerHTML = navigationUI;


};

// Calling to navingation builder
navigationBuild();


// Add class 'active' to section when near top of viewport

// To Get The Largest Value That's Less than  or equal to the number
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove active class
const removeActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: black";
};


// add active class
const addActive = (conditional, section) => {
    if (conditional) {
        section.classList.add('your-active-class');
        section.style.cssText = "background-color:rgb(95, 30, 180)";
    };
};

//the Actual Function implementaion

const section = () => {
    sections.forEach(section => {
        const element = offset(section);

        viewPort = () => element < 150 && element >= -150;

        removeActive(section);
        addActive(viewPort(), section);
    });
};

window.addEventListener('scroll', section);

// Scroll to anchor ID using scroll TO event




/**

 * End Helper Functions

 * Begin Main Functions

 * 

*/



// build the nav





// Add class 'active' to section when near top of viewport





// Scroll to anchor ID using scrollTO event





/**

 * End Main Functions

 * Begin Events

 * 

*/
// Build menu 
// Scroll to section on link click
// Set sections as active