const functions = require('firebase-functions');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
//const cors = require('cors');

//app.use(cors());

app.get('/api/v1/test', (req, res) => {
    res.jsonp({thing: 'Hey there!'});
})

app.get('**', (req, res) => {
    res.send('An error occurred!');
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:8080`);
})

module.exports = {
    app: functions.https.onRequest(app);
}