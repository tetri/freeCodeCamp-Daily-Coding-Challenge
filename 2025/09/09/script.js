function allUnique(str) {
  let characters = str.split("");
  let uniques = [...new Set(characters)];

  characters.sort();
  uniques.sort();

  return characters.join("") === uniques.join("");
}

module.exports = allUnique;
