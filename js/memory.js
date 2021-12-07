class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (this.cards === undefined) return undefined;

    const cards = this.cards;
    const length = cards.length;
    for (let i = length-1; i >=0; i--){
      let randIndex = Math.floor(Math.random() * length);
      let currentElement = cards[i];
      let indexElement = cards[randIndex];
      cards[i] = indexElement;
      cards[randIndex] = currentElement;
      
    }
    return this.cards;
  };

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2){
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    };
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      return true;
    } else {
      return false;
    };
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
