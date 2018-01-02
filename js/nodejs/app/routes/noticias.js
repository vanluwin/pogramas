module.exports = (app) => {

    app.get('/noticias', (req, res) => {

        const connection = app.config.db();
        const noticias = new app.app.models.Noticias(connection);

        noticias.getNoticias((error, result) => {

            res.render("noticias/noticias", {noticias: result});

        });

    });

};