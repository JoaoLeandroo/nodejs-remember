const express = require('express')

const server = express()

// localhost/3000/curso/2
server.get('/route_params/:id', (req, res) => {
    const id = req.params.id

    return res.json({
        id_curso: `${id}`
    })
})

server.listen(3000)