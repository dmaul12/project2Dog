const router = require('express').Router();
const bikeDB = require('../models/bikeDB')
const request = require('request');

router.get('/',function(req,res) {
  res.render('searchBikes/searchBikes');

});

// router.get('/search', function(req,res){
//   res.json(bikeDB)
// })

// router.get('/search', bikeDB.searchStations, function(req,res) {
//  res.json(res.filteredBikes)
// });

router.get('/bikeSearch', function (req,res) {
  request('https://feeds.citibikenyc.com/stations/stations.json', function (error, response, body){
    if (error) throw error;
    // let data = JSON.parse(body);
    // let results = data.results;
    //console.log(body);
    // res.send(body);
    res.render('searchBikes/searchBikes',{data:body})
    // ejs res.render

    // res.status('searchBikes/searchBikes').send({data:response})
  });

});



module.exports = router;

