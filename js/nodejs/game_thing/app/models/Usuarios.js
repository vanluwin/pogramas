function Usuarios(connection) {

    this._connection = connection();

    this.insertUser = (user) => {

        this._connection.open((err, mongoClient) => {
            mongoClient.collection("usuarios", (err, collection) => {
                collection.insert(user);

                mongoClient.close();
            });
        });


    }

    this.autenticar = (user, req, res) => {
        this._connection.open((err, mongoClient) => {
            mongoClient.collection("usuarios", (err, collection) => {
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
                                param: 'auth',
                                msg: 'usuário e ousenha inválidos',
                                value: ''
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