class Cell {
  constructor(cellSize) {
    this.color = "#444444";
    this.cellSize = cellSize;
  }

  draw(x, y) {
    ctx.fillStyle = this.color;
    ctx.fillRect(x, y, this.cellSize, grid.cellSize);
  }
}
