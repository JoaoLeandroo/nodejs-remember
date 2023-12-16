const express = require("express");

const server = express()

// Query params = ?name="NodeJs"
// Route Params = /curso/2
// Request Params = body = { nome: "nodeJs", tipo: "back-end" }

server.get('/params', (req, res) => {

    const nome = req.query.nome

    return res.json({
        curso: `${nome}`
    })
})

server.listen(3000)
