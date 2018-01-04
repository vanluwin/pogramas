module.exports.noticias = (app, req, res) => {

    const connection = app.config.db();
    const noticias = new app.app.models.Noticias(connection);

    noticias.getNoticias((error, result) => {

        res.render("noticias/noticias", {
            noticias: result
        });

    });
};

module.exports.noticia = (app, req, res) => {
    const connection = app.config.db();
    const noticias = new app.app.models.Noticias(connection);

    noticias.getNoticia((error, result) => {
        res.render("noticias/noticia", {
            noticia: result
        });
    });

};