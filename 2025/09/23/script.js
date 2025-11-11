function isMirror(str1, str2) {
  str1 = str1.replace(/[^a-zA-Z]/g, "");
  str2 = str2.replace(/[^a-zA-Z]/g, "");
  let mirror = str1.split("").reverse().join("");
  return mirror === str2;
}

module.exports = isMirror;
