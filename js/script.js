const menuMobileIcon = document.querySelector(".menu__icon-burger"),
    menuMobileOpenIcon = document.querySelector(".menu__icon-burger_opened"),
    menuMobile = document.querySelector(".menu-mobile__show");

const toggleFn = () => {
    menuMobile.classList.toggle("menu-mobile__visible");
    menuMobileOpenIcon.classList.toggle("d-none");
    menuMobileIcon.classList.toggle("d-none");
};

menuMobileIcon.addEventListener ('click', toggleFn);
menuMobileOpenIcon.addEventListener ('click', toggleFn);