function battle(ourTeam, opponent) {
  let ourWords = ourTeam.split(" ");
  let opponentWords = opponent.split(" ");

  if (ourWords.length != opponentWords.length) return "Error";

  let we = 0;
  let them = 0;

  let words = ourWords.length;

  for (let w = 0; w < words; w++) {
    let _we = 0;
    for (let i = 0; i < ourWords[w].length; i++) {
      _we += charValue(ourWords[w][i]);
    }

    let _them = 0;
    for (let i = 0; i < opponentWords[w].length; i++) {
      _them += charValue(opponentWords[w][i]);
    }

    if (_we > _them) we++;
    else if (_them > _we) them++;
  }

  if (we > them) return "We win";
  else if (them > we) return "We lose";
  else return "Draw";
}

function charValue(c) {
  let value = 0;
  if (c === " ") value = 0;
  else if (c === c.toUpperCase()) {
    value = (c.charCodeAt(0) - 64) * 2;
  } else {
    value = c.charCodeAt(0) - 96;
  }
  return value;
}

module.exports = battle;
