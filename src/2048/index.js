import Game from './game.js';

// import './index.css';

let game = new Game(4);
const gameContainer = document.querySelector('#gameContainer');
let score = `<div id = "Score" > <span>Score: ${game.gameState.score}<span></div>`;
let gameArea = `<div id = "gameBoard" >`;
for (let i = 0; i < game.sizeSqr; i++) {
    if (game.gameState.board[i] == 0) {
        gameArea += `<div class = "empty"> \n </div>`;
    } else {
        gameArea += `<div class = "box"> ${game.gameState.board[i]}</div>`;
    }
}
gameArea += `</div>`;
gameContainer.innerHTML += score;
gameContainer.innerHTML += gameArea;

document.querySelector('#restart').addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    game.setupNewGame();
    let gameArea = `<div id = "gameBoard" >`;

    gameContainer.innerHTML = '';
    for (let i = 0; i < game.sizeSqr; i++) {
        if (game.gameState.board[i] == 0) {
            gameArea += `<div class = "empty"> </div>`;
        } else {
            gameArea += `<div class = "box"> ${game.gameState.board[i]}</div>`;
        }
    }
    gameArea += `</div>`;
    gameContainer.innerHTML += `<div id = "Score" > <span>Score: ${game.gameState.score}<span></div>`;
    gameContainer.innerHTML += gameArea;
});

document.addEventListener('keydown', function (press) {
    if (press.keyCode == 37) {
        game.move('left');
    } else if (press.keyCode == 38) {
        game.move('up');
    } else if (press.keyCode == 39) {
        game.move('right');
    } else if (press.keyCode == 40) {
        game.move('down');
    }
    let score = `<div id = "Score" > <span>Score: ${game.gameState.score}<span></div>`;
    let gameArea = `<div id = "gameBoard" >`;
    for (let i = 0; i < game.sizeSqr; i++) {
        if (game.gameState.board[i] == 0) {
            gameArea += `<div class = "empty"> </div>`;
        } else {
            gameArea += `<div class = "box"> ${game.gameState.board[i]}</div>`;
        }
    }
    gameArea += `</div>`;
    gameContainer.innerHTML = '';

    if (game.gameState.won) {
        const wonStatment = `<div id = "win" ><span>Congratulation. You have reached your goal of 2048! Your final score is: ${game.gameState.score}<span></div>`;
        gameContainer.innerHTML += wonStatment;
    }
    if (game.gameState.over) {
        const loseStatment = `<div id = "lose"><span>Too bad, there is no more moves that can be made. Try again next time. Your score for this round is: ${game.gameState.score}<span></div>`;
        gameContainer.innerHTML += loseStatment;
    }
    gameContainer.innerHTML += score;
    gameContainer.innerHTML += gameArea;
});
