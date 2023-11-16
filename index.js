const express = require('express')
const app = express()

let port = 3000;

/*Anforderung ist: der Taschenrechner service soll die fähigkeit haben zwei Zahlen Addieren und subtrahieren zu können */

/* ADD */
app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    console.log(`received: Number1:${req.params.num1}; Number2:${req.params.num2}` )
    let result = "";
    if (isNaN(req.params.num1) || isNaN(req.params.num2) ) {
        console.log('Ivalid DataTyp in Request')
        res.send('<h1>Ivalid DataTyp</h1>' )
    }else{
        result = num1 + num2
    }
    res.send({result})
});
/* SUB */
app.get('/sub/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    console.log(`received: Number1:${req.params.num1}; Number2:${req.params.num2}` )
    let result = "";
    if (isNaN(req.params.num1) || isNaN(req.params.num2) ) {
        console.log('Ivalid DataTyp in Request')
        res.send('<h1>Ivalid DataTyp</h1>' )
    }else{
        result = num1 - num2
    }
    res.send({result})
});
/*Service*/
app.listen(port, () => {
    console.log(`Monolater service started on port ${port}`);
});