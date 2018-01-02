const app = require('express')();

const consign = require('consign')();

const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));

//inclusão das rotas e conexão com o db
consign.include('app/routes')
    .then('config/db.js')
    .then('app/models')
    .into(app);

module.exports = app;