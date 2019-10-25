const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');


const googleMapsClient = require('@google/maps').createClient({
    key: process.env.REACT_APP_GOOGLE_MAPS,
    Promise: Promise
})
////Sends object to Google Maps API, gets lattitude, longitude, and full address, then submits to database
router.post('/', (req, res) => {
    console.log(req.body);
    let dataObject=req.body;
    googleMapsClient.geocode({address: req.body.address})
    .asPromise()
    .then((response) => {
        const coordinates=response.json.results[0].geometry.location
            dataObject.lat=coordinates.lat;
            dataObject.lng=coordinates.lng;
        dataObject.address=response.json.results[0].formatted_address;
        
        const queryText = `INSERT INTO "restaurants" 
        ("name","address","description","keto","gluten_free","vegan","approved","lat","lng")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`;

        pool.query (queryText, [dataObject.name, 
                                dataObject.address, 
                                dataObject.description,
                                dataObject.keto,
                                dataObject.gluten_free,
                                dataObject.vegan,
                                dataObject.approved,
                                dataObject.lat,
                                dataObject.lng])
            .then((result) => {
                res.sendStatus(200);
            })
            .catch((err) => {
                console.log('Error updating database: ', err);
                res.sendStatus(500);
            });
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

module.exports = router;