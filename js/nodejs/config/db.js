const mysql = require('mysql');

const dbCon = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'toor',
        database: 'portal_noticias'
    });
};

module.exports = () => {
    return dbCon;
};