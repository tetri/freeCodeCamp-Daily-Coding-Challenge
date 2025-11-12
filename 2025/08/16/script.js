function areAnagrams(str1, str2) {
  let s1 = str1.toLowerCase().split("");
  s1.sort();
  s1 = s1.join("");

  let s2 = str2.toLowerCase().split("");
  s2.sort();
  s2 = s2.join("");

  return s1 == s2;
}

module.exports = areAnagrams;
