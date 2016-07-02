'use strict'
$(document).ready(function(){

const $body   = $('body');
const $ul     = $('<ul>');
const $button = $('.search-bikes')

$button.on('click', function(){
  console.log('button clicked')
const titleObj = {};

// let $station = $('.stationName').val();
// let $bikes = $('.availableBikes').val();

    if($('.stationName').val()!== ''){
titleObj['stationName']=$('.status').val()

} if($('.availableBikes').val()!== ''){
titleObj['availableBikes']=$('.availableBikes').val()
}

// if($station) titleObj.stationName = $station
// if($bikes) titleObj.availableBikes = $bikes
//   console.log(titleObj, 'title Object')


//{stationName:$('.stationName').val() }

$.ajax({

  // https://feeds.citibikenyc.com/stations/stations.json
  url:'/api/bikeData',
  method: 'GET',
  dataType: 'json',
  data: titleObj,
  success: function(data) {
    let $div= $('.list')
    $ul.empty();

      data.forEach(function(bikes) {
        let $stationName = $('<li>').text(bikes.stationName);
        let $availableBikes=$('<li>').text(bikes.availableBikes);

        $ul.append('stationName',$stationName);
        $ul.append('availableBikes',$availableBikes);



      })
      $div.append($ul);
    }
})
})
})
