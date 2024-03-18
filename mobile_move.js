// For determine curson direction
// Arrows
/*
  MouseMoved(direction_);
*/
const MOUSE_LINE_DISTANCE = 50;
const MOUSE_BORDER_DISTANCE = 30;

let Cursor_position = {
  x: 0,
  y: 0
}
let Cursor_grab_pos = {
  x: 0,
  y: 0
};
let Cursor_ungrab_pos = {
  x: 0,
  y: 0
};
let Cursor_Move = {
  x: 0,
  y: 0
};

document.addEventListener('mousemove', onMousePosition, false);
document.addEventListener('mouseup', onMouseClicked, false);
document.addEventListener('mousedown', onMouseUnClicked, false);

function onMousePosition(e) {
  Cursor_position.x = e.pageX;
  Cursor_position.y = e.pageY;
}

function onMouseClicked(event) {
  document.querySelector('html').style = `cursor: grab;`;
  Cursor_ungrab_pos.x = Cursor_position.x;
  Cursor_ungrab_pos.y = Cursor_position.y;
  CursorGranUngrab();
}

function onMouseUnClicked(event) {
  document.querySelector('html').style = `cursor: grabbing;`;
  Cursor_grab_pos.x = Cursor_position.x;
  Cursor_grab_pos.y = Cursor_position.y;
}

function CursorGranUngrab() {
  Cursor_Move.x = Cursor_ungrab_pos.x - Cursor_grab_pos.x;
  Cursor_Move.y = Cursor_ungrab_pos.y - Cursor_grab_pos.y;
  DetermineCurrsorDirection();
}

function DetermineCurrsorDirection() {
  if (Cursor_Move.x < -MOUSE_LINE_DISTANCE && 
      (Cursor_Move.y > -MOUSE_BORDER_DISTANCE && Cursor_Move.y < MOUSE_BORDER_DISTANCE)) {
    MouseMoved("left");
  } 
  if (Cursor_Move.x > MOUSE_LINE_DISTANCE && 
      (Cursor_Move.y > -MOUSE_BORDER_DISTANCE && Cursor_Move.y < MOUSE_BORDER_DISTANCE)) {
    MouseMoved("right")
  }
  if (Cursor_Move.y < -MOUSE_LINE_DISTANCE && 
      (Cursor_Move.x > -MOUSE_BORDER_DISTANCE && Cursor_Move.x < MOUSE_BORDER_DISTANCE)) {
    MouseMoved("up")
  }
  if (Cursor_Move.y > MOUSE_LINE_DISTANCE && 
      (Cursor_Move.x > -MOUSE_BORDER_DISTANCE && Cursor_Move.x < MOUSE_BORDER_DISTANCE)) {
    MouseMoved("down")
  }
}

function MouseMoved(direction_) {
  console.log("?", direction_)
}
