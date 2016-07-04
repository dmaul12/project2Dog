const request = require('request');

module.exports ={

searchBikes: function(req,res,next){

  let filterObj = {};
  if('stationName' in req.query){
    filterObj['stationName']= new RegExp('^' + req.query.stationName, 'i');
  }
  if('availableBikes' in req.query){
    filterObj['availableBikes']= req.query.availableBikes;
  }
  // if('availableDocks' in req.query){
  //   filterObj['availableDocks']= new RegExp('^' + req.query.availableDocks, 'i');
  // }


  // console.log(req.query.stationName)



request({
    url:'https://feeds.citibikenyc.com/stations/stations.json',
    method:'get',
    qs:filterObj,
    json:true
  },(err,result,body)=>{
    if (err) throw err;

 res.filterbike = body.stationBeanList

    // res.render(result.body.data)

    /// this is where I should run filter function and assign a variable
    // to the res.filterbike = body.variable
    // console.log('this stuff',body.stationBeanList[0].stationName);
    // res.send(result)

    // let filteredList;
    // if('stationName' in req.query) {
    //   filteredList = body.stationBeanList.filter(function(item) {
        //do the filter looking for station name
        // return req.query.stationName == item.stationName
      //   console.log("this is",item.stationName)
      // })
    // } else if ('availableBikes' in req.query) {
    //   filteredList = body.stationBeanList.filter(function(item) {
    //     //do the filter looking for number of bikes
    //     return req.query.availableBikes == item.availableBikes
    //   })
    // }
    // res.filterbike = body.stationBeanList.filter(function(item) {
    //   let ret = false;
    //   if (filterObj['stationName']) {

    //   }
    // })

// console.log("this is the filtered list", item.stationBeanList.stationName)

    next()
  })

}
}


