let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#2B2B2B";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let grid = new Grid(60, 60, 9, 9, 50, 15);
grid.initCells();

let player2 = new Player("#FF6F61");
player2.x = 4;
player2.y = 0;

let player1 = new Player("#5E72E4");
player1.x = 4;
player1.y = 8;

let gridPos = null;
let selection = null;
let turn = 0;

function gameLoop() {
  if (gridPos != null && selection == null) {
    if (gridPos.x == player1.x && gridPos.y == player1.y && turn == 0) {
      grid.drawAvailableCells(player1);
      selection = player1;
      gridPos = null;
    } else if (gridPos.x == player2.x && gridPos.y == player2.y && turn == 1) {
      grid.drawAvailableCells(player2);
      selection = player2;
      gridPos = null;
    }
  } else if (selection != null) {
    if (gridPos != null) {
      if (selection.moveTo(gridPos.x, gridPos.y) != null) {
        turn ^= 1;
        selection = null;
        gridPos = null;
      }
    }
  } else {
    grid.drawCells();
    grid.drawPlayer(player1);
    grid.drawPlayer(player2);
  }
  requestAnimationFrame(gameLoop);
}

gameLoop();
