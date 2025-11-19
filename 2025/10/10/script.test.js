const launchFuel = require('./script');

//1. launchFuel(50) should return 12.4.
//2. launchFuel(500) should return 124.8.
//3. launchFuel(243) should return 60.7.
//4. launchFuel(11000) should return 2749.8.
//5. launchFuel(6214) should return 1553.4.

test('launchFuel 1', () => {
    expect(launchFuel(50)).toBe(12.4);
});

test('launchFuel 2', () => {
    expect(launchFuel(500)).toBe(124.8);
});

test('launchFuel 3', () => {
    expect(launchFuel(243)).toBe(60.7);
});

test('launchFuel 4', () => {
    expect(launchFuel(11000)).toBe(2749.8);
});

test('launchFuel 5', () => {
    expect(launchFuel(6214)).toBe(1553.4);
});