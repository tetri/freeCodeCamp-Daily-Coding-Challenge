function countPermutations(str) {
  let total = str.length;
  let unique = [...new Set(str.split(""))].join("");

  let reps = 1;
  for (let i = 0; i < unique.length; i++) {
    let _count = count(unique[i], str);
    reps *= fatorial(_count);
  }

  return fatorial(total) / reps;
}

function count(char, str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) if (str[i] == char) count += 1;
  return count;
}

function fatorial(numero) {
  if (numero === 0 || numero === 1) return 1;
  return numero * fatorial(numero - 1);
}

module.exports = countPermutations;


/*
* Permutação sem repetições:
* P = total! / repetições de caracteres!
* "racecar" = 7! / 2! * 2! * 2! * 1!
*/