var express = require('express');
var router = express.Router();
const con = require('../db/connection');

/* GET home page. */
router.get('/:id', function (req, res, next) {

    let response = {
        success: false,
        data :[]
    }

    let id = req.params.id;

    con.query('SELECT comments.comment FROM comments WHERE comments.game_id = ? ',[id], function (error, results, fields) {
        if (error){
            throw error;
        } else{
            response.success = true;
            response.data = results;
            res.json(response);
        }
    });
});

router.post('/', function (req, res, next) {

    let response = {
        success: false
    }

    console.log(req.body);

    con.query('INSERT INTO comments(comment, game_id) VALUES (?,?) ',[req.body.value,req.body.gameid], function (error, results, fields) {
        if (error){
            throw error;
        } else{
            response.success = true;
            res.json(results);
        }
    });
});

module.exports = router;