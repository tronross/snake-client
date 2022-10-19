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
    connection.write("Move: up");
  } else if (uInput === '\u0061') {
    connection.write("Move: left");
  } else if (uInput === '\u0073') {
    connection.write("Move: down");
  } else if (uInput === '\u0064') {
    connection.write("Move: right");
  } else if (uInput === '\u006C') {
    connection.write("Say: Meowz");
  } else if (uInput === '\u0070') {
    connection.write("Say: Yaasssssss");
  } else if (uInput === '\u0071') {
    connection.write("Say: Abra 4ever");
  }
  
};

module.exports = { setupInput, };