const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and log it to the console
  conn.on("data", (data) => {
    console.log("Msg from client: ", data);
  })
  return conn;
};

console.log("Connecting ...");
connect();