const sliders = document.querySelector('.sliders')
const slidersImg = document.querySelectorAll('.sliders img')


const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

let counter = 1

//Get the sliders width
const size = slidersImg[0].clientWidth

//Define the position of the slide
function defineSlidePosition(){
    sliders.style.transform = 'translateX(' + (-size * counter ) + 'px)'
}

//Get next slide
nextBtn.addEventListener('click', () =>{
    if(counter >= slidersImg.length -1) return
    sliders.style.transition = "transform 0.4s ease-in-out"
    counter++
    console.log(counter)
    defineSlidePosition()
})

//Get previous slide
prevBtn.addEventListener('click', () =>{
    if (counter <= 0) return
    sliders.style.transition = "transform 0.4s ease-in-out"
    counter--   
    console.log(counter)
    defineSlidePosition()
})

//Enable slides looping
sliders.addEventListener('transitionend', () =>{
    if (slidersImg[counter].id === "lastClone"){
        sliders.style.transition = "none";
        counter = slidersImg.length -2;
        defineSlidePosition();
    }
    if (slidersImg[counter].id === "fristClone"){
        sliders.style.transition = "none";
        counter = slidersImg.length - counter;
        defineSlidePosition();
    }
})