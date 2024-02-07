// 
const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function() {
const conn = net.createConnection({
  host: IP,
  port: PORT,
});
// set proper language
conn.setEncoding("utf8");
// upon connection, send name and welcome message
conn.on("connect", () => {
  conn.write('Name: jj');
  console.log("welcome, My snakey friend");

  
});
// recieve data back from program
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};
module.exports = { connect };