const generateHex = require("./script");

//1. generateHex("yellow") should return "Invalid color".
//2. generateHex("red") should return a six-character string.
//3. generateHex("red") should return a valid six-character hex color code.
//4. generateHex("red") should return a valid hex color with a higher red value than other colors.
//5. Calling generateHex("red") twice should return two different hex color values where red is dominant.
//6. Calling generateHex("green") twice should return two different hex color values where green is dominant.
//7. Calling generateHex("blue") twice should return two different hex color values where blue is dominant.

test("generateHex 1", () => {
  expect(generateHex("yellow")).toBe("Invalid color");
});

test("generateHex 2", () => {
  expect(generateHex("red").length).toBe(6);
});

test("generateHex 3", () => {
  const hex = generateHex("red");
  expect(hex).toMatch(/^[0-9A-Fa-f]{6}$/);
});

test("generateHex 4", () => {
  const hex = generateHex("red");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  expect(r).toBeGreaterThanOrEqual(g);
  expect(r).toBeGreaterThanOrEqual(b);
});

test("generateHex 5", () => {
  const hex1 = generateHex("red");
  const hex2 = generateHex("red");

  expect(hex1).not.toBe(hex2);

  const [r1, g1, b1] = [
    hex1.slice(0, 2),
    hex1.slice(2, 4),
    hex1.slice(4, 6),
  ].map((h) => parseInt(h, 16));
  const [r2, g2, b2] = [
    hex2.slice(0, 2),
    hex2.slice(2, 4),
    hex2.slice(4, 6),
  ].map((h) => parseInt(h, 16));

  expect(r1).toBeGreaterThanOrEqual(g1);
  expect(r1).toBeGreaterThanOrEqual(b1);
  expect(r2).toBeGreaterThanOrEqual(g2);
  expect(r2).toBeGreaterThanOrEqual(b2);
});

test("generateHex 6", () => {
  const hex1 = generateHex("green");
  const hex2 = generateHex("green");

  expect(hex1).not.toBe(hex2);

  const [r1, g1, b1] = [
    hex1.slice(0, 2),
    hex1.slice(2, 4),
    hex1.slice(4, 6),
  ].map((h) => parseInt(h, 16));
  const [r2, g2, b2] = [
    hex2.slice(0, 2),
    hex2.slice(2, 4),
    hex2.slice(4, 6),
  ].map((h) => parseInt(h, 16));

  expect(g1).toBeGreaterThanOrEqual(r1);
  expect(g1).toBeGreaterThanOrEqual(b1);
  expect(g2).toBeGreaterThanOrEqual(r2);
  expect(g2).toBeGreaterThanOrEqual(b2);
});

test("generateHex 7", () => {
  const hex1 = generateHex("blue");
  const hex2 = generateHex("blue");

  expect(hex1).not.toBe(hex2);

  const [r1, g1, b1] = [
    hex1.slice(0, 2),
    hex1.slice(2, 4),
    hex1.slice(4, 6),
  ].map((h) => parseInt(h, 16));
  const [r2, g2, b2] = [
    hex2.slice(0, 2),
    hex2.slice(2, 4),
    hex2.slice(4, 6),
  ].map((h) => parseInt(h, 16));

  expect(b1).toBeGreaterThanOrEqual(r1);
  expect(b1).toBeGreaterThanOrEqual(g1);
  expect(b2).toBeGreaterThanOrEqual(r2);
  expect(b2).toBeGreaterThanOrEqual(g2);
});
