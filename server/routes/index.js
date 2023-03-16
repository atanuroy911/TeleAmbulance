var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/start-trip', (req, res) => {
  res.status(200).json({
    message: 'Received'
  })
})

module.exports = router;
