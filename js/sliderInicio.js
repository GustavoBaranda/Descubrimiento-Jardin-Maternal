const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const letf = document.querySelector('#letf');
const rigth = document.querySelector('#rigth');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next() {
    let sliderSectionFirt = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s ease';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirt);
        slider.style.marginLeft = '-100%';
    }, 500);
}

function prev() {
    let sliderSection = document.querySelectorAll('.slider__section');
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = '-0%';
    slider.style.transition = 'all 0.5s ease';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = '-100%';
    }, 500);
}

rigth.addEventListener('click', function(){
    next();
});

left.addEventListener('click', function(){
    prev();
});

setInterval(function(){
    next();
}, 5000);
