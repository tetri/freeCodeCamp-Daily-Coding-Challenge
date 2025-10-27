function dive(map, coordinates) {
  let collected = map[coordinates[0]][coordinates[1]];

  //console.log(`Diving at [${coordinates[0]}, ${coordinates[1]}]: ${collected}`);

  if (collected == "-") return "Empty";

  //if (collected == "X") return "Found";

  if (collected == "O" || collected == "X") {
    map[coordinates[0]][coordinates[1]] = "X";

    let hasAnotherO = false;
    for (const line of map)
      for (const element of line) {
        if (element == "O") {
          hasAnotherO = true;
          break;
        }
      }

    if (hasAnotherO) return "Found";
    else return "Recovered";
  }
}

module.exports = dive;
