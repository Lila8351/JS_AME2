const express = require('express')
const app = express()
const port = 3000
const crypto = require('crypto')
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Front
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/index.html'))

})

// API
produtos = [
    {nome: "Notebook", preco: 1000, id : "fc8a37e7-d61a-4e6d-a650-55f1fc5ec75c"},
    {nome: "Cadeira", preco: 200, id : "55392dff-e348-4cc4-a9ef-84a4f4738200"}
]

app.get('/produtos', (req, res) => {
    res.send(produtos)
})
app.get('/produtos/:id', (req, res) => {
    produto = produtos.find(produto => produto.id === req.params.id)
    res.send(produto)
})

app.post('/produtos',(req,res)=>{
  produtoN = ({nome : req.body.nome, preco : req.body.preco, id : crypto.randomUUID()})
  produtos.push(produtoN)
    res.send(produtoN)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})