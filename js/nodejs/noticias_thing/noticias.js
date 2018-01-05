const http = require('http');

const server = http.createServer( (req, res) => {

    let categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body><h1>Notícias de Tecnologia</h1></body></html>");
    }else if(categoria == '/moda'){
        res.end("<html><body><h1>Notícias de Moda</h1></body></html>");
    }else if(categoria == '/beleza'){
        res.end("<html><body><h1>Notícias de Beleza</h1></body></html>");
    }else {
        res.end("<html><body><h1>Portal de notícias</h1></body></html>");
    }

}).listen(4000);

console.log('Server started');


