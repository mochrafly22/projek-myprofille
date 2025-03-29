// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active')
};

// Toggle class active untuk search from
const searchFrom = document.querySelector('.search-from');
const searchBox = document.querySelector('#search-box')

document.querySelector('#search-button').onclick = (e) => {
  searchFrom.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
} 

// Klik di luar element
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button')

document.addEventListener('click', function(e) {
  if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
  }

  if(!sb.contains(e.target) && !searchFrom.contains(e.target)) {
    searchFrom.classList.remove('active')
  }
});