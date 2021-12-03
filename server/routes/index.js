var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/book', function(req, res, next) {
  console.log("Book:" + req.body.name);
});

router.get('/api/book', function(req, res, next) {
  console.log("Helo");
});

module.exports = router;
