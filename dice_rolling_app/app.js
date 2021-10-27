const DiceRoller = require('./roll_dice');
const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3002;

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;
    
  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    let host = req.headers.host;
    let url_string = `http://${host}${path}`;
    let url = new URL(url_string);
  
    let rolls = url.searchParams.get("rolls");
    let sides = url.searchParams.get("sides");
  
    let myDiceRoller = new DiceRoller(rolls, sides);
    myDiceRoller.rollDice();
    let diceResultArr = myDiceRoller.getRollHistory();

    let responseBody = [...diceResultArr, "\n", `${method} ${path}`].join("\n");

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(responseBody);
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});