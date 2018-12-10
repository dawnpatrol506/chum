const functions = require('firebase-functions');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

//BODY PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//ROUTES
const authRouter = require('./routes/authRouter');
const locationRouter = require('./routes/locationRouter');

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/location', locationRouter);

//DEFAULTS
app.get('*', (req, res) => {
    res.send('An error occurred!');
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})

module.exports = {
    app: functions.https.onRequest(app)
}