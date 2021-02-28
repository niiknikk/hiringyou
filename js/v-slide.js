const slideContainer = document.querySelector('.slide-container');
const slideLeft = document.querySelector('.left-slide');
const slideRight = document.querySelector('.right-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slideLength = slideRight.querySelectorAll('div').length;
console.log(slideLength);

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slideLength - 1) * 100}vh`;
// console.log(slideLeft);

upButton.addEventListener('click', function(){
    changeSlide('up');
});
downButton.addEventListener('click', function(){
    changeSlide('down');
});

const changeSlide = function(direction) {
    const slideHeight = slideContainer.clientHeight;
    // console.log(slideHeight); 

    if(direction === 'up'){
        activeSlideIndex++;
            if(activeSlideIndex > slideLength - 1){
                activeSlideIndex = 0;
            }
    }else if(direction === 'down') {
        activeSlideIndex++;
            if(activeSlideIndex > slideLength -1){
                activeSlideIndex = 0;
            }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * slideHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`;

}


const container = document.querySelector('.slide-container');
let mq = window.matchMedia("(max-width: 700px)");
if(mq.matches) {
    // container.classList = 'slide-container split-left'
    container.classList.add('split-left');

}
else{
    container.classList.remove('split-left');
}
// console.log(container);