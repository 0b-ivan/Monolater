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
app.get('/exp/:base/:pot', (req, res) => {
    const base = parseFloat(req.params.base);
    const pot = parseInt(req.params.pot);
    console.log(`received: Number1:${req.params.base}; Number2:${req.params.pot}` )
    let result = "";

    if (isNaN(req.params.base) || isNaN(req.params.pot) ) {
        console.log('Ivalid DataTyp in Request')
        res.send('<h1>Ivalid DataTyp</h1>' )
    }
    else {
        result = base ** pot
    }
    if (base ===  0){
        console.log('Jede Potenz zu Basis Null ist immer Null')
        result = 0
    }
    if (base ===  1){
        console.log('Jede Potenz zu Basis Eins ist immer Eins')
        result = 1
    }
    console.log(`es wurden folgende Zahlen potenziert: mit der Basis: `+base+' und der Potenz: '+pot)
    res.send({
        "Base":base,
        "Potenz":pot,
        "Ergebniss":result})
});
/*Service*/
app.listen(port, () => {
    console.log(`Monolater service started on port ${port}`);
});