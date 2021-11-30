//input direction of user when clicking keys
let inputDirection = {
    x: 0,
    y: 0,
}
//making sure the user clicks on a direction that does not go opposite of the previous
//for example, if snake goes left, we cannot go right, so we need to keep track of last direction input
let lastInputDirection = {
    x: 0,
    y: 0,
}

//event listener to take in user input and control snake movement on the grid
//checks user's last direction to not be related to the y or x movements of new input
//(ex. up or down not allowed/y movement not allowed if last is y-axis related)
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp' :
            if (lastInputDirection.y != 0) break
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown' :
            if (lastInputDirection.y != 0) break
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft' :
            if (lastInputDirection.x != 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight' :
            if (lastInputDirection.x != 0) break
            inputDirection = { x: 1, y: 0 }
            break
    }
})

//sets the current input direction as last input direction
export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}