const drawGrids = function(numberOfRows, numberOfCols) {
  let grid = document.getElementById("grid");
  for (var i = 0; i < numberOfRows; i++) {
    let row = document.createElement("tr");
    for (var j = 0; j < numberOfCols; j++) {
      let col = document.createElement("td");
      col.id = `${j}_${i}`;
      row.appendChild(col);
    }
    grid.appendChild(row);
  }
};

const restart = function() {
  location.reload();
};

const addRestartButton = function() {
  let buttonId = document.getElementById("restartButton");
  buttonId.innerHTML = "<br><br><button>Restart ??</button>";
  buttonId.lastElementChild.addEventListener("click", restart);
};

const showFinishMessage = function() {
  let messageField = document.getElementById("gameOverMsg");
  messageField.innerText = `Game over !!\n Your score is ${game.giveScore()}`;
  addRestartButton();
};

const showScore = function() {
  let scoreId = document.getElementById("score");
  scoreId.innerText = `score : ${game.giveScore()}`;
}

const paintCell = function(pos, color) {
  let cell = document.getElementById(pos.getCoord().join("_"));
  if (cell)
    cell.className = color;
};

const paintBody = function(pos) {
  paintCell(pos, "snake");
};

const paintHead = function(pos) {
  paintCell(pos, "snake_head");
};

const unpaintSnake = function(pos) {
  paintCell(pos, "");
};

const drawSnake = function(snake) {
  snake.getBody().forEach(function(pos) {
    paintBody(pos);
  });
  paintHead(snake.getHead());
};

const drawFood = function(food) {
  paintCell(food, "food");
};
