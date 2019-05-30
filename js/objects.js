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

        this.validMove = function(r) {
            if (r > 0 && r < 7) {
                if (board[r+60].color !== this.color && board[r+60].turned) {
                    return 0;
                }
                else {
                    return 1;
                }
            }
            else if (r % 10 === 0 && r < 61 && r > 0) {
                if (board[r+6].color !== this.color && board[r+6].turned) {
                    return 0;
                }
                else {
                    return 1;
                }
            }
            else if (r-7 % 10 === 0 && r < 70 && r > 0) {
                if (board[r-6].color !== this.color && board[r-6].turned) {
                    return 0;
                }
                else {
                    return 1;
                }
            }
            else if (r > 70 && r < 77) {
                if (board[r-60].color !== this.color && board[r-60].turned) {
                    return 0;
                }
                else {
                    return 1;
                }
            }
        };

        this.kicalc = function() {

            let r = 0;
            while (!this.validMove(r)) {
                r = Math.floor(Math.random() * (77 - 11 + 1)) + 11;
            }
            return r;
        };


        this.playblock = function() {
            this.inputloc = this.kicalc();
            console.log(this.inputloc);
            this.hand = moverow(this.inputloc, this.hand, this.color);
            this.hand.flip();
            changeHandColor(this.hand.color, this.color);
        }
    }
}

