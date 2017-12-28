const Game = function(numberOfRows, numberOfColumns) {
  this.rows = numberOfRows;
  this.columns = numberOfColumns;
  this.snake = {};
  this.food = {};
};

Game.prototype.addSnake = function(snake) {
  this.snake = snake;
};

Game.prototype.isOver = function() {
  let maxCoords = [this.columns, this.rows];
  return this.snake.hasCollidedWithWall(maxCoords)||this.snake.hasEatenItself();
};

Game.prototype.createFood = function() {
  this.food = generateRandomPosition(this.columns, this.rows);
};

Game.prototype.stop = function(){
  clearInterval(animator);
};
