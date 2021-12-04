import {
    update as updateSnake,
    draw as drawSnake,
    SNAKE_SPEED,
    ifSnakeIntersects,
    getSnakeHead,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { isOutsideGrid } from "./grid.js";

let lastRenderTime = 0; //time since previously rendered (sets frame rate)
let gameOver = false; //boolean if game is over
const gameBoard = document.getElementById("game-board"); //gets gameboard's html
var icon = document.getElementById("icon");
var mySong = document.getElementById("mySong");
mySong.volume = 0.1;

// main function to run the game- draws the animations and checks the time + gameover to make sure we still keep drawing
function main(currentTime) {
    if (gameOver) {
        mySong.pause();
        icon.src = "assets/musicIcon.png";
        if (confirm("Game Over. Press OK to restart")) {
            window.location = "/"; // current location of website, acts as refresh
        }
        return;
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

//updates snake's location, food location and to see if it has died yet
function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

//draws the animation from the index.html and css divs for the gameboard (background)
function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

//checks if the snake is within bounds and if the snake has not intersected with its body
function checkDeath() {
    gameOver = isOutsideGrid(getSnakeHead()) || ifSnakeIntersects();
}
