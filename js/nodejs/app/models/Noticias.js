function Noticias(connection){

    this._connection = connection;

    this.getNoticias = (callback) => {
       
        this._connection.query('select * from noticias', callback);

    };

    this.getNoticia = (callback) => {

        this._connection.query('select * from noticias where id_noticia = 2', callback);
        
    };

    this.salvarNoticia = (noticia, callback) => {

        this._connection.query('insert into noticias set ?', noticia, callback);

    };
}

module.exports = () => {
    return Noticias;
};