const express = require('express')
const saudacao = require('./saudacaoMid')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(saudacao('Matheus'))

app.use((req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Relatorio do Cliente \nCompleto: ${req.query.completo}, Ano: ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    
    // req.on('data', function(parte){
    //     corpo += parte
    // })

    // req.on('end', function(){
    //     res.send(corpo)
    // })   
    
    res.send(req.body)
})


app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado`)
})

app.get('/opa', (req, res, next) => {
    res.json([
        { id: 7, nome: 'Ana', position: 1 },
        { id: 34, nome: 'Bia', position: 2 },
        { id: 73, nome: 'Carlos', position: 3 }
    ])

    // res.json({
    //     nome: 'iPad 32GB',
    //     price: 1899.00,
    //     discount: 0.12
    // })


    //res.send('<h1>Estou Bem!!</h1> <br><br><h2>Tipo é HTML</h2>')

    next()
})

app.use((req, res) => {
    console.log('Depois...')
})

app.listen(3000, () => {
    console.log('backend executando...')
})