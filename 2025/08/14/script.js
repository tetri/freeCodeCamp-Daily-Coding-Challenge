function spaceJam(s) {
  return s.replace(/\s+/g, "").split("").join("  ").toUpperCase();
}

module.exports = spaceJam;
