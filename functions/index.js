const functions = require('firebase-functions');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.post('/api/v1/login', (req, res) => {
    console.log('BODY', req.body);
    res.json({success: 'success'});
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