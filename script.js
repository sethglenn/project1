$(document).ready(function () {
  $("#demo-carousel").carousel();
  $(".test").carousel();
  $(".modal").modal();


  //PIC API

  function addModalImg(location){


  
  //var location = "london";
  var queryPic =
    "https://api.unsplash.com/search/photos/?query=" +
    location +
    "&client_id=i7KYwCxnXSHUsg4lg9I2IhYYldXRCQIeeu-epexrwtA"; 
    console.log(queryPic)  

  $.ajax({
    url: queryPic,
    method: "GET",
  }).then(function (res) {
    console.log("res :>> ", res)
    $(".carousel-item").empty();
//  PIC 1 ****************
    var d1 = $("<div>");
    d1.attr("class","carousel test");

     for(var i = 0; i < res.results.length; i++){
    var a = $("<a>");
     if(i===0){
      a.attr("class","carousel-item active");

    }
    a.attr("class","carousel-item");
    a.attr("href","#"+(i+1)+"!");
    a.attr("style","display:block")

    var img = $("<img>");
    img.attr("src", res.results[1].urls.small+".png");

    a.append(img);
 
     d1.append(a);
     }
     $(".ex1").append(d1);

     //  PIC 2 ****************
    var d2 = $("<div>");
    d2.attr("class","carousel test");

     for(var i = 0; i < res.results.length; i++){
    var a = $("<a>");
     if(i===0){
      a.attr("class","carousel-item active");

    }
    a.attr("class","carousel-item");
    a.attr("href","#"+(i+1)+"!");
    a.attr("style","display:block")

    var img = $("<img>");
    img.attr("src", res.results[2].urls.small+".png");

    a.append(img);
 
     d2.append(a);
     }
     $(".ex2").append(d2);

     //  PIC 3 ****************
    var d3 = $("<div>");
    d3.attr("class","carousel test");

     for(var i = 0; i < res.results.length; i++){
    var a = $("<a>");
     if(i===0){
      a.attr("class","carousel-item active");

    }
    a.attr("class","carousel-item");
    a.attr("href","#"+(i+1)+"!");
    a.attr("style","display:block")

    var img = $("<img>");
    img.attr("src", res.results[3].urls.small+".png");

    a.append(img);
 
     d3.append(a);
     }
     $(".ex3").append(d3);

     //  PIC 4 ****************
    var d4 = $("<div>");
    d4.attr("class","carousel test");

     for(var i = 0; i < res.results.length; i++){
    var a = $("<a>");
     if(i===0){
      a.attr("class","carousel-item active");

    }
    a.attr("class","carousel-item");
    a.attr("href","#"+(i+1)+"!");
    a.attr("style","display:block")

    var img = $("<img>");
    img.attr("src", res.results[4].urls.small+".png");

    a.append(img);
 
     d4.append(a);
     }
     $(".ex4").append(d4);

     //  PIC 5 ****************
    var d5 = $("<div>");
    d5.attr("class","carousel test");

     for(var i = 0; i < res.results.length; i++){
    var a = $("<a>");
     if(i===0){
      a.attr("class","carousel-item active");

    }
    a.attr("class","carousel-item");
    a.attr("href","#"+(i+1)+"!");
    a.attr("style","display:block")

    var img = $("<img>");
    img.attr("src", res.results[5].urls.small+".png");

    a.append(img);
 
     d5.append(a);
     }
     $(".ex5").append(d5);

  });
}

  // API information


  function displayTripInfo() {

    var city = $("#citySearch").val().trim();
    var queryURL =
      "https://public-api.blablacar.com/api/v2/trips?key=NGAGPgif8Qr9SQYIMftZVh64jQTSMcpG&fn=" +
      city;
    // Ajax call
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);

      var cityName = $("<h1>").html("City Name: " + city);

      var date = $("<p>").html("Departure date: " + response.trips[0].departure_date);

      var currency = $("<p>").html("Currency Type: " + response.lowest_price_object.currency);


      var price = $("<p>").html("Price of Trip: " + response.trips[0].price.value);

      $(".flightInfo").append(cityName, date, currency, price);



      var stor = ["City Name: " + city,
      "Departure date: " + response.trips[0].departure_date,
      "Currency Type: " + response.lowest_price_object.currency,
      "Price of Trip: " + response.trips[0].price.value,
      ];

      localStorage.setItem("citySearch2", JSON.stringify(stor));

      // var object = localStorage.getItem(JSON.parse("trip"));

      // document.getElementsByClassName("flightInfo").textContent = object;







    });
  }


  // localStorage.setItem("citySearch", location);

  // document.getElementsByClassName("flightInfo").innerHTML = localStorage.getItem("citySearch");

  // event handler to return API information
  window.onload = function () {

    var object = JSON.parse(localStorage.getItem("citySearch2"));

    document.getElementById("cityClass").innerText = object[0];
    document.getElementById("dateClass").innerText = object[1];
    document.getElementById("currencyClass").innerText = object[2];
    document.getElementById("priceClass").innerText = object[3];

  }


  $(".search").on("click", function (event) {
    event.preventDefault();

    var city = $("#citySearch").val().trim();
    addModalImg(city);


    $(".flightInfo").empty();
    displayTripInfo(city);
    console.log(city);
  });
});
