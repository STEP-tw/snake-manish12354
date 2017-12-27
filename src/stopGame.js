const stopSnake = function() {
  clearInterval(animator);
};

const stopGame = function(snakeHead) {
  if (doesSnakeTouchEdge(snakeHead)) {
    stopSnake();
  }
};
