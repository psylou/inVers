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
            if (this.hand.color === 1) {
                document.getElementById("hand"+this.color).style.backgroundColor = "green";
            }
            else {
                document.getElementById("hand"+this.color).style.backgroundColor = "yellow";
            }
        }
    }
}
/*
class kiplayer extends player {
        constructor() {
            super();
    }
}
*/
