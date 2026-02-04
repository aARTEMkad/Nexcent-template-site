const menu__burger = document.querySelector('.menu__burger');
const menu__mobile = document.querySelector('.menu-mobile');
const menu__overlay = document.querySelector('.menu-overlay');

menu__burger.addEventListener('click', () => {
    try {
        menu__mobile.classList.toggle('is-open');
        menu__overlay.classList.toggle('is-open');
    } catch (err) {
        console.log(`Err| function 'event click for menu burger' ${err}`);
    }

})