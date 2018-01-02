module.exports = (app) => {

    app.get('/noticia', (req, res) => {

        const connection = app.config.db();
        const noticias = new app.app.models.Noticias(connection);

        noticias.getNoticia( (error, result) => {
            res.render("noticias/noticia", {noticia: result});
        });
    });
    
};