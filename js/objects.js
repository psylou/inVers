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

        this.playblock = function() {

            function kicalc() {

                let result = Math.floor(Math.random() * (77 - 11 + 1)) + 11;

                if (board[result] != null) {
                    console.log(result);
                    return result;
                }
                else {
                    kicalc();
                }
            }

            this.hand = moverow(kicalc(), this.hand, this.color);
            this.hand.flip();
            changeHandColor(this.hand.color, this.color);
        }
    }
}

