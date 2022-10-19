// setupInput: setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

// handleUserInput: processes user stdin data
const handleUserInput = function(uInput) {
  // \u0003 maps to ctrl+c input to terminate game
  if (uInput === '\u0003') {
    process.exit();
  }

};

module.exports = { setupInput, };