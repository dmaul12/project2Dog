const router = require('express').Router();

router.get('/',function(req,res) {
  res.render('searchBikes/searchBikes');
});

module.exports = router;
