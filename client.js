const net = require("net");
const { host, port } = require("./constants");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host,
    port
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("you are successfully connected to the game server");
    // code that does something when the connection is first established

  });


  return conn;
};


module.exports = {
  connect
}


