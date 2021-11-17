const GRID_SIZE = 27;

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1,
    };
}

export function isOutsideGrid(position) {
    return (
        position.x < 0 ||
        position.x > GRID_SIZE ||
        position.y < 0 ||
        position.y > GRID_SIZE
    );
}
