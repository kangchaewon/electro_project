var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var nickname = req.query.nickname;
  console.log(nickname)
  res.render('location_select', { nickname: nickname });
});

module.exports = router;
