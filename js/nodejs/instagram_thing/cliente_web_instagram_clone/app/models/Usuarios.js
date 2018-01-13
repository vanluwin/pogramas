const crypto = require('crypto');

function Usuarios(connection) {

    this._connection = connection();

    this.insertUser = (usuario) => {

        this._connection.open((err, mongoClient) => {
            mongoClient.collection("usuarios", (err, collection) => {

                usuario.senha = crypto.createHash('md5').update(usuario.senha).digest('hex'); 
                
                collection.insert(usuario);

                mongoClient.close();
            });
        });
    }

    this.autenticar = (usuario, req, res) => {
        this._connection.open((err, mongoClient) => {
            mongoClient.collection("usuarios", (err, collection) => {
                
                usuario.senha = crypto.createHash('md5').update(usuario.senha).digest('hex'); 
                
                collection.find(usuario).toArray((err, result) => {

                    if (result[0]) {
                        req.session.autorizado = true;

                        req.session.usuario = result[0].user;
                    }

                    if (req.session.autorizado) {
                        res.redirect('/home');
                    } else {
                        res.render('index/padrao', {
                            validacao: [{
                                msg: 'usuário e ou senha inválidos'
                            }]
                        });
                    }

                });
                mongoClient.close();
            });
        });
    }
}

module.exports = () => {
    return Usuarios;
}