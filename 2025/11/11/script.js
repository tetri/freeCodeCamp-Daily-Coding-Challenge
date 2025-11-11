function count(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z]/g, "");
  let vowels = 0;
  let consonants = 0;
  for (let i = 0; i < str.length; i++)
    if ("aeiou".includes(str[i])) vowels++;
    else consonants++;

  return [vowels, consonants];
}

module.exports = count;
