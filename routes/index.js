var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('User:', req.session.user)
  res.render('index', { title: 'Express' });
});

module.exports = router;
