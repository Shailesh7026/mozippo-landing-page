const preloader = document.querySelector(".preloader");
const body = document.querySelector("body");

window.addEventListener("load", () => {
    preloader.classList.add("d-none");
});

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".menu-btn");
    const navbars = document.querySelector(".menu-btn i");
    const navbarMobile = document.querySelector(".navbar-mobile");
    const closeMenu = document.querySelector(".fa-xmark");

    // Close menu when the user clicks outside of the menu
    document.addEventListener("click", (e) => {
        if(e.target != menuBtn && e.target != navbarMobile && e.target != closeMenu  && e.target != navbars){
            navbarMobile.classList.remove("active");
        }
    });

    menuBtn.addEventListener("click", () => {
        navbarMobile.classList.add("active");
    });

    navbars.addEventListener("click", () => {
        navbarMobile.classList.add("active");
    });

    // Close menu when the close button (x mark) is clicked
    closeMenu.addEventListener("click", () => {
        navbarMobile.classList.remove("active");
    });

    // Close menu when the user scrolls
    window.addEventListener("scroll", () => {
        navbarMobile.classList.remove("active");
    });


});
