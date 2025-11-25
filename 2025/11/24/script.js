function isValidMessage(message, validator) {
  validator = validator.toLowerCase();

  let code = "";

  let words = message.split(" ");
  for (let i = 0; i < words.length; i++) {
    code += words[i][0].toLowerCase();
  }

  return code === validator;
}

module.exports = isValidMessage;
