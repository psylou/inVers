function styleblock(block, cell) { //connection to html/css styling
    if (block.color === 0) {
        document.getElementById(cell).style.backgroundColor = "grey";
    }
    else {

        if(block.color === 1) {
            document.getElementById(cell).style.backgroundColor = "green";
            document.getElementById(cell+"d").style.backgroundColor = "green";
        }
        if(block.color === 2) {
            document.getElementById(cell).style.backgroundColor = "yellow";
            document.getElementById(cell+"d").style.backgroundColor = "yellow";
        }
    }
    if (block.turned) {
            document.getElementById(cell).style.backgroundColor = "white";
        }
}

function moverow(inputloc, inputblock, playercolor) { //function to insert block somewhere and move
    if(inputloc <= 0 || inputloc === 7 || inputloc === 70 || inputloc >= 77) {
        alert("you broke the game");
        return inputblock;
    }


    if (inputloc < 7) {
        if (board[inputloc+60].color !== playercolor && board[inputloc+60].turned) {
            alert("Du darfst keinen gegnerischen gedrehten Stein herausschieben.");
            return inputblock;
        }
        this.result = board[inputloc+60]; //get new rausgeschobener block
        for (i = inputloc+50; i >= inputloc + 10; i-=10) {
        board[i+10] = board[i]; //move
        styleblock(board[i+10], i+10); //gets painted
        }
        board[inputloc+10] = inputblock;
        styleblock(board[inputloc+10], inputloc+10);
    }
    else if((inputloc - 7) % 10 === 0) {
        if (board[inputloc-6].color !== playercolor && board[inputloc-6].turned) {
            alert("Du darfst keinen gegnerischen gedrehten Stein herausschieben.");
            return inputblock;
        }
        this.result = board[inputloc-6];

        for (let i = inputloc-5; i < inputloc; i++) {
            board[i-1] = board[i];
            styleblock(board[i-1], i-1);
            }
            board[inputloc-1] = inputblock;
            styleblock(board[inputloc-1], inputloc-1);
    }
    else if(inputloc % 10 === 0) {
        if (board[inputloc+6].color !== playercolor && board[inputloc+6].turned) {
            alert("Du darfst keinen gegnerischen gedrehten Stein herausschieben.");
            return inputblock;
        }
        this.result = board[inputloc+6];

        for (let i = inputloc+5; i > inputloc; i--) {
            board[i+1] = board[i];
            styleblock(board[i+1], i+1);
            }
            board[inputloc+1] = inputblock;
            styleblock(board[inputloc+1], inputloc+1);
    }
    else if (inputloc > 70) {
        if (board[inputloc-60].color !== playercolor && board[inputloc-60].turned) {
            alert("Du darfst keinen gegnerischen gedrehten Stein herausschieben.");
            return inputblock;
        }
        this.result = board[inputloc-60];

        for (let i = inputloc-50; i <= inputloc - 10; i+=10) {
        board[i-10] = board[i];
        styleblock(board[i-10], i-10);
        }
        board[inputloc-10] = inputblock;
        styleblock(board[inputloc-10], inputloc-10);
    }
    switchplayerturn(); //the other players turn begins
    return this.result;
}

function switchplayerturn() { //this switches player on turn
    let playercolor;
    if (player1.turn) {
        player1.turn = false;
        player2.turn = true;

        playercolor = player2.color;
    }
    else if(player2.turn) {
        player2.turn = false;
        player1.turn = true;
        playercolor = player1.color;
    }
    else {
        alert("WHOSE TURN IS IT??? I'M CONFUSED");
    }
    if(playercolor === 1) {
        document.getElementById('whoseturn').innerHTML = "Green";
        document.getElementById('whoseturn').style.color = "Green";
    }
    else {
        document.getElementById('whoseturn').innerHTML = "Yellow";
        document.getElementById('whoseturn').style.color = "Yellow";
    }
}


function someoneplays(inputloc) {
    if(player1.turn) {
        player1.playblock(inputloc);
    }
    else {
        player2.playblock(inputloc);
    }
    if(!someoneWon()) {
        setTimeout(function(){
            someoneplays();
        }, 1000);
    }
}

function countUnturned(color) {
    let i = 11;
    let count = 0;
    while (i < 67) {
        if (board[i] === undefined) {
            i++;
        }
        else {

            if (board[i].turned === false && board[i].color === color) {
                count++;
            }
            i++;
        }
    }
    console.log(count);
    return count;
}

function someoneWon() {
    if (countUnturned(2) === 0) {
        alert("Grün gewinnt das Spiel")
        return 1;
    }
    else if (countUnturned(1) === 0) {
        alert("Gelb gewinnt das Spiel")
        return 1;
    }
}

function changeHandColor(handColor, color) {

    if (handColor === 1) {
        document.getElementById("hand"+color).style.backgroundColor = "green";
    }
    else {
        document.getElementById("hand"+color).style.backgroundColor = "yellow";
    }
}

function initializeBoard(){ // This is the function to initialize the Board.
    function initializeRow(startcell){
        for(let i = startcell; i < startcell+8; i++) {
            if(i === startcell || i === startcell+7 || i < 7 || i > 66) {
                board[i] = new Block(0, false);
                styleblock(board[i], i);
            }
            else if(startcell % 20 === 0) {
                if(i % 2 === 0) {
                    board[i] = new Block(1, false);
                    styleblock(board[i], i);
                }
                else{
                    board[i] = new Block(2, false);
                    styleblock(board[i], i);
                }
            }
            else {
                if(i % 2 === 0) {
                    board[i] = new Block(2, false);
                    styleblock(board[i], i);
                }
                else{
                    board[i] = new Block(1, false);
                    styleblock(board[i], i);
                }
            }
        }
    }

    let cellplus10 = 0;
    while(cellplus10 <= 70) {
        initializeRow(cellplus10);
        cellplus10 = cellplus10 + 10;
    }
}