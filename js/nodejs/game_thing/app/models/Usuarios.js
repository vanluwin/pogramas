function Usuarios(connection) {

    this._connection = connection();

    this.insertUser = (user) => {
        
        this._connection.open( (err, mongoClient) => {
            mongoClient.collection("usuarios", (err, collection) => {
                collection.insert(user);

                mongoClient.close();
            });
        });


    }
}

module.exports = () => {
    return Usuarios;
}