const capitalize = require("./script");

//1. capitalize("this is a simple sentence.") should return "This is a simple sentence.".
//2. capitalize("hello world. how are you?") should return "Hello world. How are you?".
//3. capitalize("i did today's coding challenge... it was fun!!") should return "I did today's coding challenge... It was fun!!".
//4. capitalize("crazy!!!strange???unconventional...sentences.") should return "Crazy!!!Strange???Unconventional...Sentences.".
//5. capitalize("there's a space before this period . why is there a space before that period ?") should return "There's a space before this period . Why is there a space before that period ?".

test("capitalize 1", () => {
  expect(capitalize("this is a simple sentence.")).toStrictEqual(
    "This is a simple sentence."
  );
});

test("capitalize 2", () => {
  expect(capitalize("hello world. how are you?")).toStrictEqual(
    "Hello world. How are you?"
  );
});

test("capitalize 3", () => {
  expect(
    capitalize("i did today's coding challenge... it was fun!!")
  ).toStrictEqual("I did today's coding challenge... It was fun!!");
});

test("capitalize 4", () => {
  expect(
    capitalize("crazy!!!strange???unconventional...sentences.")
  ).toStrictEqual("Crazy!!!Strange???Unconventional...Sentences.");
});

test("capitalize 5", () => {
  expect(
    capitalize(
      "there's a space before this period . why is there a space before that period ?"
    )
  ).toStrictEqual(
    "There's a space before this period . Why is there a space before that period ?"
  );
});
