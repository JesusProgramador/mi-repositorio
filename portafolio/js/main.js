'use strict'


function toggleMenu() {
    const menuToggle = document.querySelector(".toggle");
    const navbar = document.querySelector(".menu");

    menuToggle.classList.toggle("active");
    navbar.classList.toggle("active");
}

/* const fecha = document.querySelector(".fecha");
const date = new Date();

if (typeof date === 'object') {
    document.write(fecha.append(date.getFullYear()));
} */