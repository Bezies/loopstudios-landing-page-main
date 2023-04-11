const hamburger = document.querySelector(".open");
const close = document.querySelector(".close-off");
const menu = document.querySelector(".menu");
const links = document.querySelector(".links");


hamburger.addEventListener("click", () => {
    hamburger.classList.replace("open", "open-off");
    menu.classList.replace("menu", "menu-on")
    close.classList.replace("close-off", "close");
}) 

close.addEventListener("click", () => {
    menu.classList.replace("menu-on", "menu")
    close.classList.replace("close", "close-off");
    hamburger.classList.replace("open-off", "open");
})