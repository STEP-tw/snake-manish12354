const hitsVerticalEdge = function(snakeHead) {
  let headPos = snakeHead.x;
  return headPos <= -1 || headPos >= 120;
};

const hitsHorizontalEdge = function(snakeHead) {
  let headPos = snakeHead.y;
  return headPos <= -1 || headPos >= 60;
};

const getGameStatus = function(snakeHead) {
  console.log(snake.hasEatenItself());
  let gameStatus = hitsVerticalEdge(snakeHead) || hitsHorizontalEdge(snakeHead);
  return gameStatus;
};
