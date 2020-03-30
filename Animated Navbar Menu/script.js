const sections = document.querySelectorAll('section')
const bubble = document.querySelector('.bubble')

//Set color array for the bubble
const colorArray = [
    "#28C7FA",
    "#6AF3B1",
    "#00D9F1"
]

const colors = document.querySelectorAll('[data-page]')
const options = {
    threshold: 0.7
}

let observer = new IntersectionObserver(navCheck, options)

function navCheck(entries){
    entries.forEach(entry =>{
        const className = entry.target.className
        const activeAnchor = document.querySelector(`[data-page=${className}]`)
        const gradientIndex = entry.target.getAttribute('data-index')
        const coords = activeAnchor.getBoundingClientRect()
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        }
        //Set bubble position and change color
        if(entry.isIntersecting){
            bubble.style.setProperty('left', `${directions.left}px`)
            bubble.style.setProperty('top', `${directions.top}px`)
            bubble.style.setProperty('width', `${directions.width}px`)
            bubble.style.setProperty('height', `${directions.height}px`)
            bubble.style.background = colorArray[gradientIndex]
            //Change the color of the sections
            colors.forEach( color => { color.style.color = 'black' })
            colors[gradientIndex].style.color = 'white'

        }
    })
}

sections.forEach(section => {
    observer.observe(section)
})