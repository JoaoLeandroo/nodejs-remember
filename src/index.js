// Estou buscando tudo que o express tem
const express = require('express');

const server = express();

// localhost:3000/curso
server.get('/curso', (req, res) => {
    return res.send(
        {
            dados: [
                {name: "Joao", age: 25},
                {name: "Leticia", age: 33},
                {name: "Carla", age: 19},
                {name: "Lucas", age: 45},
                {name: "Rayne", age: 22},
                {name: "Ruan", age: 15},
                {name: "Caio", age: 60}
            ]
        }
    )
})

server.listen(3000)