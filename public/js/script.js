'use strict'
$(document).ready(function(){

const $body   = $('body');
const $ul     = $('<ul>');
const $button = $('.search-bikes')

$button.on('click', function(){
const titleObj = {};

    if($('.stationName').val()!== ''){
titleObj['stationName']=$('.status').val()

} if($('.availableBikes').val()!== ''){
titleObj['availableBikes']=$('.availableBikes').val()
}


$.ajax({

  // https://feeds.citibikenyc.com/stations/stations.json
  url:'/api/bikeData',
  method: 'GET',
  dataType: 'json',
  data: {stationName:$('.stationName').val() },
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
