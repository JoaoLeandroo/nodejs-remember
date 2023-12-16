const express = require('express');

const server = express();

server.get('/rota2', (req, res) => {
    return res.send({
        teste: "testing..."
    })
})

server.listen(3001)