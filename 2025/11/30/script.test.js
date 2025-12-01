const detectAI = require("./script");

//1. detectAI("The quick brown fox jumped over the lazy dog.") should return "Human".
//2. detectAI("The hypersonic brown fox - jumped (over) the lazy dog.") should return "Human".
//3. detectAI("Yes - you're right! I made a mistake there - let me try again.") should return "AI".
//4. detectAI("The extraordinary students were studying vivaciously.") should return "AI".
//5. detectAI("The (excited) student was (coding) in the library.") should return "AI".

test("detectAI 1", () => {
  expect(detectAI("The quick brown fox jumped over the lazy dog."));
});

test("detectAI 2", () => {
  expect(detectAI("The hypersonic brown fox - jumped (over) the lazy dog."));
});

test("detectAI 3", () => {
  expect(
    detectAI("Yes - you're right! I made a mistake there - let me try again.")
  );
});

test("detectAI 4", () => {
  expect(detectAI("The extraordinary students were studying vivaciously."));
});

test("detectAI 5", () => {
  expect(detectAI("The (excited) student was (coding) in the library."));
});
