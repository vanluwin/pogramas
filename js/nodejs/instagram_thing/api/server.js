const express = require('express'),
    bodyParser = require('body-parser'),
    mongodb = require('mongodb'),
    ObjectId = require('mongodb').ObjectId,
    multiParty = require('connect-multiparty'),
    fs = require('fs');

const app = express();

//body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(multiParty());

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

const db = new mongodb.Db(
    'instagram',
    new mongodb.Server('localhost', 27017, {}), {}
);

app.listen(8080, () => {
    console.log('API ready');
})


app.get('/', (req, res) => {
    res.send({
        msg: 'kkkk eae man!'
    })
});

// POST (create)
app.post('/api', (req, res) => {
    const date = new Date(),
        time_stamp = date.getTime(),

        path_origem = req.files.arquivo.path,
        path_destino = './uploads/' + time_stamp + '_' + req.files.arquivo.originalFilename;

    fs.rename(path_origem, path_destino, (err) => {
        if (err) {
            res.status(500).json({
                error: err
            });
            return;
        }
    });

    const dados = {
        url_imagem: time_stamp + '_' + req.files.arquivo.originalFilename,
        titulo: req.body.titulo
    };

    db.open((err, mongoClient) => {
        mongoClient.collection('posts', (err, collection) => {
            collection.insert(dados, (err, records) => {
                if (err) {
                    res.json({
                        status: 'Erro'
                    });
                } else {
                    res.json({
                        status: 'Deu bom'
                    });

                }

                mongoClient.close();
            });
        });
    });

});

// GET (read)
app.get('/api', (req, res) => {

    db.open((err, mongoClient) => {
        mongoClient.collection('posts', (err, collection) => {
            collection.find().toArray((err, results) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(results);
                }
            });

            mongoClient.close();
        });
    });

});

// GET (Images)
app.get('/imagens/:img', (req, res) => {

    const img = req.params.img;

    fs.readFile('./uploads/' + img, (err, content) => {
        if (err) {
            res.status(400).json(err);
            return;
        }

        res.writeHead(200, {
            'content-type': 'image/jpg'
        });
        res.end(content);

    });

});

// GET by ID (read)
app.get('/api/:_id', (req, res) => {
    db.open((err, mongoClient) => {
        mongoClient.collection('posts', (err, collection) => {
            collection.find(ObjectId(req.params._id)).toArray((err, results) => {
                if (err) {
                    res.json(err);
                } else {
                    res.status(200).json(results);
                }
            });

            mongoClient.close();
        });
    });

});

// PUT by ID (update)
app.put('/api/:_id', (req, res) => {

    db.open((err, mongoClient) => {
        mongoClient.collection('posts', (err, collection) => {
            collection.update({
                    _id: ObjectId(req.params._id)
                }, {
                    $push: {
                        comentarios: {
                            id_comentario: new ObjectId(),
                            comentario: req.body.comentario
                        }
                    }
                },
                (err, records) => {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json(records);
                    }
                }
            );

            mongoClient.close();
        });
    });

});

// DELETE by ID (remover)
app.delete('/api/:_id', (req, res) => {

    db.open((err, mongoClient) => {
        mongoClient.collection('posts', (err, collection) => {
            collection.update({
                //qualquer documento
            }, {
                $pull: {
                    comentarios: {
                        id_comentario: ObjectId(req.params._id)
                    }
                }
            }, {
                multi: true
            }, (err, records) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(records);
                }
            });

            mongoClient.close();
        });
    });


});