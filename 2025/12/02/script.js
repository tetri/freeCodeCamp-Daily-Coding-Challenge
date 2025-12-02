function toSnake(camel) {
  let snake = "";

  for (let i = 0; i < camel.length; i++) {
    let char = camel[i];
    if (char == char.toUpperCase()) snake += "_" + char.toLowerCase();
    else snake += char;
  }

  return snake;
}

module.exports = toSnake;
