const createBoard = require("./script");

//1. createBoard([3, 3]) should return [["X", "O", "X"], ["O", "X", "O"], ["X", "O", "X"]].
//2. createBoard([6, 1]) should return [["X"], ["O"], ["X"], ["O"], ["X"], ["O"]].
//3. createBoard([2, 10]) should return [["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"], ["O", "X", "O", "X", "O", "X", "O", "X", "O", "X"]].
//4. createBoard([5, 4]) should return [["X", "O", "X", "O"], ["O", "X", "O", "X"], ["X", "O", "X", "O"], ["O", "X", "O", "X"], ["X", "O", "X", "O"]].

test("createBoard 1", () => {
    expect(createBoard([3, 3])).toStrictEqual([
        ["X", "O", "X"],
        ["O", "X", "O"],
        ["X", "O", "X"],
    ]);
});

test("createBoard 2", () => {
    expect(createBoard([6, 1])).toStrictEqual([
        ["X"],
        ["O"],
        ["X"],
        ["O"],
        ["X"],
        ["O"],
    ]);
});

test("createBoard 3", () => {
    expect(createBoard([2, 10])).toStrictEqual([
        ["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"],
        ["O", "X", "O", "X", "O", "X", "O", "X", "O", "X"],
    ]);
});

test("createBoard 4", () => {
    expect(createBoard([5, 4])).toStrictEqual([
        ["X", "O", "X", "O"],
        ["O", "X", "O", "X"],
        ["X", "O", "X", "O"],
        ["O", "X", "O", "X"],
        ["X", "O", "X", "O"],
    ]);
});
