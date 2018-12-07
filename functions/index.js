const functions = require('firebase-functions');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const firebase = require('firebase');
var config = {
    apiKey: "AIzaSyA_jxtJEs6tK8IddeWE33shq1oTV2CYppc",
    authDomain: "szia-e86a9.firebaseapp.com",
    databaseURL: "https://szia-e86a9.firebaseio.com",
    projectId: "szia-e86a9",
    storageBucket: "szia-e86a9.appspot.com",
    messagingSenderId: "110429429267"
};
firebase.initializeApp(config);
const auth = firebase.auth();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post('/api/v1/login', (req, res) => {
    auth.createUserWithEmailAndPassword(req.body.email, req.body.password)
        .then(user => res.json(user));
})

app.get('*', (req, res) => {
    res.send('An error occurred!');
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})

module.exports = {
    app: functions.https.onRequest(app)
}