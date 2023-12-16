const express = require('express')

const server = express()

server.get('/ola', (req, res) => {
    return res.send({
        teste: "sucesso",
        name: "joao"
    })
})

server.listen(3000)