const express = require('express')
const bodyParser = require('body-parser')
const database = require('./database')
const port = 3000

const app = express()
app.use(bodyParser.json())

app.get('/compras', (req, res) => {
    database.query('SELECT * FROM produtos').then((resultado) => {
        res.status(200).send({ produtos: resultado.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
})

app.post('/cadastrar-compra', (req, res) => {
    const novoProduto = req.body
    const query = 'INSERT INTO produtos(descricao, preco) VALUES ($1, $2)'
    const values = [novoProduto.descricao, novoProduto.preco]

    database.query(query, values).then(() => {
        res.status(200).send({ mensagem: 'Produto inserido!' })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
})

app.get('/valor-total', (req, res) => {
    database.query('SELECT SUM(preco) FROM produtos').then((resultado) => {
        res.status(200).send({ valorTotal: resultado.rows[0].sum })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
})

app.delete('/deletar-compra/:id', (req, res) => {
    const idDoProduto = req.params.id
    const query = 'DELETE FROM produtos WHERE produto_id=$1'
    
    database.query(query, [idDoProduto]).then(() => {
        res.status(200).send({ mensagem: 'Removido com sucesso!' })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
})

app.listen(port, () => {
    console.log('API executando')
})