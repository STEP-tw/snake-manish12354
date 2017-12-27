const doesSnakeTouchRightEdge = function(snakeHead) {
  let headPos = snakeHead.x;
  return headPos == 119;
};

const doesSnakeTouchLeftEdge = function(snakeHead) {
  let headPos = snakeHead.x;
  return headPos == 0;
};

const doesSnakeTouchBottomEdge = function(snakeHead) {
  let headPos = snakeHead.y;
  return headPos == 59;
};

const doesSnakeTouchTopEdge = function(snakeHead) {
  let headPos = snakeHead.y;
  return headPos == 0;
};

// const doesSnakeTouchItsBody = function(head,body){
//
// }

const getGameStatus = function(snakeHead) {
  let gameStatus = doesSnakeTouchRightEdge(snakeHead) || doesSnakeTouchLeftEdge(snakeHead) || doesSnakeTouchBottomEdge(snakeHead) || doesSnakeTouchTopEdge(snakeHead);
  return gameStatus;
};
