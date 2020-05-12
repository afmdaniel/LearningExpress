const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // res.send('<h1>Posso passar HTML</h1>')
    
    // res.json({
    //     name: 'iPad',
    //     price: 1899.00,
    //     discount: 0.12
    // })
    
    res.json([
        {id: 7, name: 'Ana', position: 1},
        {id: 34, name: 'Bia', position: 2},
        {id: 73, name: 'Carlos', position: 3}
    ])
})

app.listen(3000, () => {
    console.log('Learning app listening on port 3000!')
})