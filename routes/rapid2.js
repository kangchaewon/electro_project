var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('rapid2', { title: 'Express' });
});

module.exports = router;