'use strict'



function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color) {
    const circleColor = document.querySelector('.circle');
    circleColor.style.background = color
}

function toggleMenu() {
    const menuToggle = document.querySelector(".toggle");
    const navbar = document.querySelector(".navbar");

    menuToggle.classList.toggle("active");
    navbar.classList.toggle("active");
}