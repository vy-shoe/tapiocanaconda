const GRID_SIZE = 20; //size of the square grid

//get a random grid position within bounds
export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1,
    };
}

//check if the position param is within the grid bounds of the game- will return boolean
export function isOutsideGrid(position) {
    return (
        position.x <= 0 ||
        position.x > GRID_SIZE ||
        position.y <= 0 ||
        position.y > GRID_SIZE
    );
}
