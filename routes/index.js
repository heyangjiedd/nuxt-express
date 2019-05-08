var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/blog'
/* GET home page. */
router.get('/', function (req, res, next) {
    MongoClient.connect(url, function (err, client) {
        if (err) throw err
        var db = client.db('blog')
        db.collection('user').find().toArray(function (err, result) {
            if (err) throw err
            res.send(result);
            // db.close();
        })
    })
});
router.post('/add', function (req, res, next) {
    MongoClient.connect(url, function (err, client) {
        if (err) throw err
        var db = client.db('blog')
        console.log(req.body)
        db.collection('user').insertOne(req.body)
    })
});
module.exports = router;
