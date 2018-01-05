module.exports.index = (app, req, res) => {

    const connection = app.config.db();

    const noticasModel = new app.app.models.Noticias(connection);

    noticasModel.get5Last( (error, result) => {
        res.render("home/index", {noticias: result});
    });
};