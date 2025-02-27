let menuIcon = document.querySelector('#menu-icon'),
  navbar = document.querySelector('.navbar'),
  sections = document.querySelectorAll('section'),
  navLinks = document.querySelectorAll('header nav a');

const colors = ['aqua', 'tulip', 'blood', 'lime', 'dodger', 'gold'];
let number = Math.floor(Math.random() * 10) % colors.length;
let body = document.querySelector('body');
let checker = document.querySelector('.color');
let checkedcolor = colors[number];
body.className = checkedcolor;
checker.innerHTML = `<option value="${checkedcolor}">${checkedcolor.toUpperCase()}</option>`;

colors.forEach((color) =>
  color != checkedcolor
    ? (checker.innerHTML += `<option value="${color}">${color.toUpperCase()}</option>`)
    : ''
);

window.addEventListener('onscroll', () => {
  sections.forEach((e) => {
    let top = window.scrollY;
    let offset = e.offsetTop - 150;
    let height = e.offsetHeight;
    let id = e.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
});

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

function selectColor() {
  let select = document.querySelector('.color').value;
  let body = document.querySelector('body');
  body.className = `${select}`;
}
