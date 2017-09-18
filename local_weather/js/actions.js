$(document).ready(function() {
  getLocation();
  //variables to print to screen
  var html = "";
  var city = "";
  var timeToScreen = "";
  var currentCondition = "";
  var weatherIcon = "";
  var humidity = "";
  var windSpeed = "";
  var speedFormat = " mph";

  var originalIconUrl ="http://openweathermap.org/img/w/";
  var iconUrl = originalIconUrl;

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
  //var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?";
  var originalApiUrl = "https://api.openweathermap.org/data/2.5/weather?";
  var apiUrl = originalApiUrl;
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
  //Flips currentFormat to change scale used to measure
  $("#cmn-toggle").on("click", function() {
    if ($("#cmn-toggle").is(':checked')) {
      console.log('c');

      dataReset();
      speedFormat = " mps";
      getLocation(currentFormat = metricFormat);
    } else {
      console.log("f");
      dataReset();
      speedFormat = " mph";
      getLocation(currentFormat = imperialFormat);
    }
  })

  function drawCoords(currentLat, currentLon) {
    //print long and lat to screen
    html += "Latitude: " + currentLat;
    html += "<br>Longitude: " + currentLon;
    $(".demo").html(html);

  }
  //collected data pushed to visible
  function actGlobally() {

    currentTemp = currentWeather.main.temp;
    timeToScreen += hours + ":" + minutes + " " + dayOrNight;
    city += currentWeather.name;
    currentCondition += currentWeather.weather[0].main;
    humidity += currentWeather.main.humidity + "%";
    windSpeed += currentWeather.wind.speed +speedFormat;
    $(".demo").html(html);
    $("#city").html(city);
    $("#time").html(timeToScreen);
    $("#temp h1").html(currentTemp);
    $("#condition").html(currentCondition)
    $(".humidity").html(humidity);
    $(".windSpeed").html(windSpeed);
    //console.log(currentWeather);
    //console.log(currentWeather.weather[0].main);
    console.log(currentWeather.clouds.all);
    // console.log(currentWeather.sys.sunrise);
    // console.log(currentWeather.sys.sunset);
    // console.log(currentWeather.wind.deg);
    weatherIcon = currentWeather.weather[0].icon;
    iconUrl += weatherIcon + ".png";
    $("#fire img").attr("src", iconUrl);
  }


  //resets data url and visible data when changed between F and C
  function dataReset() {
    apiUrl = originalApiUrl;
    timeToScreen = "";
    city = "";
    currentCondition = "";
    iconUrl = originalIconUrl;
    humidity = "";
    windSpeed = "";
    speedFormat = "";
  }



});
