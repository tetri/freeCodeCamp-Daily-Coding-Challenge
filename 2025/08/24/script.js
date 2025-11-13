function battle(myArmy, opposingArmy) {
  if (myArmy.length > opposingArmy.length) return "Opponent retreated";

  if (myArmy.length < opposingArmy.length) return "We retreated";

  let myVictories = 0;
  let themVictories = 0;
  for (let i = 0; i < myArmy.length; i++) {
    let myValue = charValue(myArmy[i]);
    let themValue = charValue(opposingArmy[i]);

    if (myValue > themValue) myVictories++;

    if (myValue < themValue) themVictories++;
  }

  if (myVictories > themVictories) return "We won";

  if (myVictories < themVictories) return "We lost";

  return "It was a tie";
}

function charValue(char) {
  if ("0123456789".includes(char)) return parseInt(char);

  let code = char.charCodeAt(0);
  if (code >= 65 && code <= 90)
    //A-Z
    return code - 38;

  if (code >= 97 && code <= 122)
    //a-z
    return code - 96;

  return 0;
}

module.exports = battle;
