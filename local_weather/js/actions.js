$(document).ready(function() {
  getLocation();
  //variables to print to screen
  var html = "";
  var city = "";
  var timeToScreen = "";

  //variables used in javascript
  var date = new Date();
  var hours = date.getHours();
  var dayOrNight = "AM";
  if (hours > 12) {
    hours -= 12;
    dayOrNight = "PM";
  }
  var minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  var metricFormat = "&units=metric";
  var imperialFormat = "&units=imperial"
  var currentFormat = imperialFormat;

  //openweathermap api key
  var localWeatherKey = "&APPID=09a82f5d502a21a066b9f607f9aafd04";

  //openweathermap api url
  var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?";
  //var apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
  //press button and retrieve longitude & latitude
  $("#getLocation").on("click", function() {
    getLocation();
  });

  function getLocation() {
    var currentLon = "&lon=";
    var currentLat = "lat=";
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(loc) {
        //set currentLon & currentLat
        currentLon += loc.coords.longitude;
        currentLat += loc.coords.latitude;
        //fucntions called built on longitude and latitude location
        buildApi(currentLon, currentLat);
        //drawCoords(currentLon, currentLat);
      });
    } else {
      alert("You're lost and we can't find you.");
    }
  };
  //adds the currentLon and currentLat to the apiUrl
  function buildApi(currentLon, currentLat) {
    console.log(currentFormat);
    console.log(apiUrl);
    apiUrl += currentLat +  currentLon + currentFormat +  localWeatherKey;
    loadJSON(apiUrl)
  }
  //gets data from JSON
  function loadJSON(apiUrl) {
    $.getJSON(apiUrl, function(data) {
      currentWeather = data;
      $.when(currentWeather).done(function() {
        actGlobally();
      });
    });
  }
  $("#cmn-toggle").on("click", function() {
    if ($("#cmn-toggle").is(':checked')) {
      console.log('c');
      dataReset();
      getLocation(currentFormat = metricFormat);
    } else {
      console.log("f");
      dataReset();
      getLocation(currentFormat = imperialFormat);
    }
  })

  function drawCoords(currentLat, currentLon) {
    //print long and lat to screen
    html += "Latitude: " + currentLat;
    html += "<br>Longitude: " + currentLon;
    $(".demo").html(html);

  }
  function actGlobally() {
    console.log(apiUrl);
    console.log(currentWeather);
    //console.log(currentWeather.clouds);
    console.log(currentWeather.list[0].main.temp);
    console.log(currentWeather.city.name);
    currentTemp = currentWeather.list[0].main.temp;
    timeToScreen += hours + ":" + minutes + " " + dayOrNight;
    city += currentWeather.city.name;
    //$(".demo").html(html);
    $("#city").html(city);
    $("#time").html(timeToScreen);
    $("#temp h1").html(currentTemp);
  }



  /*
    $("#actGlobally").on("click", function() {

    })

  */
  function dataReset() {
    apiUrl = "https://api.openweathermap.org/data/2.5/forecast?";
    timeToScreen = "";
    city = "";
  }



});
