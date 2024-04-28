const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');
const c1 = document.querySelector('.c1');
const header = document.querySelector('#header');
const day = document.querySelector('.day');

day.addEventListener('click' , () => {
    
    // Elementni tanlash
    var element = document.querySelector('.backwhite');
    var style = window.getComputedStyle(element);
    if (style.backgroundColor === 'rgb(224, 224, 224)') { // '#e0e0e0' rgb ko'rinishida
        sun.classList.add('noim');
        moon.classList.remove('noim');
        c1.classList.add('tx');
        header.classList.add('bgc');
    } else {
        sun.classList.remove('noim');
        moon.classList.add('noim');
        c1.classList.remove('tx');
        header.classList.remove('bgc');
    }

});