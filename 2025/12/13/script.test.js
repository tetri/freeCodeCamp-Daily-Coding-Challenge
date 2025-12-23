const gameOfLife = require("./script");

//1. gameOfLife([[0, 1, 0], [0, 1, 1], [1, 1, 0]]) should return [[0, 1, 1], [0, 0, 1], [1, 1, 1]].
//2. gameOfLife([[1, 1, 0, 0], [1, 0, 1, 0], [0, 1, 1, 1], [0, 0, 1, 0]]) should return [[1, 1, 0, 0], [1, 0, 0, 1], [0, 0, 0, 1], [0, 1, 1, 1]].
//3. gameOfLife([[1, 0, 0], [0, 1, 0], [0, 0, 1]]) should return [[0, 0, 0], [0, 1, 0], [0, 0, 0]].
//4. gameOfLife([[0, 1, 1, 0], [1, 1, 0, 1], [0, 1, 1, 0], [0, 0, 1, 0]]) should return [[1, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]].

test("gameOfLife 1", () => {
    expect(
        gameOfLife([
            [0, 1, 0],
            [0, 1, 1],
            [1, 1, 0],
        ])
    ).toStrictEqual([
        [0, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
    ]);
});

test("gameOfLife 2", () => {
    expect(
        gameOfLife([
            [1, 1, 0, 0],
            [1, 0, 1, 0],
            [0, 1, 1, 1],
            [0, 0, 1, 0],
        ])
    ).toStrictEqual([
        [1, 1, 0, 0],
        [1, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 1, 1, 1],
    ]);
});

test("gameOfLife 3", () => {
    expect(
        gameOfLife([
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
        ])
    ).toStrictEqual([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ]);
});

test("gameOfLife 4", () => {
    expect(
        gameOfLife([
            [0, 1, 1, 0],
            [1, 1, 0, 1],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
        ])
    ).toStrictEqual([
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
    ]);
});
