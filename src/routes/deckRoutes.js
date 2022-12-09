// llamamos a Express
const express = require('express');
// Invocamos el metodo Router
const router = express.Router();
// Path y fs para trabajar con rutas y archivos
const fs = require('fs');
const path = require('path');

const deck = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/stompy.json')));


router.get('/deck', (req,res) => {
    res.send(JSON.parse(deck));
});

// Exportmos las rutas para que sean leidas en app.js
module.exports = router;