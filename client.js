const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("welcome, My snakey friend")
    conn.write('Name: jj')
    conn.write('Move: up')
    setInterval(() => {
     
    }, 50);

  });

  conn.on("data", (data) => {
    console.log(data);
  });

/* //conn.write('Move: up');
Move: Down
Move: Left
Move: Right
*/


  return conn;
};
module.exports = { connect }