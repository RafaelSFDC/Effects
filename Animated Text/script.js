const text = document.querySelector('.fancy')
const title = document.querySelector(".typewriter")
const strText = text.textContent;
const splitText = strText.split("")
text.textContent = ""

//------------ Animation 1 ------------
for( let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>"
}

let char = 0
let timer = setInterval(onTick, 60)

function onTick() {
    const span = text.querySelectorAll("span")[char]
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}


//------------ Animation 3 ------------
function complete(){
    clearInterval(timer)
    timer = null
}

function typeWriter(element){
    const textArray = element.innerHTML.split('');

    element.innerHTML = '';
    textArray.forEach((letter, i) => {
    setTimeout(() => element.innerHTML += letter, 180 * i);
    });

}

typeWriter(title);