let mongoose = require("mongoose");
let express = require('express');
let Users = require('../models/users');
let router = express.Router();
let url = 'mongodb://152.136.154.205:27017/blog'

router.get('/list', function (req, res, next) {
    mongoose.connect(url, {useNewUrlParser:true,authSource:'admin'}, function (err) {
        Users.find(function (err, docs) {
            if (err) {
                console.log('查询出错：' + err);
            } else {
                console.log('{}查询结果为：', docs);
                res.send(docs)
            }
        });
    });
});
module.exports = router;
