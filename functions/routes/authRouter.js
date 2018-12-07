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
const auth = firebase.auth();
const db = firebase.firestore();

router.post('/google', (req, res) => {
    console.log('User', req.body.user);
    res.json({ success: true });
})

router.post('/email', (req, res) => {
    auth.signInWithEmailAndPassword(req.body.email, req.body.password)
        .then(user => {
            console.log(user);
        })
        .catch(err => {
            console.log('ERROR', err);
            switch (err.code){
                case 'auth/user-not-found':
                    msg = 'User not found';
                    break;
                case 'auth/invalid-email':
                    msg = 'Invalid E-mail format';
                    break;
                case 'auth/wrong-password':
                    msg = 'Wrong password';
                    break;
                default:
                    msg = 'An Error occurred';
                    break;
            }
            
            res.json({error: msg});
        })
})

router.post('/signup', (req, res) => {
    let user = req.body;
    auth.createUserAndRetrieveDataWithEmailAndPassword(user.email, user.password)
        .then(user => res.json(user));
})

module.exports = router;
