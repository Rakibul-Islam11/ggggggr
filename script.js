// Hamburger menu functionality
const hamburgerMenu = document.getElementById('hamburger-menu');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

// Open menu on hamburger icon click
hamburgerMenu.addEventListener('click', () => {
    sideMenu.classList.add('open');
});

// Close menu on close icon click
closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});
