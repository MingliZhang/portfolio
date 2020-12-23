import Game from "./game.js";

$(function () {
  let game = new Game(4);
  const $root = $("#root");
  let restart = `<form><button type="button" id="restart">Restart</button></form>`;
  let score = `<div id = "Score" > <span>Score: ${game.gameState.score}<span></div>`;
  let gameArea = `<div id = "gameBoard" >`;
  for (let i = 0; i < game.sizeSqr; i++) {
    if (game.gameState.board[i] == 0) {
      console.log("Ran into a zero tile.");
      gameArea += `<div class = "empty"><div> \n </div></div>`;
    } else {
      console.log("Non zero");
      gameArea += `<div class = "box"> <div>${game.gameState.board[i]} <div></div>`;
    }
  }
  gameArea += `</div>`;
  $root.append(restart);
  $root.append(score);
  $root.append(gameArea);

  $root.on("click", "#restart", function (event) {
    event.preventDefault();
    event.stopPropagation();
    game.setupNewGame();
    let restart = `<form><button type="button" id="restart">Restart</button></form>`;
    let score = `<div id = "Score" > <span>Score: ${game.gameState.score}<span></div>`;
    let gameArea = `<div id = "gameBoard" >`;
    for (let i = 0; i < game.sizeSqr; i++) {
      if (game.gameState.board[i] == 0) {
        console.log("Ran into a zero tile.");
        gameArea += `<div class = "empty"> </div>`;
      } else {
        console.log("Non zero");
        gameArea += `<div class = "box"> ${game.gameState.board[i]}</div>`;
      }
    }
    gameArea += `</div>`;
    $root.empty();
    $root.append(restart);
    $root.append(score);
    $root.append(gameArea);
  });

  document.addEventListener("keydown", function (press) {
    if (press.keyCode == 37) {
      game.move("left");
    } else if (press.keyCode == 38) {
      game.move("up");
    } else if (press.keyCode == 39) {
      game.move("right");
    } else if (press.keyCode == 40) {
      game.move("down");
    }
    let restart = `<form><button type="button" id="restart">Restart</button></form>`;
    let score = `<div id = "Score" > <span>Score: ${game.gameState.score}<span></div>`;
    let gameArea = `<div id = "gameBoard" >`;
    for (let i = 0; i < game.sizeSqr; i++) {
      if (game.gameState.board[i] == 0) {
        console.log("Ran into a zero tile.");
        gameArea += `<div class = "empty"> </div>`;
      } else {
        console.log("Non zero");
        gameArea += `<div class = "box"> ${game.gameState.board[i]}</div>`;
      }
    }
    gameArea += `</div>`;
    $root.empty();
    if (game.gameState.won) {
      let wonStatment = `<div id = "win" ><span>Congratulation. You have reached your goal of 2048! Your final score is: ${game.gameState.score}<span></div>`;
      $root.append(wonStatment);
    }
    if (game.gameState.over) {
      let loseStatment = `<div id = "lose"><span>Too bad, there is no more moves that can be made. Try again next time. Your score for this round is: ${game.gameState.score}<span></div>`;
      $root.append(loseStatment);
    }
    $root.append(restart);
    $root.append(score);
    $root.append(gameArea);
  });
});
