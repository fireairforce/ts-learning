var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    if (Array.isArray(x)) {
        var pickCard_1 = Math.floor(Math.random() * x.length);
        return pickCard_1;
    }
    else if (typeof x === "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 }
];
var pickCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickCard1.card + " of " + pickCard1.suit);
var pickCard2 = pickCard(15);
console.log("card: " + pickCard2.card + " of " + pickCard2.suit);
