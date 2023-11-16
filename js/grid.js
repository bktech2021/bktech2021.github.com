class Grid {
  constructor(x, y, width, height, cellSize, spacing) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.cellSize = cellSize;
    this.spacing = spacing;
    this.cells = [];
    this.initCells();
  }

  center() {
    this.x = Math.floor((canvas.width - this.width * this.cellSize) / 2);
    this.y = Math.floor((canvas.height - this.height * this.cellSize) / 2);
  }

  initCells() {
    for (let i = 0; i < this.width; i++) {
      this.cells[i] = [];
      for (let j = 0; j < this.height; j++) {
        this.cells[i][j] = new Cell(this.cellSize);
      }
    }
  }

  drawCells() {
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        this.cells[i][j].draw(
          this.x + (this.spacing + (i - 1) * (this.cellSize + this.spacing)),
          this.y + (this.spacing + (j - 1) * (this.cellSize + this.spacing))
        );
      }
    }
  }

  drawPlayer(player) {
    this.drawCell(player.x, player.y, player.color);
  }

  drawAvailableCells(player) {
    let fillColor = "#32CD32";
    this.drawCell(player.x, player.y - 1, fillColor);
    this.drawCell(player.x - 1, player.y, fillColor);
    this.drawCell(player.x + 1, player.y, fillColor);
    if(player.y != 8) {
      this.drawCell(player.x, player.y + 1, fillColor);
    }
  }

  drawCell(x, y, color) {
    if(x < 0 || x > this.width - 1 || y < 0 || y > this.height - 1) {
      return;
    }
    ctx.fillStyle = color;
    ctx.fillRect(
      this.x + (this.spacing + (x - 1) * (this.cellSize + this.spacing)),
      this.y + (this.spacing + (y - 1) * (this.cellSize + this.spacing)),
      this.cellSize,
      this.cellSize
    );
  }

  getGridPos(x, y) {
    let i = Math.floor((x - this.x) / (this.cellSize + this.spacing)) + 1;
    let j = Math.floor((y - this.y) / (this.cellSize + this.spacing)) + 1;
    if (i < 0 || i > this.width - 1 || j < 0 || j > this.height - 1) {
      return null;
    } else {
      return {
        x: i,
        y: j,
      };
    }
  }
}

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
