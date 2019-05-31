let board = [];

//my functions to edit board

//my objects




initializeBoard();
let player1 = new KI(new Block(1, true), 1, true); //player1 with a startingblock, color and if its his turn
let player2 = new KI(new Block(2, true), 2, false);


/* DEBUG */

console.log(board)
console.log(player1.hand.color);

