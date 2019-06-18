var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('res.aaa')
    console.log(res.aaa)
    res.send(res.aaa)
});

module.exports = router;
