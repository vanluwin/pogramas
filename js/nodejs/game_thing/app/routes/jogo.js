module.exports = function(application){
	application.get('/jogo', (req, res) => {
		application.app.controllers.jogo.game(application, req, res);
	});

	application.get('/sair', (req, res) => {
		application.app.controllers.jogo.exit(application, req, res);
	});

	application.get('/suditos', (req, res) => {
		application.app.controllers.jogo.suditos(application, req, res);
	});

	application.get('/pergaminhos', (req, res) => {
		application.app.controllers.jogo.pergaminhos(application, req, res);
	});

	application.post('/ordernar_acao', (req, res) => {
		application.app.controllers.jogo.ordernar_acao(application, req, res);
	});

	application.get('/revogar_acao', (req, res) => {
		application.app.controllers.jogo.revogar_acao(application, req, res);
	});
}