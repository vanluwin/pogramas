const crypto = require('crypto');

function Usuarios(connection) {

    this._connection = connection();

    this.insertUser = (user) => {

        this._connection.open((err, mongoClient) => {
            mongoClient.collection("usuarios", (err, collection) => {

                user.pass = crypto.createHash('md5').update(user.pass).digest('hex'); 
                
                collection.insert(user);

                mongoClient.close();
            });
        });


    }

    this.autenticar = (user, req, res) => {
        this._connection.open((err, mongoClient) => {
            mongoClient.collection("usuarios", (err, collection) => {
                
                user.pass = crypto.createHash('md5').update(user.pass).digest('hex'); 

                collection.find(user).toArray((err, result) => {

                    if (result[0]) {
                        req.session.autorizado = true;

                        req.session.usuario = result[0].user;
                        req.session.casa = result[0].casa;
                    }

                    if (req.session.autorizado) {
                        res.redirect('jogo');
                    } else {
                        res.render('index', {
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
};

module.exports = () => {
    return Usuarios;
}