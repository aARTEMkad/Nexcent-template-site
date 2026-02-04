const menuBurger = document.querySelector('.menu__burger');
const menuMobile = document.querySelector('.menu-mobile');
const menuOverlay = document.querySelector('.menu-overlay');

menuBurger.addEventListener('click', () => {
    try {
        menuMobile.classList.toggle('is-open');
        menuOverlay.classList.toggle('is-open');
    } catch (err) {
        console.log(`Err| function 'event click for menu burger' ${err}`);
    }

})