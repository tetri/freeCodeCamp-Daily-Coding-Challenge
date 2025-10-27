const complementaryDNA = require("./script");

//1. complementaryDNA("ACGT") should return "TGCA".
//2. complementaryDNA("ATGCGTACGTTAGC") should return "TACGCATGCAATCG".
//3. complementaryDNA("GGCTTACGATCGAAG") should return "CCGAATGCTAGCTTC".
//4. complementaryDNA("GATCTAGCTAGGCTAGCTAG") should return "CTAGATCGATCCGATCGATC".

test("complementaryDNA 1", () => {
  expect(complementaryDNA("ACGT")).toEqual("TGCA");
});

test("complementaryDNA 2", () => {
  expect(complementaryDNA("ATGCGTACGTTAGC")).toEqual("TACGCATGCAATCG");
});

test("complementaryDNA 3", () => {
  expect(complementaryDNA("GGCTTACGATCGAAG")).toEqual("CCGAATGCTAGCTTC");
});

test("complementaryDNA 4", () => {
  expect(complementaryDNA("GATCTAGCTAGGCTAGCTAG")).toEqual("CTAGATCGATCCGATCGATC");
});
