module.exports = function(application){
	application.get('/', (req, res) => {
		application.app.controllers.index.home(application, req, res);
	});

	application.post('/autenticar', (req, res) => {
		application.app.controllers.index.autenticar(application, req, res);
	});
}