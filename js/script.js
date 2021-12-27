const menuMobileIcon = document.querySelector(".menu-mobile__icon-burger"),
    menuMobileOpenIcon = document.querySelector(".menu-mobile__icon-burger_opened"),
    menuMobile = document.querySelector(".menu-mobile__show");

menuMobileIcon.addEventListener ('click', () => {
    menuMobile.classList.toggle("d-none");
    menuMobileOpenIcon.classList.toggle("d-none");
    menuMobileIcon.classList.toggle("d-none");
});

menuMobileOpenIcon.addEventListener ('click', () => {
    menuMobile.classList.toggle("d-none");
    menuMobileOpenIcon.classList.toggle("d-none");
    menuMobileIcon.classList.toggle("d-none");
});