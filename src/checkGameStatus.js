const stopSnake = function(){
  clearInterval(animator);
};


const doesSnakeTouchRightEdge = function(){
  console.log(snake);
  let headPos =snake.body[1].x;
  return headPos==119;
};

const doesSnakeTouchLeftEdge = function(){
  let headPos =snake.body[1].x;
  return headPos==0;
};

const doesSnakeTouchBottomEdge = function(){
  let headPos =snake.body[1].y;
  return headPos==59;
};

const doesSnakeTouchTopEdge = function(){
  let headPos =snake.body[1].y;
  return headPos==0;
};

const doesSnakeTouchEdge = function(){
  let gameStatus = doesSnakeTouchRightEdge()||doesSnakeTouchLeftEdge()||doesSnakeTouchBottomEdge()||doesSnakeTouchTopEdge();
  return gameStatus;
};

const stopGame = function(){
  if (doesSnakeTouchEdge()) {
    stopSnake();
  }
};
