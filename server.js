const express = require('express');
const hbs = require('hbs');

/* Settings */
const app = express();
app.set('port', process.env.PORT || 4000);

/* Para que funcionen los helpers HBS*/
require('./helpersHbs/helpers');

app.use(express.static(__dirname + '/public/'));

// Express Hbs Engine template
hbs.registerPartials(__dirname + '/views/parciales/');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: "Daniel Fernando",
        // anio: new Date().getFullYear() helper
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        // anio: new Date().getFullYear() helper
    });
});

app.listen(app.get('port'), () => {
    console.log(`Escuchando Peticiones por el puerto ${app.get('port')}`);
});