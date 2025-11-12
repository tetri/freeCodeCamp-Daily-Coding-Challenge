const generateSignature = require("./script");

//1. generateSignature("Quinn Waverly", "Founder and CEO", "TechCo") should return "--Quinn Waverly, Founder and CEO at TechCo".
//2. generateSignature("Alice Reed", "Engineer", "TechCo") should return ">>Alice Reed, Engineer at TechCo".
//3. generateSignature("Tina Vaughn", "Developer", "example.com") should return "::Tina Vaughn, Developer at example.com".
//4. generateSignature("B. B.", "Product Tester", "AcmeCorp") should return ">>B. B., Product Tester at AcmeCorp".
//5. generateSignature("windstorm", "Cloud Architect", "Atmospheronics") should return "::windstorm, Cloud Architect at Atmospheronics".

test("generateSignature 1", () => {
  expect(
    generateSignature("Quinn Waverly", "Founder and CEO", "TechCo")
  ).toStrictEqual("--Quinn Waverly, Founder and CEO at TechCo");
});

test("generateSignature 2", () => {
  expect(generateSignature("Alice Reed", "Engineer", "TechCo")).toStrictEqual(
    ">>Alice Reed, Engineer at TechCo"
  );
});

test("generateSignature 3", () => {
  expect(
    generateSignature("Tina Vaughn", "Developer", "example.com")
  ).toStrictEqual("::Tina Vaughn, Developer at example.com");
});

test("generateSignature 4", () => {
  expect(
    generateSignature("B. B.", "Product Tester", "AcmeCorp")
  ).toStrictEqual(">>B. B., Product Tester at AcmeCorp");
});

test("generateSignature 5", () => {
  expect(
    generateSignature("windstorm", "Cloud Architect", "Atmospheronics")
  ).toStrictEqual("::windstorm, Cloud Architect at Atmospheronics");
});
