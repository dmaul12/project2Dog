const router = require('express').Router();
const bikeDB = require('../models/bikeDB')
// const request = require('request');

router.get('/',bikeDB.searchBikes, function(req,res) {
  res.render('searchBikes/bikes',{user: req.session.user});

});


// router.get('/', bikeDB.searchStations, function(req,res) {
//  res.render(res.filteredBikes)
// });

// router.get('/bikeSearch', function (req,res) {
//   request('https://feeds.citibikenyc.com/stations/stations.json', function (error, response, body){
//     if (error) throw error;

    // res.render('searchBikes/searchBikes',


    // res.status('searchBikes/searchBikes').send({data:response})
//   });

// });



module.exports = router;

