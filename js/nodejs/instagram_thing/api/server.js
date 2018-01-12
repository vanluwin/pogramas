const express = require('express'),
      bodyParser = require('body-parser'),
      mongodb = require('mongodb');

const app = express();

//body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(8080, () => {
    console.log('Server ON');
})

