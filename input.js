let connection;

// setupInput: setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
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
  } else if (uInput === '\u0077') {
    console.log("Sweeet sweet w yass");
  } else if (uInput === '\u0061') {
    console.log("aaaaaaaaaaaaaaaaaaaaa");
  } else if (uInput === '\u0073') {
    console.log("snekssssssssss");
  } else if (uInput === '\u0064') {
    console.log("dd d d d d d d dd");
  };
  

};

module.exports = { setupInput, };