function complementaryDNA(strand) {
  const complements = { A: "T", T: "A", C: "G", G: "C" };
  strand = strand.split("");
  for (let i = 0; i < strand.length; i++) {
    strand[i] = complements[strand[i]];
  }
  strand = strand.join("");
  return strand;
}

module.exports = complementaryDNA;
