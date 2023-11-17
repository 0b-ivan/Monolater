const express = require('express')
const app = express()

let port = 3005;


app.get('/:base/:pot', (req, res) => {
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
    console.log(`Power service started on port ${port}`);
});