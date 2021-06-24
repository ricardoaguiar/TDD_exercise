const diceGame = (diceRolls) => {
  let playerOneScore = 0;
  let playerTwoScore = 0;
  let isItPlayerOneTurn = true;
  let turn = [];

  diceRolls.forEach((roll) => {
    if (turn.length < 2 || turn[0] === turn[1]) {
      turn.push(roll);
    }
    if (turn.length === 2 && turn[0] !== turn[1]) {
      // turn ends with two rolls
      if (isItPlayerOneTurn) {
        playerOneScore += turn[0] + turn[1];
        turn = [];
        isItPlayerOneTurn = false;
      } else {
        playerTwoScore += turn[0] + turn[1];
        turn = [];
        isItPlayerOneTurn = true;
      }
    } else if (turn.length === 3) {
      // turn ends with three rolls
      if (isItPlayerOneTurn) {
        playerOneScore += turn[0] + turn[1] + turn[2];
        turn = [];
        isItPlayerOneTurn = false;
      } else {
        playerTwoScore += turn[0] + turn[1] + turn[2];
        turn = [];
        isItPlayerOneTurn = true;
      }
    }
  });

  return [playerOneScore, playerTwoScore];
};

export default diceGame;
