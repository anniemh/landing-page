/**
 * Define Global Variables
 */

const navBar = document.getElementById('navbar-list');
const sections = document.querySelectorAll('section');
const fragment = new DocumentFragment();
const ham = document.querySelector('.ham');
const xIcon = document.getElementById('xIcon');
const menuIcon = document.getElementById('menuIcon');

/**
 * NAVIGATION
 * Create a navigation menu based on the sections of the page
 */

//build nav dynamically as an unordered list
sections.forEach(section => {
    const navLi = document.createElement('li');
    navLi.classList.add('nav-item');
    const anch = document.createElement('a');
    anch.innerHTML = section.getAttribute('data-nav');
    anch.href = `#${section.id}`;
    anch.classList.add('nav-link');
    //add active class to the first nav-link
    if(anch.textContent.includes('Home')) {
        anch.classList.add('active');
    }

    navLi.appendChild(anch);
    fragment.appendChild(navLi);
})

navBar.appendChild(fragment);


/**
 * MOBILE MENU: Open/Close
 */

//hamburger menu
ham.addEventListener('click', mobileMenu);

// toggle menu in and out when clicking on the hamburger
function mobileMenu() {
    // if the menu has the showMenu class, remove it to hide the menu
    if(navBar.classList.contains('showMenu')) {
        navBar.classList.remove('showMenu');
        // hide the xIcon
        xIcon.style.display = 'none';
        // show the menuIcon
        menuIcon.style.display = 'block';
    } else {
        // if the menu doesn't have the showMenu class, add it to show the menu
        navBar.classList.add('showMenu');
        // show the xIcon
        xIcon.style.display = 'block';
        // hide the menuIcon
        menuIcon.style.display = 'none';
    }
}

//get the list of links
const navLinks = document.querySelectorAll('.nav-link');

// hide the menu when the user click on the links
navLinks.forEach(navLink => navLink.addEventListener('click', mobileMenu));


/**
 * ADD SMOOTH SCROLLING
 * when clicking on any anchor link
 */
const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

/**
 * SECTION ACTIVE STATE WITH INTERSECTION OBSERVER
 * navbar active section is higlighted and it updates on scroll
 * section in view highligted from other sections
 */

//set our options
const observerOptions = {
    threshold: 0.4
}

//we write our callback function
const highlight = entries => {
    //console.log(entries);
    entries.forEach(entry => {
        if(entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            //const bounds = entry.boundingClientRect;
            //console.log(bounds);
            //console.log(entry.target);
            //console.log(entry.intersectionRatio);
            //remove active class of first nav-link home
            document.querySelector('.active').classList.remove('active');
            //get id of intersecting section
            const id = entry.target.getAttribute('id');
            //find matching link & add active class
            document.querySelector(`[href="#${id}"]`).classList.add('active');

        }
        if(entry.isIntersecting) {
            entry.target.classList.add('active-section');
        } else {
            entry.target.classList.remove('active-section');
        }
    });
}

const observerHighlight = new IntersectionObserver(highlight, observerOptions);

sections.forEach((section) => {
    observerHighlight.observe(section)
});


/**
 * SCROLL TO TOP BUTTON WITH INTERSECTION OBSERVER
 */

//select elements we want to observe
const target = document.querySelector('footer');

const topButton = document.getElementById('scrollToTop');

//set our options
const options = {
    threshold: 0.1
}

//we write our callback function
const onIntersect = entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            //show scroll to top button
            topButton.style.display = 'block';
        } else {
            //hide scroll to top button
            topButton.style.display = 'none';
        }
    });
}

function scrollToTop() {
    document.documentElement.scrollTo( {
        top: 0,
        behavior: 'smooth'
    });
}

topButton.addEventListener('click', scrollToTop);

//initiate the observer with the function created above
let observerScrollToTop = new IntersectionObserver(onIntersect, options);

//run the observer
observerScrollToTop.observe(target);


































