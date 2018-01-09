module.exports.game = (application, req, res) => {
    if (req.session.autorizado !== true) {
        res.send('Autenticação é necessaria');
        return;
    }

    const msg = req.query.msg ? req.query.msg : 'n';
    
    const user = req.session.usuario;
    const casa = req.session.casa;
    const connection = application.config.db;
    const jogo = new application.app.models.Jogo(connection);

    jogo.startGame(user, casa, msg, res);

}

module.exports.exit = (application, req, res) => {
    req.session.destroy((err) => {
        res.render('index', {
            validacao: {}
        });
    });
}

module.exports.suditos = (application, req, res) => {
    if (req.session.autorizado !== true) {
        res.send('Autenticação é necessaria');
        return;
    }

    res.render('aldeoes', {
        validacao: {}
    });
}

module.exports.pergaminhos = (application, req, res) => {
    if (req.session.autorizado !== true) {
        res.send('Autenticação é necessaria');
        return;
    }

    // Resuperar as ações inseridas no db
    const connection = application.config.db;
    const Jogo = new application.app.models.Jogo(connection);
    const user = req.session.usuario;

    Jogo.getActions(res, user);

}

module.exports.ordernar_acao = (application, req, res) => {
    if (req.session.autorizado !== true) {
        res.send('Autenticação é necessaria');
        return;
    }

    const dados = req.body;

    req.assert('acao', 'Selecione uma ação').notEmpty();
    req.assert('quantidade', 'Informe a quantidade').notEmpty();

    const erros = req.validationErrors();

    if (erros) {
        res.redirect('jogo?msg=A');
        return;
    }

    const connection = application.config.db;
    const Jogo = new application.app.models.Jogo(connection);

    dados.user = req.session.usuario;
    Jogo.acao(dados);

    res.redirect('jogo?msg=B');

}

module.exports.revogar_acao = (application, req, res) => {
    const _id = req.query.id_acao; 
    
    const connection = application.config.db;
    const Jogo = new application.app.models.Jogo(connection);

    Jogo.revogar_acao(_id, res);
    
}