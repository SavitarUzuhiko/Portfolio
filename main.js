const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');
const c1 = document.querySelector('.c1');
const header = document.querySelector('#header');
const day = document.querySelector('.day');
const user = document.querySelector(".user")
const ring = document.querySelector('.ring')
const element = document.querySelector('.backwhite');
const h1 = document.querySelector('.h1');
const p = document.querySelector('.p');
const style = window.getComputedStyle(element);
const bar = document.querySelector('.fa-bars');
const ul = document.querySelector('.ul');

day.addEventListener('click' , () => {
    if (style.backgroundColor === 'rgb(224, 224, 224)') {
        sun.classList.add('noim');
        moon.classList.remove('noim');
        c1.classList.add('tx');
        header.classList.add('bgc');
        user.classList.add("user1");
        ring.classList.add('brn');
        h1.classList.add('cyan');
        p.classList.add('cyan');
        link.classList.add('cyan1');

    } else {
        ring.classList.remove('brn');
        user.classList.remove("user1");
        sun.classList.remove('noim');
        moon.classList.add('noim');
        c1.classList.remove('tx');
        header.classList.remove('bgc');
        h1.classList.remove('cyan');
        p.classList.remove('cyan');
        link.classList.remove('cyan1');
    }

});
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}