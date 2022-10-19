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
    // direction key mappings for WASD and (or) arrow keys (as an alternate control surface)
  } else if (uInput === '\u0077' || uInput === "\033[A") {
    connection.write("Move: up");
  } else if (uInput === '\u0061' || uInput === "\033[D") {
    connection.write("Move: left");
  } else if (uInput === '\u0073' || uInput === "\033[B") {
    connection.write("Move: down");
  } else if (uInput === '\u0064' || uInput === "\033[C") {
    connection.write("Move: right");
    // key mappings to make the snake talk
  } else if (uInput === '\u006C') {  // l maps to:
    connection.write("Say: Meowz");
  } else if (uInput === '\u0070') {  // p maps to:
    connection.write("Say: Yaasssssss");
  } else if (uInput === '\u0071') {  // q maps to:
    connection.write("Say: Abra 4ever");
  }
  
};

module.exports = { setupInput, };