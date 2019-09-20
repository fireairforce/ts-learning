let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function() {
    // return function() {
    // 这个地方改为箭头函数，因为他是函数创建的时候的this值
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickSuit = Math.floor(pickedCard / 13);
      return {
        //   这里this在ts里面会被推断为any
        suits: this.suits[pickSuit],
        card: pickedCard % 13
      };
    };
  }
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log(`card: ${pickedCard.card} of ${pickedCard.suits}`);
