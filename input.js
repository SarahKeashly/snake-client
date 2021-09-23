const { connect } = require('./client')

const con = connect();

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
  if (key === 'w') {
    con.write('Move: up')
  }

  if (key === 's') {
    con.write('Move: down')
  }

  if (key === 'd') {
    con.write('Move: right')
  }

  if (key === 'a') {
    con.write('Move: left')
  }

  if (key === 'j') {
    con.write('Say: This is fun')
  }

};
module.exports = setupInput;