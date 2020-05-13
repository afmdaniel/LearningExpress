const express = require('express');
const app = express();

const greeting = require('./middlewares/greetings')

app.use(greeting('Daniel'))

app.use((req,res,next) => {
    console.log('Antes...')
    next()
})

app.get('/client/report', (req, res) => {
    res.send(`Cliente relatório:${ req.query.completo === 'true'? ` Entregue! Ano ${req.query.ano}`: ' Pendente' }`)
})

app.get('/client/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.post('/body', (req, res) => {
    let body = ''
    req.on('data', function(piece) {
        body += piece
    })

    req.on('end', function() {
        res.send(body)
    })
})

app.get('/', (req, res, next) => { 
    console.log('Durante...')
    res.json([
        {id: 7, name: 'Ana', position: 1},
        {id: 34, name: 'Bia', position: 2},
        {id: 73, name: 'Carlos', position: 3}
    ])
    next()
})

app.use((req, res) => {
    console.log('Depois...')
})

app.listen(3000, () => {
    console.log('Learning app listening on port 3000!')
})