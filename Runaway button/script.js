const evilButton = document.getElementById('evil-button')

// Displacement
const OFFSET = 100

// Select the button using tab
evilButton.addEventListener('click', () =>{
    alert('Nice try')
    window.close()
})


// Take the position of the mouse and button
document.addEventListener('mousemove', e => {
const x = e.pageX
const y = e.pageY
const buttonBox = evilButton.getBoundingClientRect()
const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)
const horizontalOffset = buttonBox.width / 2 + OFFSET
const verticalOffset = buttonBox.height / 2 + OFFSET

// Activate offset
if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset){
    setButtonPosition(
        buttonBox.x + horizontalOffset / horizontalDistanceFrom * 5,
        buttonBox.y + verticalOffset / verticalDistanceFrom * 5)
}
})

// Calculate the distance from the center of the button
function distanceFromCenter(boxPosition, mousePosition, boxSize){
    return boxPosition - mousePosition + boxSize / 2
}

// Activate the movement of the reset button - if it passes the screen
function setButtonPosition(left, top){
    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = evilButton.getBoundingClientRect()

    if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0){
        left = windowBox.right - buttonBox.width - OFFSET
    }
    if(distanceFromCenter(left, windowBox.right, buttonBox.width) > 0){
        left = windowBox.left + OFFSET
    }
    if(distanceFromCenter(top, windowBox.top, buttonBox.height) < 0){
        top = windowBox.bottom - buttonBox.width - OFFSET
    }
    if(distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0){
        top = windowBox.top + OFFSET
    }

    evilButton.style.left = `${left}px`
    evilButton.style.top = `${top}px`
}