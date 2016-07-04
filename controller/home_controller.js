const router = require('express').Router();

// router.get('/',function(req,res) {
//   res.render('home/home');
// });

router.get('/', function(req,res) {
  res.render('home/home',{user: req.session.user});
});

module.exports = router;
