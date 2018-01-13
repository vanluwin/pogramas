const mongo = require('mongodb');

const connMongo = () => {

    const db = new mongo.Db(
        'instagram',
        new mongo.Server(
            'localhost', // Endereço do servidor
            27017, // Porta de conexão
            {} // Configurações adicionais 
        ),
        {} // Configurações adicionais 
    );

    return db;

};


module.exports = () => {
    return connMongo;
}