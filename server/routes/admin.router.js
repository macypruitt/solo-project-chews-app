const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.put('/edit', (req, res) => {
        const dataObject = req.body;
        const restaurantId = req.body.id;
        console.log(`req.body contains:`, req.body)
        
        const queryText = `UPDATE "restaurants" SET "name"=$1, "address"=$2, "phone"=$3, "description"=$4, "website"=$5,
                            "keto"=$6, "gluten_free"=$7, "vegan"=$8, "approved"=$9, "lat"=$10, "lng"=$11 WHERE id=$12;`;

    pool.query (queryText, [dataObject.name, 
                            dataObject.address, 
                            dataObject.phone,
                            dataObject.description,
                            dataObject.website,
                            dataObject.keto,
                            dataObject.gluten_free,
                            dataObject.vegan,
                            dataObject.approved,
                            dataObject.lat,
                            dataObject.lng,
                            dataObject.id])
            .then((response) => {
                res.sendStatus(200);
            })
            .catch((err) => {
                console.log('Error updating database: ', err);
                res.sendStatus(500);
            });
    }); 

router.delete('/delete/:id', (req, res) => {
    const queryText = `DELETE FROM "restaurants"
                        WHERE "restaurants".id=$1;`
    const restaurantId = req.params.id;

    pool.query(queryText, [restaurantId])
        .then((response) => {
            res.send(response.rows); 
        })
        .catch((err) => {
            console.log('error deleting restaurant', err);
            res.sendStatus(500);
        });
});

/**
 * POST route template
 */
router.post('/recaptcha', (req, res) => {
    console.log(req.body);
    let dataObject=req.body;
    console.log(dataObject);

    const queryText = `INSERT INTO "restaurants" 
    ("name","address","description","keto","gluten_free","vegan","blk","approved","lat","lng")
    VALUES $1, $2, $3, $4, $5, $6, $7, $8, $9;`;

    pool.query (queryText, [dataObject.name, 
                            dataObject.address, 
                            dataObject.description,
                            dataObject.keto,
                            dataObject.gluten_free,
                            dataObject.vegan,
                            dataObject.blk,
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