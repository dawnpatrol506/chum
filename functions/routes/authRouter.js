const express = require('express');
const router = express.Router();
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
const db = firebase.firestore();

router.post('/google', (req, res) => {
    console.log('User', req.body.user);
    res.json({success: true});
})

router.post('/email', (req, res) => {

})

router.post('/signup', (req, res) => {

})

module.exports = router;



// app.post('/api/v1/login', (req, res) => {
//     auth.createUserWithEmailAndPassword(req.body.email, req.body.password)
//         .then(user => res.json(user));
// })
