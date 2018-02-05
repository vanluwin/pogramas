const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');

const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);

function getFacts() {
    const ref = firebaseApp.database().ref('facts');
    
    return ref.once('value').then(snap => snap.val());
}


const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300 s-maxage=600');
    
    getFacts().then(facts => {
        res.render('index', { facts });
    });
});

app.get('/json', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300 s-maxage=600');
    
    getFacts().then(facts => {
        res.json(facts);
    });
});

exports.app = functions.https.onRequest(app);
