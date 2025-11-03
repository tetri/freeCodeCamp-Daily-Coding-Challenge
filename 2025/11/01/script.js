function verify(message, key, signature) {
  message = message + key;
  message = message.replace(/[^a-zA-Z]/g, '');
  let sum = 0;
  for (let i = 0; i < message.length; i++) {
    sum += charValue(message[i]);
  }
  
  return sum === signature;
}

function charValue(c) {
  let value = 0;
  if (c === c.toUpperCase()) {
    value = c.charCodeAt(0) - 64 + 26;
  } else if (c === c.toLowerCase()) {
    value = c.charCodeAt(0) - 96;
  }
  console.log(c, '=', value);
  return value;
}

module.exports = verify;
