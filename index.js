//NA-nae 
const express = require('express');
const app = express();
const port = 3000;

// Endpoint "Hola mundo"
app.get('/', (req, res) => {
    res.send('Hola mundo');
});

// Endpoint "Hola <nombre>"
app.get('/saludo/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.send(`Hola ${nombre}`);
});

app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});
