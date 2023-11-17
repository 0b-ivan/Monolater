const express = require('express');
const app = express();
const port =3003;

app.get('/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const result = num1 * num2;
  res.send({ result });
});

app.listen(port, () => {
    console.log(`Multiplication service started on port ${port}`);
});