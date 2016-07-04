'use strict'
$(document).ready(function(){

const $body   = $('body');
const $ul     = $('<ul>');
const $button = $('.search-bikes')

// the button on click will start the ajax function and the title object should use the specific Value to append the location

$button.on('click', function(){
  console.log('button clicked')
const titleObj = {};

    if($('.stationName').val()!== ''){
titleObj['stationName']=$('.status').val()

} if($('.availableBikes').val()!== ''){
titleObj['availableBikes']=$('.availableBikes').val()
}
if($('.availableDocks').val()!== ''){
titleObj['availableDocks']=$('.availableDocks').val()
}

// the ajax is appending the info into the search page

$.ajax({

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
        let $availableDocks=$('<li>').text(bikes.availableDocks);

        $ul.append('stationName',$stationName);
        $ul.append('availableBikes',$availableBikes);
        $ul.append('availableDocks',$availableDocks);

      })
      $div.append($ul);
    }
})
})
})
