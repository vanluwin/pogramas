const ObjectID = require('mongodb').ObjectID;

function Jogo(connection) {

    this._connection = connection();

    this.generateParms = (user) => {
        this._connection.open((err, mongoClient) => {
            mongoClient.collection("jogo", (err, collection) => {

                collection.insert({
                    user: user,
                    moedas: 20,
                    suditos: 10,
                    temor: Math.floor(Math.random() * 1000),
                    sabedoria: Math.floor(Math.random() * 1000),
                    comercio: Math.floor(Math.random() * 1000),
                    magia: Math.floor(Math.random() * 1000)
                });

                mongoClient.close();
            });
        });
    }

    this.startGame = (user, casa, msg, res) => {
        this._connection.open((err, mongoClient) => {
            mongoClient.collection("jogo", (err, collection) => {
                collection.find({
                    user: user
                }).toArray((err, result) => {

                    res.render('jogo', {
                        img_casa: casa,
                        jogo: result[0],
                        msg: msg
                    });

                });
                mongoClient.close();
            });
        });
    }

    this.acao = (acao) => {

        this._connection.open((err, mongoClient) => {
            mongoClient.collection("acao", (err, collection) => {

                const date = new Date();

                let termino = null;
                switch (parseInt(acao.acao)) {
                    case 1:
                        termino = 1 * 60 * 60000;
                        break;
                    case 2:
                        termino = 2 * 60 * 60000;
                        break;
                    case 3:
                        termino = 5 * 60 * 60000;
                        break;
                    case 4:
                        termino = 5 * 60 * 60000;
                        break;

                }

                acao.acao_termino = date.getTime() + termino;

                collection.insert(acao);
            });

            mongoClient.collection("jogo", (err, collection) => {

                let custo = null;
                switch (parseInt(acao.acao)) {
                    case 1:
                        custo = -2 * acao.quantidade;
                        break;
                    case 2:
                        custo = -3 * acao.quantidade;
                        break;
                    case 3:
                        custo = -1 * acao.quantidade;
                        break;
                    case 4:
                        custo = -1 * acao.quantidade;
                        break;

                }

                collection.update(
                    {user: acao.user},
                    {$inc: {moedas: custo}}
                );

                mongoClient.close();
            });
        });

    }

    this.getActions = (res, user) => {
        this._connection.open((err, mongoClient) => {
            mongoClient.collection("acao", (err, collection) => {

                const date = new Date();
                const momento_autal = date.getTime();

                collection.find({
                    user: user,
                    acao_termino: {
                        $gt: momento_autal
                    }
                }).toArray((err, result) => {

                    res.render('pergaminhos', {
                        acoes: result
                    });

                });
                mongoClient.close();
            });
        });
    }

    this.revogar_acao = (_id, res) =>{
        this._connection.open((err, mongoClient) => {
            mongoClient.collection("acao", (err, collection) => {
                collection.remove(
                    {_id: ObjectID(_id)},
                    (err, result) => {
                        res.redirect('jogo?msg=D');
                        mongoClient.close();
                    }
                );                
            });
        });   
    }

}


module.exports = () => {
    return Jogo;
}