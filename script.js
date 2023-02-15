const header = document.getElementsByTagName('header');
const body = document.getElementsByTagName('body');
const ham_btn = document.querySelector('.hamburger-btn');
const nav = document.querySelector('.main-navigation');

ham_btn.addEventListener('click', () => {
    nav.classList.toggle('hide');
    header[0].classList.toggle('backdrop');
    body[0].classList.toggle('noscroll');
    if (ham_btn.getAttribute('aria-expanded') == 'false') {
        ham_btn.setAttribute('aria-expanded', 'true');
    }else {
        ham_btn.setAttribute('aria-expanded', 'false');
    }
});
