$(document).ready(function(){
  $('#demo-carousel').carousel();
});

$(document).ready(function(){
  $('.modal').modal();
});
$(document).ready(function() {
  M.updateTextFields();
});
// API information


function displayTripInfo(){

  // var city = $(this).attr("data-name");
  var city = $("#citySearch").val().trim();
  var queryURL = "https://public-api.blablacar.com/api/v2/trips?key=NGAGPgif8Qr9SQYIMftZVh64jQTSMcpG&fn=" + city
    // Ajax call
    $.ajax({
    url: queryURL,
    method: "GET"
    
    }).then(function(response) {
      console.log(response);

      var cityName = $("<h1>").html("City Name: " + city);
      var date = $("<p>").html("Departure date: " + response.trips[0].departure_date);
      var currency = $("<p>").html("Currency Type: " + response.lowest_price_object.currency);
      var price = $("<p>").html("Price of Trip: " + response.trips[0].price.value);



      $(".flightInfo").append(cityName, date, currency, price);


    })
  
  }




// event handler to return API information
$(".search").on("click", function(event){
  event.preventDefault();

  var city = $("#citySearch").val().trim();

  $(".flightInfo").empty();
  displayTripInfo(city);
  console.log(city);

})