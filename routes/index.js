let mongoose = require("mongoose");
let express = require('express');
let User = require('../models/user');
let Tests = require('../models/tests');
let router = express.Router();
let url = 'mongodb://localhost:27017/blog'
/* GET home page. */

router.get('/list', function (req, res, next) {
    mongoose.connect(url, function (err) {
        Tests.find(function (err, docs) {
            if (err) {
                console.log('查询出错：' + err);
            } else {
                console.log('{}查询结果为：', docs);
                res.send(docs)
            }
        });
    });
});
router.post('/add', function (req, res, next) {
    let TestEntity = new TestModel({
        name: "helloworld",
        code: 28,
        phone: "helloworld@qq.com",
        loginName: "helloworld@qq.com",
        password: "helloworld@qq.com"
    });
    TestEntity.save(function (error, doc) {
        if (error) {
            console.log("error :" + error);
        } else {
            console.log(doc);
        }
    });
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        // we're connected!
    });
});
module.exports = router;
