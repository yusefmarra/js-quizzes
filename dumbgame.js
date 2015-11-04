function aiMove(playerMoves) {
  if (!playerMoves.length) {
    return Math.floor(Math.random()*3+1);
  } else {
    var length = playerMoves.length;
    if (playerMoves[length-1] === 1) {
      return Math.floor(Math.random()*4+3);
    } else if (playerMoves[length-1] > 1 && playerMoves[length-1]) {

    }
  }
}

console.log(aiMove([]));
