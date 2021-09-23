

const { connect } = require('./client')
const con = connect();
// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') {
    return process.exit(); // process is going to kill itself
  }
  if (key === 'u') {
    con.write('Move: up')
  }

  if (key === 'd') {
    con.write('Move: down')
  }

  if (key === 'r') {
    con.write('Move: right')
  }

  if (key === 'l') {
    con.write('Move: left')
  }

};
setupInput();