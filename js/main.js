let board = [];
const allMoves = [1, 2, 3, 4, 5, 6, 10, 20, 30, 40, 50, 60, 71, 72, 73, 74, 75, 76, 17, 27, 37, 47, 57, 67];

//my functions to edit board

//my objects




initializeBoard();
let player1 = new Player(new Block(1, true), 1, true); //player1 with a startingblock, color and if its his turn
let player2 = new KI(new Block(2, true), 2, false);


/* DEBUG */

console.log(board);

