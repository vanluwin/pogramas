function Noticias(connection){

    this._connection = connection;

    this.getNoticias = (callback) => {
       
        this._connection.query('select * from noticias order by data_criacao desc', callback);

    };

    this.getNoticia = (id_noticia, callback) => {

        this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback);
        
    };

    this.salvarNoticia = (noticia, callback) => {
        
        this._connection.query('insert into noticias set ?', noticia, callback);

    };

    this.get5Last = (callback) => {
        this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
    };
}

module.exports = () => {
    return Noticias;
};