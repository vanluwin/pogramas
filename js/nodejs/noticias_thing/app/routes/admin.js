module.exports = (app) => {

    app.get('/form_add_noticia', (req, res) => {
        //Utilizando o controller
        app.app.controllers.admin.form_add_not(app, req, res);
    });

    app.post('/noticia/salvar', (req, res) => {
        
        app.app.controllers.admin.salvar_notica(app, req, res);

    });
    

};