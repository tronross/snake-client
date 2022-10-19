const net = require("net");

// establishes a connection with the game server
const connect = function() {
  console.log("Connecting ..."); // notify user function has been called

  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  conn.on ("connect", () => {
    console.log("Connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: 555");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and log it to the console
  conn.on("data", (data) => {
    console.log("Msg from client: ", data);
  });
  return conn;
};

connect();

module.exports = { connect, };