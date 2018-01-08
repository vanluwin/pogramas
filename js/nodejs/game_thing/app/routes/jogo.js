module.exports = function(application){
	application.get('/jogo', (req, res) => {
		application.app.controllers.jogo.game(application, req, res);
	});
}