const express = require('express');
const app = express();
const port =3004;

app.get('/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    console.log(`receive: num1:${req.params.num1}; num2${req.params.num2}`)
    let result = ""
    result = num1 / num2;
    res.send({ result });
});

app.listen(port, () => {
  console.log(`Division service started on port ${port}`);
});