// NAVBAR
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

// Show Navbar
toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Hide Hamburger Menu On Click
toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('hide-bars');
});

// Close Navbar
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

// Close Menu on clicking an item
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

// Active Link Activation
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollAtive);

function scrollAtive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  });
}
