const Game = function(numberOfRows, numberOfColumns) {
  this.rows = numberOfRows;
  this.columns = numberOfColumns;
  this.snake = {};
  this.food = {};
  this.score = 0;
};

Game.prototype.addSnake = function(snake) {
  this.snake = snake;
};

Game.prototype.isOver = function() {
  let maxCoords = [this.columns, this.rows];
  let status = this.snake.hasCollidedWithWall(maxCoords) || this.snake.hasEatenItself();
  return status;
};

Game.prototype.createFood = function() {
  this.food = generateRandomPosition(this.columns, this.rows);
};

Game.prototype.giveFood = function() {
  return this.food;
};

Game.prototype.stop = function() {
  clearInterval(animator);
  showFinishMessage();
};

Game.prototype.updateScore = function(increment) {
  this.score += increment;
};

Game.prototype.giveScore = function() {
  return this.score;
};
