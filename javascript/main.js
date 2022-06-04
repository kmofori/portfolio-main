// NAVBAR
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

// Modal Constants
const kalawuButton = document.getElementById('view-kalawu');
const kalawuModal = document.getElementById('kalawu-modal');
const duksButton = document.getElementById('view-duks');
const duksModal = document.getElementById('duks-modal');
const deciderButton = document.getElementById('view-decider');
const deciderModal = document.getElementById('decider-modal');
const chakulaButton = document.getElementById('view-chakula');
const chakulaModal = document.getElementById('chakula-modal');
const modalClose = document.getElementById('modal-close');
document.getElementById("submit-message").disabled = true;

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

// Make modal Visible
kalawuButton.addEventListener('click', function () {
  kalawuModal.classList.add('modal-active');
});
duksButton.addEventListener('click', function () {
  duksModal.classList.add('modal-active');
});
deciderButton.addEventListener('click', function () {
  deciderModal.classList.add('modal-active');
});
chakulaButton.addEventListener('click', function () {
  chakulaModal.classList.add('modal-active');
});

// Close modal by clicking on close button
modalClose.addEventListener('click', function () {
  kalawuModal.classList.remove('modal-active');
});
modalClose.addEventListener('click', function () {
  duksModal.classList.remove('modal-active');
});
modalClose.addEventListener('click', function () {
  deciderModal.classList.remove('modal-active');
});
modalClose.addEventListener('click', function () {
  chakulaModal.classList.remove('modal-active');
});

// close modal by clicking on background
kalawuModal.addEventListener('click', function () {
  kalawuModal.classList.remove('modal-active');
});
duksModal.addEventListener('click', function () {
  duksModal.classList.remove('modal-active');
});
deciderModal.addEventListener('click', function () {
  deciderModal.classList.remove('modal-active');
});
chakulaModal.addEventListener('click', function () {
  chakulaModal.classList.remove('modal-active');
});
