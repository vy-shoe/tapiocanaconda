import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

//food location starts at a hardcoded location before randomizing
let food = {
    x: 6,
    y: 6
}
const EXPANSION_RATE = 2; // rate at which the snake body increases
let foodnum = Math.floor(Math.random() * 4) + 1; //random number to select which graphic for food

//update snake body if food has been eaten 
export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }
}

//draw the food on the grid and append img html element
export function draw(gameBoard) {
    const foodElement = document.createElement("img");
    foodElement.setAttribute("src", "assets/cup-" + foodnum + ".png");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);
}

//called when food has been eaten, new grid position is returned of new random food location
//is checked if not on the snake body through onSnake()
function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
        foodnum = Math.floor(Math.random() * 4) + 1; // food has been eaten so we can get a new food with random color
    }
    return newFoodPosition;
}
