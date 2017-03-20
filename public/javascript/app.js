var $visitedBars
var $nonVisitedBar
var $form
var $searchTerm
var yelpInfo

//
// var yelp = new Yelp ({
//   app_id: process.env.YELP_ID,
//   app_secret: process.env.YELP_SECRET
// })
//



$(document).ready(function(){
  $visitedBars = $('#visitedBars')
  $nonVisitedBar = $('nonVisitedBar')
  $searchButton = $('#search-button')


  $searchButton.on('click', function(e) {
    e.preventDefault()
    $searchTerm = $('#searchTerm').val()
    console.log($searchTerm)
    $.ajax({
      url: '/search?term=' + $searchTerm,
      method: 'get'
    })
      .done(function (data) {
        yelpInfo = data
        console.log(data)
      })

  })




})
