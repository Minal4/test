
const hamburger = document.querySelector('.hamburger');
const body = document.body;
const wrap = document.querySelector('.header');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    body.classList.toggle('no-scroll');
    if (body.classList.contains("no-scroll")) {
        // Disable the body's scroll
        body.style.overflow = "hidden";
    } else {
        // Enable the body's scroll
        body.style.overflow = "scroll";
    }
    wrap.classList.toggle('is-active-header');
})


const header = document.querySelector('.header')
// Get the target element

// Get the current scroll position
let currentScroll = 0;

// Add a scroll event listener to the window
window.addEventListener("scroll", function () {
    // Get the new scroll position
    let newScroll = window.pageYOffset;
    // Check if the user is scrolling up or down
    if (newScroll > currentScroll) {
        // The user is scrolling down, remove the "transform" class
        header.classList.remove("transform");
        header.classList.add("scrolled");
    } else {
        // The user is scrolling up, add the "transform" class
        header.classList.add("transform");
        header.classList.remove("scrolled");
    }

    if (newScroll == 0) {
        // The user is scrolling down, remove the "transform" class
        header.classList.remove("transform");
        console.log('first')
    }


    // Update the current scroll position
    currentScroll = newScroll;
});

// CALL OWLCAROUSEL

$('.custom-slider').owlCarousel({
    items: 1,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450,
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    autoPlaySpeed: 500,
    autoPlayTimeout: 500,
    dots: true,
    nav: true,
});