$(document).ready(function(){
  $('#demo-carousel').carousel();
});

$(document).ready(function(){
  $('.modal').modal();
});
$(document).ready(function() {
  // M.updateTextFields();
});
var location = "kansas city"
var queryURL = "https://api.unsplash.com/search/photos/?query=" + location + "&client_id=i7KYwCxnXSHUsg4lg9I2IhYYldXRCQIeeu-epexrwtA"

$.ajax ({
  url: queryURL,
  method: 'GET',
}).then(function (res) {
  console.log('res :>> ', res)
});