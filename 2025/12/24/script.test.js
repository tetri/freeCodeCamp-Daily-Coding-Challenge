const parseImage = require("./script");

//1. parseImage("![Cute cat](cat.png)") should return '<img src="cat.png" alt="Cute cat">'.
//2. parseImage("![Rocket Ship](https://freecodecamp.org/cdn/rocket-ship.jpg)") should return '<img src="https://freecodecamp.org/cdn/rocket-ship.jpg" alt="Rocket Ship">'.
//3. parseImage("![Cute cats!](https://freecodecamp.org/cats.jpeg)") should return '<img src="https://freecodecamp.org/cats.jpeg" alt="Cute cats!">'.

test("parseImage 1", () => {
    expect(parseImage("![Cute cat](cat.png)")).toStrictEqual(
        '<img src="cat.png" alt="Cute cat">'
    );
});
test("parseImage 2", () => {
    expect(parseImage("![Rocket Ship](https://freecodecamp.org/cdn/rocket-ship.jpg)")).toStrictEqual(
        '<img src="https://freecodecamp.org/cdn/rocket-ship.jpg" alt="Rocket Ship">'
    );
});
test("parseImage 3", () => {
    expect(parseImage("![Cute cats!](https://freecodecamp.org/cats.jpeg)")).toStrictEqual(
        '<img src="https://freecodecamp.org/cats.jpeg" alt="Cute cats!">'
    );
});