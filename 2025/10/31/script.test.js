const spookify = require("./script");

//1. spookify("hello_world") should return "HeLlO~wOrLd".
//2. spookify("Spooky_Case") should return "SpOoKy~CaSe".
//3. spookify("TRICK-or-TREAT") should return "TrIcK~oR~tReAt".
//4. spookify("c_a-n_d-y_-b-o_w_l") should return "C~a~N~d~Y~~b~O~w~L".
//5. spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts") should return "ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS".

test("spookify 1", () => {
  expect(spookify("hello_world")).toBe("HeLlO~wOrLd");
});

test("spookify 2", () => {
  expect(spookify("Spooky_Case")).toBe("SpOoKy~CaSe");
});

test("spookify 3", () => {
  expect(spookify("TRICK-or-TREAT")).toBe("TrIcK~oR~tReAt");
});

test("spookify 4", () => {
  expect(spookify("c_a-n_d-y_-b-o_w_l")).toBe("C~a~N~d~Y~~b~O~w~L");
});

test("spookify 5", () => {
  expect(spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts")).toBe(
    "ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS"
  );
});
