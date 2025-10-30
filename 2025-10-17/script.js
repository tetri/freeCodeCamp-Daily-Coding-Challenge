function mask(card) {
  let separator;
  if (card.includes("-")) {
    separator = "-";
  } else if (card.includes(" ")) {
    separator = " ";
  }

  let numbers = card.split(separator);
  numbers[0] = "****";
  numbers[1] = "****";
  numbers[2] = "****";
  card = numbers.join(separator);

  return card;
}

module.exports = mask;
