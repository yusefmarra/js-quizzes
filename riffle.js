function createHalves(array) {

}

function shuffle(array) {
  var shuffledArray = [];
  var usedIndex = [];
  var max = array.length;
  while (array.length) {
    var i = Math.floor(Math.random() * (max-0));
    if (usedIndex.indexOf(i) === -1) {
      shuffledArray[i] = array.pop();
      usedIndex.push(i);
    }
  }
  return shuffledArray;
}

function riffle(array) {
  var array1 = array.slice(0,array.length/2);
  var array2 = array.slice(array.length/2);
  var riffledArray = [];
  var deckChoice = Math.floor(Math.random()*2);
  while (array1.length || array2.length) {
    if (deckChoice) {
      //take from array1
      deckChoice = 0;
      var tempArray = array1.splice(0, Math.floor(Math.random()*26));
      for (var i in tempArray) {
        riffledArray.push(tempArray[i]);
      }
    } else {
      //take from array
      deckChoice = 1;
      var tempArray = array2.splice(0, Math.floor(Math.random()*26));
      for (var i in tempArray) {
        riffledArray.push(tempArray[i]);
      }
    }
  }
  return riffledArray;
}

function isItRiffledOnce(deck, deckHalf1, deckHalf2) {
  var tempDeck = deck.slice();
  while (tempDeck.length) {
    if (tempDeck[0] === deckHalf1[0]) {
      // console.log(tempDeck[0] + " " + deckHalf1[0] + " " +deckHalf2[0])
      return isItRiffledOnce(tempDeck.slice(1), deckHalf1.slice(1), deckHalf2);
    } else if (tempDeck[0] === deckHalf2[0]) {
      // console.log(tempDeck[0] + " " + deckHalf1[0] + " " +deckHalf2[0])
      return isItRiffledOnce(tempDeck.slice(1), deckHalf1, deckHalf2.slice(1));
    }
    else {
      return false;
    }
  }
  return true;
}

var cards = [
 "H1", "H2", "H3",  "H4",  "H5",  "H6", "H7",
 "H8", "H9", "H10", "H11", "H12", "H13",
 "C1", "C2", "C3",  "C4",  "C5",  "C6", "C7",
 "C8", "C9", "C10", "C11", "C12", "C13",
 "S1", "S2", "S3",  "S4",  "S5",  "S6", "S7",
 "S8", "S9", "S10", "S11", "S12", "S13",
 "D1", "D2", "D3",  "D4",  "D5",  "D6", "D7",
 "D8", "D9", "D10", "D11", "D12", "D13"
]

var result = riffle(cards);
// console.log(result);
console.log(isItRiffledOnce(riffle(cards), cards.slice(0, cards.length/2), cards.slice(cards.length/2)))
