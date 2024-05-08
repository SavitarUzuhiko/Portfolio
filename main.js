const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');
const sun1 = document.querySelector('.sun');
const moon1 = document.querySelector('.moon');
const c1 = document.querySelector('.c1');
const c2 = document.querySelector('.c2');
const header = document.querySelector('#header');
const day = document.querySelector('.day');
const day1 = document.querySelector('.day1');
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
day1.addEventListener('click' , () => {
    if (style.backgroundColor === 'rgb(224, 224, 224)') {
        sun1.classList.add('noim');
        moon1.classList.remove('noim');
        c2.classList.add('tx');
        header.classList.add('bgc');
        user.classList.add("user1");
        ring.classList.add('brn');
        h1.classList.add('cyan');
        p.classList.add('cyan');
        link.classList.add('cyan1');

    } else {
        ring.classList.remove('brn');
        user.classList.remove("user1");
        sun1.classList.remove('noim');
        moon1.classList.add('noim');
        c2.classList.remove('tx');
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
