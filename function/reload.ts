let suits = ["hearts", "spades", "clubs", "diamonds"];

// 函数部分
function pickCard(x: { suit: string; card: number }[]): number;
// 重载部分将x由对象数组重载为数字
function pickCard(x: number): { suit: string; card: number };

function pickCard(x): any {
  if (Array.isArray(x)) {
    let pickCard = Math.floor(Math.random() * x.length);
    return pickCard;
  } else if (typeof x === "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}
let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 }
];
let pickCard1 = myDeck[pickCard(myDeck)];
console.log(`card: ${pickCard1.card} of ${pickCard1.suit}`);

let pickCard2 = pickCard(15);
console.log(`card: ${pickCard2.card} of ${pickCard2.suit}`);
