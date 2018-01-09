module.exports.home = (application, req, res) => {
    res.render('index',  {validacao: {}});
}

module.exports.autenticar = (application, req, res) => {
    const dados = req.body;

    req.assert('user', 'Insira um usuario').notEmpty();
    req.assert('pass', 'Insira uma senha').notEmpty();

    const erros = req.validationErrors();

    if(erros){
        res.render('index', {validacao: erros})
        return;
    }

    const connection = application.config.db;
    const usuario = new application.app.models.Usuarios(connection);

    usuario.autenticar(dados, req, res);

}