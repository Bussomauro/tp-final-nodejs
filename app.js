const express = require('express');
const app = express();
const deckRoutes = require('./src/routes/deckRoutes.js');
const PORT = 3000;


app.use(express.static('public'));

app.use('/', deckRoutes);

app.listen(PORT, () => { 
    console.log('servidor corriendo en: http://localhost:'+ PORT); 
});
