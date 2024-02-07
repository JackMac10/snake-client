// define connection
let connection;


// assert input comunication with program
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  return stdin;
};

const {handleUserInput} = require("./constants");

module.exports = {setupInput, handleUserInput};