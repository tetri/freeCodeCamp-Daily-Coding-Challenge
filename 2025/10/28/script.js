function navigate(commands) {
  let pages = ["Home"];
  let index = 0;

  for (let i = 0; i < commands.length; i++) {
    let command = commands[i];

    if (command.startsWith("Visit ")) {
      pages.push(command.replace("Visit ", ""));
      index = pages.length - 1;
    } else if (command === "Back") {
      index = Math.max(0, index - 1);
    } else if (command === "Forward") {
      index = Math.min(pages.length - 1, index + 1);
    }
  }

  return pages[index];
}

module.exports = navigate;