module.exports.home = function(application, req, res){
	if (req.session.autorizado !== true) {
        res.send('Autenticação é necessaria');
        return;
    }
	res.render('home/padrao');
}