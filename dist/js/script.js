// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const topTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    topTop.classList.remoce('hidden');
    topTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    topTop.classList.remoce('flex');
    topTop.classList.add('hidden');
  }
};

// Hamburger
const Hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

Hamburger.addEventListener("click", function () {
  Hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if(e.target != hamburger && e.target != navMenu) {
    Hamburger.classList.remove("hamburger-active");
  navMenu.classList.add("hidden");
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classlist.remove('dark');
    localStorage.theme = 'light';
  }
});


// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}