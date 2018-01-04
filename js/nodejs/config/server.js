const app = require('express')();

const consign = require('consign')();

const bodyParser = require('body-parser');

const expressValidator = require('express-validator');

app.set('view engine', 'ejs');

app.set('views', './app/views');

// Midlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

//inclusão das rotas e conexão com o db
consign.include('app/routes')
    .then('config/db.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;