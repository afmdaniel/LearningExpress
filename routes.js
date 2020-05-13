const { Router } = require('express');

const greeting = require('./middlewares/greetings')

const router = Router();

router.use(greeting('Daniel'))

router.use((req, res, next) => {
    console.log('Antes...')
    next()
})

router.get('/client/report', (req, res) => {
    res.send(`Cliente relatório:${req.query.completo === 'true' ? ` Entregue! Ano ${req.query.ano}` : ' Pendente'}`);
})

router.get('/client/:id', (req, res, next) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

router.post('/body', (req, res) => {
    res.send(req.body)
})

router.get('/', (req, res, next) => {
    console.log('Durante...')
    res.json([
        { id: 7, name: 'Ana', position: 1 },
        { id: 34, name: 'Bia', position: 2 },
        { id: 73, name: 'Carlos', position: 3 }
    ])
    next()
})

router.use((req, res) => {
    console.log('Depois...')
})

module.exports = router;