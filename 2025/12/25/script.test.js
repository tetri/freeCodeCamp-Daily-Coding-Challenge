const generateSnowflake = require("./script");

//1. generateSnowflake("* \n *\n* ") should return "*  *\n ** \n*  *".
//2. generateSnowflake("X=~") should return "X=~~=X".
//3. generateSnowflake(" X  \n  v \nX--=\n  ^ \n X  ") should return " X    X \n  v  v  \nX--==--X\n  ^  ^  \n X    X ".
//4. generateSnowflake("*   *\n * * \n* * *\n * * \n*   *") should return "*   **   *\n * *  * * \n* * ** * *\n * *  * * \n*   **   *".
//5. generateSnowflake("*  -\n * -\n*  -") should return "*  --  *\n * -- * \n*  --  *".

test("generateSnowflake 1", () => {
    expect(generateSnowflake("* \n *\n* ")).toStrictEqual("*  *\n ** \n*  *");
});
test("generateSnowflake 2", () => {
    expect(generateSnowflake("X=~")).toStrictEqual("X=~~=X");
});
test("generateSnowflake 3", () => {
    expect(generateSnowflake(" X  \n  v \nX--=\n  ^ \n X  ")).toStrictEqual(
        " X    X \n  v  v  \nX--==--X\n  ^  ^  \n X    X "
    );
});
test("generateSnowflake 4", () => {
    expect(
        generateSnowflake("*   *\n * * \n* * *\n * * \n*   *")
    ).toStrictEqual(
        "*   **   *\n * *  * * \n* * ** * *\n * *  * * \n*   **   *"
    );
});
test("generateSnowflake 5", () => {
    expect(generateSnowflake("*  -\n * -\n*  -")).toStrictEqual(
        "*  --  *\n * -- * \n*  --  *"
    );
});
