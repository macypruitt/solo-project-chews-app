const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');


const googleMapsClient = require('@google/maps').createClient({
    key: process.env.GOOGLE_MAPS,
    Promise: Promise
})

router.post('/', (req, res) => {
    console.log(req.body)
    googleMapsClient.geocode({address: req.body.address})
    .asPromise()
    .then((response) => {
        console.log(response.json.results);
        res.send(response.json.results);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

module.exports = router;