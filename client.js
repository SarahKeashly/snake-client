const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("you are successfully connected to the game server");
    // code that does something when the connection is first established

  });

  conn.on("connect", () => {
    conn.write('Name: SEK');

  });

  conn.on("connect", () => {
    // conn.write('Move: up');
  });


  return conn;
};

console.log("Connecting ...");
connect();



module.exports = {

  connect,

}


