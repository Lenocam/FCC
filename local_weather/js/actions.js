$(document).ready(function() {
  var html = "";
  //openweathermap api key
  var localWeatherKey = "09a82f5d502a21a066b9f607f9aafd04";
  //openweathermap api url

  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
  //press button and retrieve longitude & latitude
  //$("#getLocation").on("click", function() {
  getLocation();

  function getLocation() {
    var currentLon;
    var currentLat;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(loc) {
        //set currentLon & currentLat
        currentLon = loc.coords.longitude;
        currentLat = loc.coords.latitude;
        //fucntions called built on longitude and latitude location
        buildApi(currentLon, currentLat);
        drawCoords(currentLon, currentLat);
      });
    } else {
      alert("You're lost and we can't find you.");
    }
  };
  //adds the currentLon and currentLat to the apiUrl
  function buildApi(currentLon, currentLat) {
    apiUrl += "lat=" + currentLat + "&lon=" + currentLon + "&APPID=" + localWeatherKey;
    loadJSON(apiUrl);
  }
  //gets data from JSON
  function loadJSON(apiUrl) {
    $.getJSON(apiUrl, function(data) {
      //console.log(data);
      currentWeather = data;
      $.when(currentWeather).done(function() {
        actGlobally();
      });
    });
  }

  function drawCoords(currentLat, currentLon) {
    //print long and lat to screen
    html += "Latitude: " + currentLat;
    html += "<br>Longitude: " + currentLon;
    $(".demo").html(html);

  }
  function actGlobally() {
    console.log(currentWeather);
    console.log(currentWeather.clouds);
    html += "<br><p>clouds: " + currentWeather.clouds.all + "</p>";
    $(".demo").html(html);
  }




  $("#actGlobally").on("click", function() {

  })


});
