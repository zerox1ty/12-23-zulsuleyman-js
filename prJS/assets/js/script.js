"use strict"

const sliderBody = document.querySelector('.slider-body');
const sliderItems = Array.from(document.querySelectorAll('.slider-item'));
const sliderDots = Array.from(document.querySelectorAll('.slider-dot'));
const sliderNav = document.querySelector('.slider-dots');
const sliderContent = document.querySelector('.slider-content');

sliderBody.addEventListener('click', function(event){
    let targetArrow = event.target.closest('.slider-arrow');
    if(!targetArrow) return;

    let currentActiveImage = document.querySelector('.slider-item active');
    let currentActiveIndex = sliderItems.indexOf(currentActiveImage);

    currentActiveImage.classList.remove('active');
    document.querySelector('.slider-dot active').classList.remove('active');
    changeActive(targetArrow, currentActiveIndex);

    let newActiveImage = document.querySelector('slider-item.active');
    let newActiveIndex = sliderItems.indexOf(newActiveImage);
    scrollSlider(newActiveIndex);
}
);

function scrollSlider(index){
    sliderContent.style.transform = `translateX(${index*-100}%)`;
}

function changeActive(targetArrow, index){
    if(targetArrow.classList.contains('arrow-left')){
        if(index==0){
            sliderItems.at(-1).classList.add('active');
            sliderDots.at(-1).classList.add('active');
        }
        else{
            sliderItems[index-1].classList.add('active');
            sliderDots[index-1].classList.add('active');
        }
    }
}

sliderNav.addEventListener('click', function(event){
    let targetDot = event.target.closest('.slider-dot');
    if(!targetDot) return;

    if(targetDot.classList.contains('active')) return;

    document.querySelector('.slider-dot.active').classList.remove('active');
    document.querySelector('.slider-item.active').classList.remove('active');

    targetDot.classList.add('active');
    sliderItems[targetDot.dataset.index].classList.add('active');

    scrollSlider(targetDot.dataset.index);
})