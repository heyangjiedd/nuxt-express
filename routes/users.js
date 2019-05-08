var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send([1,1,1,1,1]);
});

module.exports = router;
