module.exports.startChat = (app, req, res) => {

    const user = req.body;

    req.assert('apelido', "Insira um nome de usuario").notEmpty();    
    req.assert('apelido', 'Nome de usuario deve possuir entre 3 e 15 caracteres').len(3, 15);

    const erros = req.validationErrors();

    if(erros){
        res.render("index", {validacao: erros});
        return;
    }
    
    // Recuperando o objeto io para emitir uma mensagem
    app.get('io').emit('msgToClient', {apelido: user.apelido, mensagem: 'just joined the chat'});

    res.render("chat", {user: user});
    
};