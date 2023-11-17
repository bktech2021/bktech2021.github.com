class Player {
  constructor(color) {
    this.originalColor = color;
    this.color = color;
    this.remainingWalls = 10;
    this.walls = new Array(10).fill(new Wall());
    this.theOtherPlayer = null;
  }

  turn() {
    this.color = "#FFA07A";
  }

  otherPlayer(player) {
    this.theOtherPlayer = player;
  }

  placeWall(x, y, rotation) {
    this.remainingWalls--;
    if (this.remainingWalls == -1) {
      return null;
    }

    let cross = false;
    this.walls.forEach((wall) => {
      if (wall.x == null) {
        return;
      }
      if (!(Math.abs(wall.x - x) == 1 && Math.abs(wall.y - y) == 1)) {
        return;
      }
      if (wall.rotation == rotation) {
        return;
      }
      cross = true;
    });
    if (cross) {
      return null;
    }
    console.log("no wall placed by player");
    cross = false;
    this.theOtherPlayer.walls.forEach((wall) => {
      if (wall.x == null) {
        return;
      }
      if (!(Math.abs(wall.x - x) == 1 && Math.abs(wall.y - y) == 1)) {
        return;
      }
      if (wall.rotation == rotation) {
        return;
      }
      cross = true;
    });
    if (cross) {
      return null;
    }
    console.log("no wall placed by other player");
    return this.walls[this.remainingWalls].draw(x, y, rotation);
  }

  moveTo(x, y) {
    if (
      !(
        (this.x == x && this.y == y - 1) ||
        (this.x == x && this.y == y + 1) ||
        (this.x == x - 1 && this.y == y) ||
        (this.x == x + 1 && this.y == y)
      )
    ) {
      return null;
    }
    if (this.x == x && this.y == y) {
      return null;
    }
    this.x = x;
    this.y = y;
    this.color = this.originalColor;
    return true;
  }
}
