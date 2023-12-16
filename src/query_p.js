const express = require('express')

const server = express()


// passar o parametro pela url localhost/3000/teste?nome=teste
server.get('/teste', (req, res) => {
    const nome = req.query.nome

    return res.json({
        dados: [
            {testando: `${nome}`}
        ]
    })

})

server.listen(3000)