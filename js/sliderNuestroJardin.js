const sliderOurGarden = document.querySelector('#sliderOurGarden');
let sliderSectionOurGarden = document.querySelectorAll('.slider__sectionOurGarden');
let sliderSectionLastOurGarden = sliderSectionOurGarden[sliderSectionOurGarden.length - 1];

const leftOurGarden = document.querySelector('#leftOurGarden');
const rigthOurGarden = document.querySelector('#rigthOurGarden');

sliderOurGarden.insertAdjacentElement('afterbegin', sliderSectionLastOurGarden);

function nextOurGarden() {
    let sliderSectionFirtOurGarden = document.querySelectorAll('.slider__sectionOurGarden')[0];
    sliderOurGarden.style.marginLeft = '-200%';
    sliderOurGarden.style.transition = 'all 0.5s ease';
    setTimeout(function(){
        sliderOurGarden.style.transition = 'none';
        sliderOurGarden.insertAdjacentElement('beforeend', sliderSectionFirtOurGarden);
        sliderOurGarden.style.marginLeft = '-100%';
    }, 500);
}

function prevOurGarden() {
    let sliderSectionOurGarden = document.querySelectorAll('.slider__sectionOurGarden');
    let sliderSectionLastOurGarden = sliderSectionOurGarden[sliderSectionOurGarden.length - 1];
    sliderOurGarden.style.marginLeft = '0%';
    sliderOurGarden.style.transition = 'all 0.5s ease';
    setTimeout(function(){
        sliderOurGarden.style.transition = 'none';
        sliderOurGarden.insertAdjacentElement('afterbegin', sliderSectionLastOurGarden);
        sliderOurGarden.style.marginLeft = '-100%';
    }, 500);
}

rigthOurGarden.addEventListener('click', function(){
    nextOurGarden();
});

leftOurGarden.addEventListener('click', function(){
    prevOurGarden();
});

setInterval(function(){
    nextOurGarden();
}, 5000);
