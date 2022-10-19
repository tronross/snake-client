const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function(NAME) {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("connect", () => {
    console.log("Connected to game server");
  });

  conn.on("connect", () => {
    conn.write(`Name: ${NAME[0]}`);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and log it to the console
  conn.on("data", (data) => {
    console.log("Msg from client: ", data);
  });
  return conn;
};

module.exports = { connect, };