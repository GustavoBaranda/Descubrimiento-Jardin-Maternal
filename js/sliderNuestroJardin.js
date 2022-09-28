const slider2 = document.querySelector('#slider2');
let sliderSection2 = document.querySelectorAll('.slider__section2');
let sliderSectionLast2 = sliderSection2[sliderSection2.length - 1];

const letf2 = document.querySelector('#letf2');
const rigth2 = document.querySelector('#rigth2');

slider2.insertAdjacentElement('afterbegin', sliderSectionLast2);

function next2() {
    let sliderSectionFirt2 = document.querySelectorAll('.slider__section2')[0];
    slider2.style.marginLeft = '-200%';
    slider2.style.transition = 'all 0.5s ease';
    setTimeout(function(){
        slider2.style.transition = 'none';
        slider2.insertAdjacentElement('beforeend', sliderSectionFirt2);
        slider2.style.marginLeft = '-100%';
    }, 500);
}

function prev() {
    let sliderSection2 = document.querySelectorAll('.slider__section2');
    let sliderSectionLast2 = sliderSection2[sliderSection2.length - 1];
    slider2.style.marginLeft = '-0%';
    slider2.style.transition = 'all 0.5s ease';
    setTimeout(function(){
        slider2.style.transition = 'none';
        slider2.insertAdjacentElement('afterbegin', sliderSectionLast2);
        slider2.style.marginLeft = '-100%';
    }, 500);
}

rigth2.addEventListener('click', function(){
    next2();
});

left2.addEventListener('click', function(){
    prev2();
});

setInterval(function(){
    next();
}, 5000);
