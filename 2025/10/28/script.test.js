const navigate = require("./script");

//1. navigate(["Visit About Us", "Back", "Forward"]) should return "About Us".
//2. navigate(["Forward"]) should return "Home".
//3. navigate(["Back"]) should return "Home".
//4. navigate(["Visit About Us", "Visit Gallery"]) should return "Gallery".
//5. navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]) should return "Home".
//6. navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]) should return "Contact".
//7. navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]) should return "Visit Us".

test("navigate 1", () => {
  expect(navigate(["Visit About Us", "Back", "Forward"])).toBe("About Us");
});

test("navigate 2", () => {
  expect(navigate(["Forward"])).toBe("Home");
});

test("navigate 3", () => {
  expect(navigate(["Back"])).toBe("Home");
});

test("navigate 4", () => {
  expect(navigate(["Visit About Us", "Visit Gallery"])).toBe("Gallery");
});

test("navigate 5", () => {
  expect(navigate(["Visit About Us", "Visit Gallery", "Back", "Back"])).toBe(
    "Home"
  );
});

test("navigate 6", () => {
  expect(
    navigate([
      "Visit About",
      "Visit Gallery",
      "Back",
      "Visit Contact",
      "Forward",
    ])
  ).toBe("Contact");
});

test("navigate 7", () => {
  expect(
    navigate([
      "Visit About Us",
      "Visit Visit Us",
      "Forward",
      "Visit Contact Us",
      "Back",
    ])
  ).toBe("Visit Us");
});
