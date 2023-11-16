class Player {
  constructor(color) {
    this.originalColor = color;
    this.color = color;
  }

  turn() {
    this.color = "#FFA07A";
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
