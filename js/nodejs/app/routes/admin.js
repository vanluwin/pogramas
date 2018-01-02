module.exports = (app) => {

    app.get('/form_add_noticia', (req, res) => {

        res.render("admin/form_add_noticia");

    });

    app.post('/noticia/salvar', (req, res) => {
        const noticia = req.body;

        const connection = app.config.db();
        const noticias = new app.app.models.Noticias(connection);

        noticias.salvarNoticia(noticia, (error, result) => {
                        
            res.redirect('/noticias');

        });

    });
    

};