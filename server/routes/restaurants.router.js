const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

////GET LIST OF APPROVED RESTAURANTS
router.get('/', (req, res) => {
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


/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;