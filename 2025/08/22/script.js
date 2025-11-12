function decode(message, shift) {
  let decoded = "";
  for (let i in message) {
    let char = message[i];
    if (char.match(/[a-z]/)) {
      let y = message.charCodeAt(i) - shift;
      if (y < 97) y += 26;
      if (y > 122) y -= 26;
      char = String.fromCharCode(y);
    }
    if (char.match(/[A-Z]/)) {
      let y = message.charCodeAt(i) - shift;
      if (y < 65) y += 26;
      if (y > 90) y -= 26;
      char = String.fromCharCode(y);
    }
    decoded += char;
  }
  return decoded;
}

module.exports = decode;
