const buyItems = require("./script");

//1. buyItems(["150.00", "USD"], [["50.00", "USD"], ["75.00", "USD"], ["30.00", "USD"]]) should return "Buy the first 2 items.".
//2. buyItems(["200.00", "EUR"], [["50.00", "USD"], ["50.00", "USD"]]) should return "Buy them all!".
//3. buyItems(["100.00", "CAD"], [["20.00", "USD"], ["15.00", "EUR"], ["10.00", "GBP"], ["6000", "JPY"], ["5.00", "CAD"], ["10.00", "USD"]]) should return "Buy the first 3 items.".
//4. buyItems(["5000", "JPY"], [["3.00", "USD"], ["1000", "JPY"], ["5.00", "CAD"], ["2.00", "EUR"], ["4.00", "USD"], ["2000", "JPY"]]) should return "Buy them all!".
//5. buyItems(["200.00", "USD"], [["50.00", "USD"], ["40.00", "EUR"], ["30.00", "GBP"], ["5000", "JPY"], ["25.00", "CAD"], ["20.00", "USD"]]) should return "Buy the first 5 items.".

test("buyItems 1", () => {
    expect(
        buyItems(
            ["150.00", "USD"],
            [
                ["50.00", "USD"],
                ["75.00", "USD"],
                ["30.00", "USD"],
            ]
        )
    ).toStrictEqual("Buy the first 2 items.");
});
test("buyItems 2", () => {
    expect(
        buyItems(
            ["200.00", "EUR"],
            [
                ["50.00", "USD"],
                ["50.00", "USD"],
            ]
        )
    ).toStrictEqual("Buy them all!");
});
test("buyItems 3", () => {
    expect(
        buyItems(
            ["100.00", "CAD"],
            [
                ["20.00", "USD"],
                ["15.00", "EUR"],
                ["10.00", "GBP"],
                ["6000", "JPY"],
                ["5.00", "CAD"],
                ["10.00", "USD"],
            ]
        )
    ).toStrictEqual("Buy the first 3 items.");
});
test("buyItems 4", () => {
    expect(
        buyItems(
            ["5000", "JPY"],
            [
                ["3.00", "USD"],
                ["1000", "JPY"],
                ["5.00", "CAD"],
                ["2.00", "EUR"],
                ["4.00", "USD"],
                ["2000", "JPY"],
            ]
        )
    ).toStrictEqual("Buy them all!");
});
test("buyItems 5", () => {
    expect(
        buyItems(
            ["200.00", "USD"],
            [
                ["50.00", "USD"],
                ["40.00", "EUR"],
                ["30.00", "GBP"],
                ["5000", "JPY"],
                ["25.00", "CAD"],
                ["20.00", "USD"],
            ]
        )
    ).toStrictEqual("Buy the first 5 items.");
});
