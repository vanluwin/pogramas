module.exports.cadastro = (application, req, res) => {

    res.render('cadastro', {validacao: {}, dados: {}});

};

module.exports.cadastrar = (application, req, res) => {

    const dados = req.body;

    req.assert('nome', 'Insira um nome').notEmpty();
    req.assert('user', 'Insira um usuario').notEmpty();
    req.assert('pass', 'Insira uma senha').notEmpty();
    req.assert('casa', 'Selecione uma casa').notEmpty();

    const erros = req.validationErrors();

    if(erros){
        res.render('cadastro', {validacao: erros, dados: dados})
        return;
    }

    const connection = application.config.db;
    const Usuarios = new application.app.models.Usuarios(connection);

    Usuarios.insertUser(dados);

    res.send('Hear me Roar');
}