"use strict";


window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-container");
  loader.classList.add("loader-finish")
});
window.addEventListener("DOMContentLoaded", () => {
  AOS.init();

  const burger = document.querySelector(".menu-burger");
  const menu = document.querySelector(".mobile-nav");

  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
  });
});
