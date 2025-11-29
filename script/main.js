//Hamburger
const hamburger = document.querySelector('.hamburger');
const mainNavLinks = document.querySelector('.mainNav');

hamburger.addEventListener('click', () => {
    mainNavLinks.classList.toggle('active');
});