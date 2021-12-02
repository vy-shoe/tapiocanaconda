import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

export function update() {
    addSegments();
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    snakeBody.forEach((segment) => {
        const snakeElement = document.createElement("img");
        if (segment == snakeBody[0]) {
            snakeElement.setAttribute("src", "assets/boba" + 4 + ".png");
        } else {
            snakeElement.setAttribute("src", "assets/boba" + (Math.floor(Math.random() * 3) + 1) + ".png"
            );
        }
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add("boba");
        gameBoard.appendChild(snakeElement);
    });
}

export function expandSnake(amount) {
    newSegments += amount;
}

// returns true if any snake body equals the snack, return true
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false;
        return equalPositions(segment, position);
    });
}

// return if snake head is same as food location
function equalPositions(pos1, pos2) {
    return pos1.x == pos2.x && pos1.y == pos2.y;
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }
    newSegments = 0;
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function ifSnakeIntersects() {
    return onSnake(snakeBody[0], { ignoreHead: true });
}
