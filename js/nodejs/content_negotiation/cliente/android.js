const http = require('http');

const opcoes = {
    hostname: 'localhost',
    port: 8000,
    path: '/',
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
}

/*
// Content-type: x-www-form-urlencoded
const html = 'nome=Richard';
const json = {nome: 'Richard'};
const string_json = JSON.stringify(json);
*/

let buffer_corpo_response = [];

const req = http.request(opcoes, (res) => {

    res.on('data', (pedaco) => {
        buffer_corpo_response.push(pedaco)
    });

    res.on('end', () => {
        const corpo_response = Buffer.concat(buffer_corpo_response).toString();
        console.log(corpo_response);
        console.log(res.statusCode);
    });

    res.on('error', () =>{

    });

});

//req.write(string_json);

req.end();