let numberOfRows = 60;
let numberOfCols = 120;
const game = new Game(numberOfRows, numberOfCols);
let animator = undefined;

const animateSnake = function() {
  let increment = 5;
  let oldHead = game.snake.getHead();
  let oldTail = game.snake.move();
  let head = game.snake.getHead();
  paintBody(oldHead);
  unpaintSnake(oldTail);
  paintHead(head);
  if (head.isSameCoordAs(game.getFood())) {
    game.updateScore(increment);
    game.snake.grow();
    game.createFood();
    drawFood(game.getFood());
  }
}

const changeSnakeDirection = function(event) {
  switch (event.code) {
    case "KeyA":
      game.snake.turnLeft();
      break;
    case "KeyD":
      game.snake.turnRight();
      break;
    case "KeyC":
      game.snake.grow();
      break;
    default:
  }
}

const addKeyListener = function() {
  let grid = document.getElementById("keys");
  grid.onkeyup = changeSnakeDirection;
  grid.focus();
}

const createSnake = function() {
  let tail = new Position(12, 10, "east");
  let body = [];
  body.push(tail);
  body.push(tail.next());
  let head = tail.next().next();
  let snake = new Snake(head, body);
  game.addSnake(snake);
}

const moveSnake = function() {
  animateSnake();
  showScore();
  if (game.isOver()) {
    game.stop();
  }
};

const startGame = function() {
  createSnake();
  drawGrids(numberOfRows, numberOfCols);
  drawSnake(game.snake);
  game.createFood();
  drawFood(game.getFood());
  addKeyListener();
  animator = setInterval(moveSnake, 80);
}

window.onload = startGame;
