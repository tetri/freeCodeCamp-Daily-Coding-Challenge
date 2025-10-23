const wiseSpeak = require("./script");

//1. wiseSpeak("You must speak wisely.") should return "Speak wisely, you must."
//2. wiseSpeak("You can do it!") should return "Do it, you can!"
//3. wiseSpeak("Do you think you will complete this?") should return "Complete this, do you think you will?"
//4. wiseSpeak("All your base are belong to us.") should return "Belong to us, all your base are."
//5. wiseSpeak("You have much to learn.") should return "Much to learn, you have."

test("wiseSpeak 1", () => {
  expect(wiseSpeak("You must speak wisely.")).toEqual(
    "Speak wisely, you must."
  );
});

test("wiseSpeak 2", () => {
  expect(wiseSpeak("You can do it!")).toEqual("Do it, you can!");
});

test("wiseSpeak 3", () => {
  expect(wiseSpeak("Do you think you will complete this?")).toEqual(
    "Complete this, do you think you will?"
  );
});

test("wiseSpeak 4", () => {
  expect(wiseSpeak("All your base are belong to us.")).toEqual(
    "Belong to us, all your base are."
  );
});

test("wiseSpeak 5", () => {
  expect(wiseSpeak("You have much to learn.")).toEqual(
    "Much to learn, you have."
  );
});
