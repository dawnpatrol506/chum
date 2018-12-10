const express = require('express');
const router = express.Router();
const axios = require('axios');
const key = 'AIzaSyCSJ9MMKwY5oOH0dOVOjnnAYm7myU0RT0Y';
const firebase = require('firebase');
const admin = require('firebase-admin');

admin.initializeApp();
const db = firebase.firestore();

router.post('/on', (req, res) => {
    const lat = req.body.lat;
    const lon = req.body.lon;
    const uid = req.body.uid;
    console.log('UID', uid);
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${key}`)
        .then(data => {
            const address_components = data.data.results[0].address_components;
            let zip = '';
            address_components.forEach(component => {
                if (component.types.includes('postal_code')) {
                    zip = component.long_name;
                }
            })
            db.collection('userGroups').doc(zip).collection('chums').doc(uid).set({
                lat,
                lon,
                zip
            })

            res.json({ zip });
        })
})

router.post('/off', (req, res) => {
    const zip = req.body.zip;
    const uid = req.body.uid;
    const userGroupRef = db.collection('userGroups').doc(zip).collection('chums').doc(uid);
    userGroupRef.delete();
    res.json({ msg: 'success' })
})

router.post('/chums', (req, res) => {
    const zip = req.body.zip;
    const uid = req.body.uid;
    const chumsRef = db.collection('userGroups').doc(zip).collection('chums');
    chumsRef.get()
        .then(chums => {
            if (chums.empty) {
                console.log('NO CHUMS!');
            }
            else {
                const chumArr = [];
                chums.forEach(chum => {
                    console.log(chum.data());
                    chumArr.push(chum.data());
                })
            }
            res.json({chumArr});
        })
})

module.exports = router;