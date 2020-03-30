let mouseCursor = document.querySelector(".cursor");
let navLinks =  document.querySelectorAll(".nav-links li")

//Pick up the mouse and set the custom style
window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

//Add and remove the navbar effect
navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
    })
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link");
    })
});