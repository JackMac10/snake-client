// dictate connection addresses
const IP = "localhost"; // IP address here,
const PORT = 50541; // PORT number here,


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

//controls
const handleUserInput = function(data) {
  
  if (data === '\u0003') {
    console.log("GoodBye SSSNNNNAAAAAKKKEEE");
    process.exit();
  }
  if (data === 'w') {
    connection.write('Move: up');
  } else if (data === 's') {
    connection.write('Move: down');
  } else if (data === 'a') {
    connection.write('Move: left');
  } else if (data === 'd') {
    connection.write('Move: right');
  } else if (data === '1') {
    connection.write('Say: sssssssss');
  } else if (data === '2') {
    connection.write('Say: AHHHHH');
  } else if (data === '3') {
    connection.write('Say: stay away from my food!');
  }  else if (data === '4') {
    connection.write('Say: $*@%!!');
  }
};

module.exports = {
  IP,
  PORT,
  setupInput,
  handleUserInput,
};