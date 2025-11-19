const findLandingSpot = require("./script");

//1. findLandingSpot([[1, 0], [2, 0]]) should return [0, 1].
//2. findLandingSpot([[9, 0, 3], [7, 0, 4], [8, 0, 5]]) should return [1, 1].
//3. findLandingSpot([[1, 2, 1], [0, 0, 2], [3, 0, 0]]) should return [2, 2].
//4. findLandingSpot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]]) should return [2, 1].

test("findLandingSpot 1", () => {
  expect(
    findLandingSpot([
      [1, 0],
      [2, 0],
    ])
  ).toStrictEqual([0, 1]);
});

test("findLandingSpot 2", () => {
  expect(
    findLandingSpot([
      [9, 0, 3],
      [7, 0, 4],
      [8, 0, 5],
    ])
  ).toStrictEqual([1, 1]);
});

test("findLandingSpot 3", () => {
  expect(
    findLandingSpot([
      [1, 2, 1],
      [0, 0, 2],
      [3, 0, 0],
    ])
  ).toStrictEqual([2, 2]);
});

test("findLandingSpot 4", () => {
  expect(
    findLandingSpot([
      [9, 6, 0, 8],
      [7, 1, 1, 0],
      [3, 0, 3, 9],
      [8, 6, 0, 9],
    ])
  ).toStrictEqual([2, 1]);
});

//TESTES EXTRA!

// 1. Múltiplos zeros em uma linha, o mais seguro no meio
test("findLandingSpot extra 1", () => {
  expect(findLandingSpot([[0, 0, 0]])).toStrictEqual([0, 0]);
});

// 2. Pool maior com zeros intercalados
test("findLandingSpot extra 2", () => {
  expect(
    findLandingSpot([
      [9, 0, 9],
      [0, 0, 0],
      [9, 0, 9],
    ])
  ).toStrictEqual([1, 1]);
});

// 3. Zeros isolados com vários perigos ao redor
test("findLandingSpot extra 3", () => {
  expect(
    findLandingSpot([
      [9, 9, 9],
      [9, 0, 9],
      [9, 9, 0],
    ])
  ).toStrictEqual([2, 2]);
});

// 4. Zeros em todos os cantos da matriz
test("findLandingSpot extra 4", () => {
  expect(
    findLandingSpot([
      [0, 9, 0],
      [9, 9, 9],
      [0, 9, 0],
    ])
  ).toStrictEqual([0, 0]);
});

// 5. Zeros com vizinhos perigosos variados
test("findLandingSpot extra 5", () => {
  expect(
    findLandingSpot([
      [9, 4, 0, 9, 0],
      [0, 1, 9, 1, 9],
      [9, 0, 4, 9, 9],
    ])
  ).toStrictEqual([2, 1]);
});

// 6. Matriz só com zeros
test("findLandingSpot extra 6", () => {
  expect(
    findLandingSpot([
      [0, 0],
      [0, 0],
    ])
  ).toStrictEqual([0, 0]);
});

// 7. Matriz só com perigos (nenhum zero) - neste caso não especificado, mas pode lançar erro ou null
// findLandingSpot([[9,8],[7,6]]) -> esperar null ou tratamento (não há zona segura)
// (não requerido aqui, só para observação)

// 8. Zero com o menor vizinho específico
test("findLandingSpot extra 8", () => {
  expect(
    findLandingSpot([
      [5, 5, 5],
      [5, 0, 1],
      [5, 1, 0],
    ])
  ).toStrictEqual([2, 2]);
});

// 9. Vários zeros no centro, alguns com vizinhos perigosos
test("findLandingSpot extra 9", () => {
  expect(
    findLandingSpot([
      [9, 9, 9, 9, 9],
      [9, 0, 0, 0, 9],
      [9, 0, 9, 0, 9],
      [9, 0, 0, 0, 9],
      [9, 9, 9, 9, 9],
    ])
  ).toStrictEqual([1, 1]);
});

// 10. Uma linha grande de zeros cercados por perigos
test("findLandingSpot extra 10", () => {
  expect(
    findLandingSpot([
      [9, 9, 9, 9, 9],
      [0, 0, 0, 0, 0],
      [9, 9, 9, 9, 9],
    ])
  ).toStrictEqual([1, 0]);
});