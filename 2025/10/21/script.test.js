const adjustThermostat = require("./script");

//1. adjustThermostat(32, 0) should return "Hold".
//2. adjustThermostat(70, 25) should return "Heat: 7.0 degrees Fahrenheit".
//3. adjustThermostat(72, 18) should return "Cool: 7.6 degrees Fahrenheit".
//4. adjustThermostat(212, 100) should return "Hold".
//5. adjustThermostat(59, 22) should return "Heat: 12.6 degrees Fahrenheit".

test("adjustThermostat 1", () => {
  expect(adjustThermostat(32, 0)).toBe("Hold");
});

test("adjustThermostat 2", () => {
  expect(adjustThermostat(70, 25)).toBe("Heat: 7.0 degrees Fahrenheit");
});

test("adjustThermostat 3", () => {
  expect(adjustThermostat(72, 18)).toBe("Cool: 7.6 degrees Fahrenheit");
});

test("adjustThermostat 4", () => {
  expect(adjustThermostat(212, 100)).toBe("Hold");
});

test("adjustThermostat 5", () => {
  expect(adjustThermostat(59, 22)).toBe("Heat: 12.6 degrees Fahrenheit");
});
