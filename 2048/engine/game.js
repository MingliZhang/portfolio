/*
Add your code for Game here
 */
export default class Game {
    constructor(size) {
        this.size = size;
        this.sizeSqr = size ** 2;
        this.gameState = {
            board: new Array(this.size * this.size).fill(0),
            score: 0,
            won: false,
            over: false,
        }
        this.moveArr = [];
        this.winArr = [];
        this.loseArr = [];
        this.goal = 2048;
        this.addingTiles();
        this.addingTiles();
    }

    addingTiles() {
        let random = Math.floor(Math.random() * 100) + 1;
        let val = 0;
        if (random <= 90) {
            val = 2;
        } else {
            val = 4;
        }
        while (true) {
            let index = Math.floor(Math.random() * this.sizeSqr);
            if (this.gameState.board[index] == 0) {
                this.gameState.board[index] = val;
                break;
            }
        }
    }

    setupNewGame() {
        for (let i = 0; i < this.sizeSqr; i++) {
            this.gameState.board[i] = 0;
        }
        this.gameState.score = 0;
        this.gameState.won = false;
        this.gameState.over = false;
        this.addingTiles();
        this.addingTiles();
    }

    loadGame(gameState) {
        this.gameState = gameState;
    }

    move(direction) {
        let board = this.gameState.board;
        let moved = false;
        switch (direction) {
            case "up":
                for (let i = 0; i < this.size; i++) {
                    let column = [];
                    for (let index = i; index < board.length; index += this.size) {
                        column.push(board[index]);
                    }
                    let [after, scored, did] = this.calArray(column);
                    this.gameState.score += scored;
                    if (did) {
                        moved = true;
                    }
                    for (let index = i; index < board.length; index += this.size) {
                        board[index] = after[0];
                        after.shift();
                    }
                }
                break;
            case "down":
                for (let i = 0; i < this.size; i++) {
                    let column = [];
                    for (let index = i; index < board.length; index += this.size) {
                        column.push(board[index]);
                    }
                    column.reverse();
                    let [after, scored, did] = this.calArray(column);
                    this.gameState.score += scored;
                    if (did) {
                        moved = true;
                    }
                    after.reverse();
                    for (let index = i; index < board.length; index += this.size) {
                        board[index] = after[0];
                        after.shift();
                    }
                }
                break;
            case "left":
                for (let i = 0; i < this.sizeSqr; i += this.size) {
                    let row = [];
                    for (let index = i; index < this.size + i; index++) {
                        row.push(board[index]);
                    }
                    let [after, scored, did] = this.calArray(row);
                    this.gameState.score += scored;
                    if (did) {
                        moved = true;
                    }
                    for (let index = i; index < this.size + i; index++) {
                        board[index] = after[0];
                        after.shift();
                    }
                }
                break;
            case "right":
                for (let i = 0; i < this.sizeSqr; i += this.size) {
                    let row = [];
                    for (let index = i; index < this.size + i; index++) {
                        row.push(board[index]);
                    }
                    row.reverse();
                    let [after, scored, did] = this.calArray(row);
                    this.gameState.score += scored;
                    if (did) {
                        moved = true;
                    }
                    after.reverse();
                    for (let index = i; index < this.size + i; index++) {
                        board[index] = after[0];
                        after.shift();
                    }
                }
                break;
            default:
                console.log("This line should not have run at all! If you see this line, there is somehting wrong with the move function in game.js");

        }
        if (moved) {
            this.addingTiles();
            let max = 0;
            for (let i = 0; i < this.sizeSqr; i++) {
                if (max < this.gameState.board[i]) {
                    max = this.gameState.board[i];
                }
            }
            if (max === 2048) {
                this.gameState.won = true;
                this.winArr.forEach(element => element(this.getGameState()));
            }
            this.moveArr.forEach(element => element(this.getGameState()));

            let rowtest = false;
            let coltest = false;
            for (let i = 0; i < this.sizeSqr; i += this.size) {
                let row = [];
                for (let index = i; index < this.size + i; index++) {
                    row.push(board[index]);
                }
                let [arr, score, test] = this.calArray(row);
                if (test) {
                    rowtest = true;
                }
            }
            for (let i = 0; i < this.size; i++) {
                let column = [];
                for (let index = i; index < board.length; index += this.size) {
                    column.push(board[index]);
                }
                let [arr, score, test] = this.calArray(column);
                if (test) {
                    coltest = true;
                }
            }
            if (rowtest === false && coltest === false && !this.gameState.board.includes(0)) {
                this.gameState.over = true;
                this.loseArr.forEach(element => element(this.getGameState()));
            }
        }


        // console.log("after moving "+ direction + ": \n");
        // let tostring = this.toString();
        // console.log(tostring);
        // console.log("Score: " + this.gameState.score);
        // console.log("Won: " + this.gameState.won);
        // console.log("Over: " + this.gameState.over);
    }

    calArray(arr) {
        let swapped = false;
        let scoreAdded = 0;
        let processed = new Array(arr.length);
        processed.fill(false);
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] != 0 && arr[j] != 0) {
                    if (arr[i] === arr[j] && !processed[i]) {
                        arr[i] = 2 * arr[i];
                        arr[j] = 0;
                        scoreAdded += arr[i];
                        swapped = true;
                        processed[i] = true;
                        break;
                        // console.log("This is the swap case, currently i is " + i + " j is, " + j + "arr[i] is " + arr[i] + "arr[j] is " + arr[j]);
                    } else {
                        // console.log("This is the not zero but not equal case, should have broke. The next i should be i + 1 and next j should be i + 1, currently i is " + i + " j is, " + j + "arr[i] is " + arr[i] + "arr[j] is " + arr[j]);
                        break;
                    }
                } else if (arr[i] == 0 && arr[j] != 0) {
                    // console.log("This is the case where there is current arr[i] is zero, currently i is " + i + " j is, " + j + "arr[i] is " + arr[i] + "arr[j] is " + arr[j]);
                    arr[i] = arr[j];
                    arr[j] = 0;
                    swapped = true;
                } else {
                    // console.log("This is the else case, currently i is " + i + " j is, " + j + "arr[i] is " + arr[i] + "arr[j] is " + arr[j]);
                }
            }
        }
        return [arr, scoreAdded, swapped];
    }

    toString() {
        let string = "";
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.gameState.board[i * this.size + j] == 0) {
                    string += "[] "
                } else {
                    string += "[" + this.gameState.board[i * this.size + j] + "]";
                }
            }
            string += "\n";
        }
        return string;
    }
    onMove(callback) {
        this.moveArr.push(callback);
    }

    onWin(callback) {
        this.winArr.push(callback);
    }

    onLose(callback) {
        this.loseArr.push(callback);
    }

    getGameState() {
        return { ...this.gameState };
    }
}

