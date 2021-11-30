import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = {
    x: 6,
    y: 6,
};
const EXPANSION_RATE = 2;
let foodnum = Math.floor(Math.random() * 4) + 1;

export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement("img");
    foodElement.setAttribute("src", "assets/cup-" + foodnum + ".png");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
        foodnum = Math.floor(Math.random() * 4) + 1;
    }
    return newFoodPosition;
}
