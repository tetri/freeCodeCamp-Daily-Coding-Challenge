function generateSignature(name, title, company) {
  let prefix = ">>";
  let firstLetterOfName = name[0].toUpperCase();

  //if (firstLetterOfName.match(/[A-I]/))
  //  prefix = '>>';
  if (firstLetterOfName.match(/[J-R]/)) prefix = "--";
  if (firstLetterOfName.match(/[S-Z]/)) prefix = "::";

  return `${prefix}${name}, ${title} at ${company}`;
}

module.exports = generateSignature;
