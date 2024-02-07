const net = require("net");
// establishes a connection with the game server
const {connect} = require("./client");
const {setupInput} = require("./input");

// connecting message
console.log("Connecting ...");

const connection = connect();
setupInput(connection);



