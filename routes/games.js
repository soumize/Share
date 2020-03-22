var express = require('express');
var router = express.Router();
const con = require('../db/connection');

/* GET home page. */
router.get('/', function (req, res, next) {

    let response = {
        success: false,
        data :[]
    }

    con.query('SELECT * FROM games ', function (error, results, fields) {
        if (error){
            throw error;
        } else{
            response.success = true;
            response.data = results;
            res.json(response);
        }
    });
});

router.get('/:id', function (req, res, next) {

    let id = req.params.id;
    con.query('SELECT * FROM games WHERE games.category = ?',[id], function (error, results, fields) {
        if (error){
            throw error;
        } else{
            res.json(results);
        }
    });
});

router.get('/category/:id', function (req, res, next) {

    let id = req.params.id;
    con.query('SELECT * FROM games WHERE games.id = ?',[id], function (error, results, fields) {
        if (error){
            throw error;
        } else{
            res.json(results);
        }
    });
});

module.exports = router;