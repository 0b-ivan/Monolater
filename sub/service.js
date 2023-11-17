const express = require('express');
const app = express();

app.get('/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const result = num1 - num2;
  res.send({ result });
});

app.listen(3002, () => {
  console.log('Subtraction service started on port 3002');
});