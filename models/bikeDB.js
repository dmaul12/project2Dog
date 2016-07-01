const request = require('request');

module.exports ={

searchBikes: function(req,res,next){

    const filterObj = {};
  if('stationName' in req.query){
    filterObj['stationName']= new RegExp('^' + req.query.stationName, 'i');
  }
  if('availableBikes' in req.query){
    filterObj['availableBikes']= new RegExp('^' + req.query.availableBikes, 'i');
  }

  console.log(req.query.stationName)

request({
    url:'https://feeds.citibikenyc.com/stations/stations.json',
    method:'get',
    qs:
      filterObj
    ,
    json:true
  },(err,result,body)=>{
    if (err) throw err;

    /// this is where I should run filter function and assign a variable
    // to the res.filterbike = body.variable
    console.log(result);
    // res.send(result)
    res.filterbike = body.stationBeanList

    next()
  })

}
}


