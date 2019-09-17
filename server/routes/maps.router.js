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
    let dataObject=req.body
    googleMapsClient.geocode({address: req.body.address})
    .asPromise()
    .then((response) => {
        res.send(response.json.results);
        
        const coordinates=response.json.results[0].geometry.location

        dataObject.lat=coordinates.lat;
        dataObject.lng=coordinates.lng;
        dataObject.address=response.json.results[0].formatted_address;
        console.log(dataObject)
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

module.exports = router;