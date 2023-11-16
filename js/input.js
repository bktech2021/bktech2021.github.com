let mouseDown = false;

canvas.addEventListener(
  "mousedown",
  (e) => {
    mouseDown = true;
    let mousePos = getMousePos(canvas, e);
    gridPos = grid.getGridPos(mousePos.x, mousePos.y);
  },
  false
);

canvas.addEventListener(
  "mouseup",
  (e) => {
    mouseDown = false;
  },
  false
);

canvas.addEventListener(
  "mousemove",
  (e) => {
    if (mouseDown) {
      let mousePos = getMousePos(canvas, e);
      gridPos = grid.getGridPos(mousePos.x, mousePos.y);
    }
  },
  false
);

function getMousePos(canvasDom, mouseEvent) {
  var rect = canvasDom.getBoundingClientRect();
  return {
    x: mouseEvent.clientX - rect.left,
    y: mouseEvent.clientY - rect.top,
  };
}
