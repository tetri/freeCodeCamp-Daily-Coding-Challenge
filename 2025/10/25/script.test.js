const complementaryDNA = require("./script");

//1. complementaryDNA("ACGT") should return "TGCA".
//2. complementaryDNA("ATGCGTACGTTAGC") should return "TACGCATGCAATCG".
//3. complementaryDNA("GGCTTACGATCGAAG") should return "CCGAATGCTAGCTTC".
//4. complementaryDNA("GATCTAGCTAGGCTAGCTAG") should return "CTAGATCGATCCGATCGATC".

test("complementaryDNA 1", () => {
  expect(complementaryDNA("ACGT")).toBe("TGCA");
});

test("complementaryDNA 2", () => {
  expect(complementaryDNA("ATGCGTACGTTAGC")).toBe("TACGCATGCAATCG");
});

test("complementaryDNA 3", () => {
  expect(complementaryDNA("GGCTTACGATCGAAG")).toBe("CCGAATGCTAGCTTC");
});

test("complementaryDNA 4", () => {
  expect(complementaryDNA("GATCTAGCTAGGCTAGCTAG")).toBe("CTAGATCGATCCGATCGATC");
});
