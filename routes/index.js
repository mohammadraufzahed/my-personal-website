var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: `Mohammad Raufzahed` });
});
// Error handeling
router.use(function(req, res, nex){
  res.status(404);
  res.render('error/404')
});
module.exports = router;
