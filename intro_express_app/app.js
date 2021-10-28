const express = require('express');
const PORT = 3002;

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express<h1>');
  res.render('index')
});

app.get('/account', (req, res) => {
  res.render('account', { money: '$100', recentTransaction: true})
});


app.listen(PORT, () => {
  console.log("Listening on Port " + PORT);
});