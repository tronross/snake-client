const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function(name) {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  console.log(name);
  conn.on("connect", () => {
    console.log("Connected to game server");
  });

  conn.on("connect", () => {
    name.push("Sss"); // set default snake name if user-name not input at CLI
    conn.write(`Name: ${name[0]}`); // send name to server for snake-display
  });

  // terminate game gracefully at client end when error is thrown by snake hitting obstacle
  conn.on("error", () => {
    console.log("Game Over\n");
    process.exit();
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and log it to the console
  conn.on("data", (data) => {
    console.log("Msg from client: ", data);
    if (data === "you ded cuz you idled\n") {
      console.log("Game Over\n");
      process.exit(); // terminate game at client end when terminated at server end
    }
  });
  return conn;
};

module.exports = { connect, };