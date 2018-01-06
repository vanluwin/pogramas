// Importando modulos 
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidador = require('express-validator');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views')

// Configurar os muddlewares
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidador());

// Atuto load das rotas, models e controllers para o objeto app
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

// Exportar o objeto app
module.exports = app;
