const adjustThermostat = require("./script");

//1. adjustThermostat(68, 72) should return "heat".
//2. adjustThermostat(75, 72) should return "cool".
//3. adjustThermostat(72, 72) should return "hold".
//4. adjustThermostat(-20.5, -10.1) should return "heat".
//5. adjustThermostat(100, 99.9) should return "cool".
//6. adjustThermostat(0.0, 0.0) should return "hold".

test("adjustThermostat 1", () => {
  expect(adjustThermostat(68, 72)).toStrictEqual("heat");
});

test("adjustThermostat 2", () => {
  expect(adjustThermostat(75, 72)).toStrictEqual("cool");
});

test("adjustThermostat 3", () => {
  expect(adjustThermostat(72, 72)).toStrictEqual("hold");
});

test("adjustThermostat 4", () => {
  expect(adjustThermostat(-20.5, -10.1)).toStrictEqual("heat");
});

test("adjustThermostat 5", () => {
  expect(adjustThermostat(100, 99.9)).toStrictEqual("cool");
});

test("adjustThermostat 6", () => {
  expect(adjustThermostat(0.0, 0.0)).toStrictEqual("hold");
});
