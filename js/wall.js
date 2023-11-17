class Wall {
  constructor() {
    this.x = null;
    this.y = null;
    this.rotation = null;
  }
  draw(x, y, rotation) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    if (this.remainingWalls == 0) {
      return null;
    }
    this.remainingWalls--;
    ctx.fillStyle = "#a6c909";
    if (this.rotation == "horizontal") {
      ctx.fillRect(
        grid.x + (grid.cellSize + grid.spacing) * (this.x - 1) + grid.spacing,
        grid.y + (grid.cellSize + grid.spacing) * (this.y - 1),
        2 * grid.cellSize + grid.spacing,
        grid.spacing
      );
      return 0;
    }
    if (this.rotation == "vertical") {
      ctx.fillRect(
        grid.x + (grid.cellSize + grid.spacing) * (this.x - 1),
        grid.y + (grid.cellSize + grid.spacing) * (this.y - 1) + grid.spacing,
        grid.spacing,
        2 * grid.cellSize + grid.spacing
      );
      return 0;
    }
  }
}
