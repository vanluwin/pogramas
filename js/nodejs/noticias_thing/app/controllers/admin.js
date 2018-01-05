module.exports.form_add_not = (app, req, res) => {
    res.render("admin/form_add_noticia", {validacao: {}, noticia: {}});
};

module.exports.salvar_notica = (app, req, res) => {
    const noticia = req.body;

        req.assert('titulo', 'Insira um título').notEmpty();
        req.assert('resumo', 'Insira um resumo').notEmpty();
        req.assert('resumo', 'Resumo deve ter entre 10 e 1000 caracteres').len(10, 100);
        req.assert('autor', 'Insira um autor').notEmpty();
        req.assert('data_noticia', 'Insira uma data').notEmpty();
        req.assert('noticia', 'Insira uma noticia').notEmpty();

        const erros = req.validationErrors();

        if(erros){           
            res.render("admin/form_add_noticia", {validacao: erros, noticia: noticia});
            return;
        }

        const connection = app.config.db();
        const noticias = new app.app.models.Noticias(connection);

        noticias.salvarNoticia(noticia, (error, result) => {
                        
            res.redirect('/noticias');

        });
};