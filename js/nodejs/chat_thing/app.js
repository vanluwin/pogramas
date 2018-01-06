// importar as configurações do servidor 
const app = require('./config/server');

// Parametrizar a porta de escuta
const server = app.listen(3000, () => {
    console.log("Serven ON");
    
});

const io = require('socket.io').listen(server);

app.set('io', io);

// Criar a conexão por websocket
io.on('connection', (socket) => {

    console.log('User loged in');
    
    socket.on('disconnect', () => {
        console.log('User loged out');
    });

    socket.on('msgToServer', (data) => {
        // Eventos de dialogo
        socket.emit(
            'msgToClient',
            {apelido: data.apelido, mensagem: data.mensagem}
        );

        socket.broadcast.emit(
            'msgToClient',
            {apelido: data.apelido, mensagem: data.mensagem}
        );

        // Particiapantes 
        if(!parseInt(data.apelido_att)){
            socket.emit(
                'addUser',
                {apelido: data.apelido}
            );
    
            socket.broadcast.emit(
                'addUser',
                {apelido: data.apelido}
            );
        }
    });

});