function block(color, turned) {
    this.color = color;
    this.turned = turned;

    this.flip = function() {
        return this.turned = true;
    }
}
function player(hand, color, turn) {
    this.hand = hand; 
    this.color = color;
    this.turn = turn;

    this.playblock = function(inputloc) {
        this.hand = moverow(inputloc, this.hand, this.color);
        this.hand.flip();
    }
}
