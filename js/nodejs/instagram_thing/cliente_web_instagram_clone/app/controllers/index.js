module.exports.index = function(application, req, res){
	res.render('index/padrao',  {validacao: {}});
}

module.exports.autenticar = (application, req, res) => {
    const dados = req.body;

    req.assert('usuario', 'Insira um usuario').notEmpty();
    req.assert('senha', 'Insira uma senha').notEmpty();

    const erros = req.validationErrors();

    if(erros){
        res.render('index/padrao', {validacao: erros})
        return;
    }

    const connection = application.config.db;
    const usuario = new application.app.models.Usuarios(connection);

    usuario.autenticar(dados, req, res);

}
