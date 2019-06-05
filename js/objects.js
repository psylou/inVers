class Block {
        constructor(color, turned) {
        this.color = color;
        this.turned = turned;

        this.flip = function() {
            return this.turned = true;
        }
    }
}
class Player {
        constructor(hand, color, turn) {
        this.hand = hand;
        this.color = color;
        this.turn = turn;

        this.playblock = function(inputloc) {
            this.hand = moverow(inputloc, this.hand, this.color);
            this.hand.flip();
            changeHandColor(this.hand.color, this.color);
        }
    }
}


class KI {
    constructor(hand, color, turn) {
        this.hand = hand;
        this.color = color;
        this.turn = turn;



        /**
         * @return {number}
         */
        this.RandomStrategy = function() {

                let r = 0;
                while (!validMove(r, this)) {
                    r = Math.floor(Math.random() * (77 - 11 + 1)) + 11;
                }
                return r;
            };

        /**
         * @return {number}
         */
        this.NotTurnedStrategy = function() {
            let maxValuation = -Infinity;
            let maxMove = 0;
            let tempThis = this;
            this.AllValidMoves().forEach(function(move) {
                    if(tempThis.getValuationNotTurned(move) > maxValuation){
                        maxValuation = tempThis.getValuationNotTurned(move);
                        maxMove = move;
                    }
                }
            );
            console.log(maxValuation);
            return maxMove;
        };


        this.playblock = function() {
            this.inputloc = this.NotTurnedStrategy(); //what strategy to use
            this.hand = moverow(this.inputloc, this.hand, this.color);
            this.hand.flip();
            changeHandColor(this.hand.color, this.color);
        };

        this.AllValidMoves = function() {
            let tempThis = this;
            let validMoves = [];
            allMoves.forEach(function(move) {
                    if(validMove(move, tempThis)) {
                        validMoves.push(move);
                    }
                }
            );
            console.log(validMoves);
            return validMoves;
        };

        this.getValuationNotTurned = function(r) {
            let valuation = 0;
            let offset = 0;
            if (r > 0 && r < 7) {
                offset = 10;
            }
            else if (r % 10 === 0 && r < 61 && r > 0) {
                offset = 1;
            }
            else if (r-7 % 10 === 0 && r < 70 && r > 0) {
                offset = -1;
            }
            else if (r > 70 && r < 77) {
                offset = -10;
            }

            for(let i = 1; i < 7; i++) {
                if(board[r+(offset*i)].color === this.color) {                          //my color 1 point in row
                    valuation=+2;
                }
                else {                                                                  //enemy color -1 point in row
                    valuation--;
                }
            }
            if (board[r+(offset*6)].color === this.color && board[r+(offset*6)].turned) {   //own turned stone drops out
                valuation=-2;
            }
            if (board[r+(offset*6)].color === this.color && !board[r+(offset*6)].turned) {  //own stone drops out
                valuation++;
            }
            if (board[r+(offset*6)].color === !this.color && !board[r+(offset*6)].turned) {  //enemy stone drops out
                valuation--;
            }

            return valuation;
        };
    }
}

