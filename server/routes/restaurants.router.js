const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

////GET LIST OF APPROVED RESTAURANTS
router.get('/approved', (req, res) => {
    const queryText = `SELECT * FROM "restaurants" 
                        WHERE "approved"='true';`

    pool.query(queryText)
        .then((response) => {
            res.send(response.rows); 
        })
        .catch((err) => {
            console.log('error SELECTING restaurants', err);
            res.sendStatus(500);
        });
});

////GET LIST OF ALL RESTAURANTS (PENDING AND APPROVED)
router.get('/all', (req, res) => {
    const queryText = `SELECT * FROM "restaurants";`

    pool.query(queryText)
        .then((response) => {
            res.send(response.rows); 
        })
        .catch((err) => {
            console.log('error SELECTING restaurants', err);
            res.sendStatus(500);
        });
});

////GET SINGLE RESTAURANT THAT MATCHES ID
router.get('/single:id', (req, res) => {
    const queryText = `SELECT * FROM "restaurants"
                        WHERE "restaurants".id=$1;`
    const restaurantId = req.params.id;
    console.log(restaurantId);

    pool.query(queryText, [restaurantId])
        .then((response) => {
            res.send(response.rows); 
        })
        .catch((err) => {
            console.log('error SELECTING single restaurant', err);
            res.sendStatus(500);
        });
});




/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log(req.body);
    let dataObject=req.body;
    console.log(dataObject);

    const queryText = `INSERT INTO "restaurants" 
    ("name","address","description","keto","gluten_free","vegan","approved","lat","lng")
    VALUES $1, $2, $3, $4, $5, $6, $7, $8, $9;`;

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
});

module.exports = router;