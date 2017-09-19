$(document).ready(function() {
  getLocation();
  //gloabal variables to print to screen
  var html = "";
  var city = "";
  var timeToScreen = "";
  var currentCondition = "";
  var weatherIcon = "";
  var humidity = "";
  var windSpeed = "";
  var speedFormat = " mph";
  var clouds = "";

  //url to retrieve icons
  var originalIconUrl = "http://openweathermap.org/img/w/";
  var iconUrl = originalIconUrl;

  //retrieves time from browser, formats hours & am/pm
  var date = new Date();
  var hours = date.getHours();
  var dayOrNight = "AM";
  if (hours > 12) {
    hours -= 12;
    dayOrNight = "PM";
  }
  //formats minutes
  var minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  var offset = (date.getTimezoneOffset()) / 60;
  console.log(offset);
  //variables to set unit measurement in api call
  var metricFormat = "&units=metric";
  var imperialFormat = "&units=imperial"
  var currentFormat = imperialFormat;

  //openweathermap api key
  var localWeatherKey = "&APPID=09a82f5d502a21a066b9f607f9aafd04";

  //openweathermap api url
  var originalApiUrl = "https://api.openweathermap.org/data/2.5/weather?";
  var apiUrl = originalApiUrl;

  var sunApiUrl = "https://api.sunrise-sunset.org/json?";
  //automatically called on doc load trieves location
  function getLocation() {
    var currentLon = "";
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

    apiUrl += currentLat + "&lon=" + currentLon + currentFormat + localWeatherKey;
    sunApiUrl += currentLat + "&lng=" + currentLon + "&date=today&";
    //sunApiUrl = "https://api.sunrise-sunset.org/json?lat=40.17&lng=-76.99&date=today";
    loadJSON(apiUrl);
    window.open(sunApiUrl);
    makeTheSun(sunApiUrl);

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
  function makeTheSun(sunApiUrl) {
    console.log(sunApiUrl);
    console.log("inside");
    $.getJSON(sunApiUrl, function(data) {
      console.log("data");
      currentSun = data;
      $.when(currentSun).done(function() {
        actSunny();
      });
    });
  }
  //Flips Fahrenheit and Celcius
  $("#cmn-toggle").on("click", function() {
    if ($("#cmn-toggle").is(':checked')) {
      dataReset();
      speedFormat = " mps";
      getLocation(currentFormat = metricFormat);
    } else {
      dataReset();
      speedFormat = " mph";
      getLocation(currentFormat = imperialFormat);
    }
  })

  //print long and lat to screen. not in use currently
  function drawCoords(currentLat, currentLon) {
    html += "Latitude: " + currentLat;
    html += "<br>Longitude: " + currentLon;
    $(".demo").html(html);
  }

  //collected data pushed to visible
  function actGlobally() {
    //set variables with data to be sent to html
    currentT = currentWeather.main.temp;
    currentTemp = Math.round(currentT * 10) / 10;
    timeToScreen += hours + ":" + minutes + " " + dayOrNight;
    city += currentWeather.name;
    currentCondition += currentWeather.weather[0].main;
    humidity += currentWeather.main.humidity + "%";
    windSpeed += currentWeather.wind.speed + speedFormat;
    clouds += currentWeather.clouds.all + "%";
    weatherIcon = currentWeather.weather[0].icon;
    iconUrl += weatherIcon + ".png";
    console.log(currentWeather);

    //data distributed to html
    //$(".demo").html(html);
    $("#city").html(city);
    $("#time").html(timeToScreen);
    $("#temp h1").html(currentTemp);
    $("#condition").html(currentCondition)
    $(".humidity").html(humidity);
    $(".windSpeed").html(windSpeed);
    $(".clouds").html(clouds);

    $("#wicon img").attr("src", iconUrl);

    //Strips seconds from time
    function prettyDate2(time) {
      var date = new Date(parseInt(time));
      var localeSpecificTime = date.toLocaleTimeString();
      return localeSpecificTime.replace(/:\d+ /, ' ');
    }

    //called in swtich to set background-color
    function setBackgroundColor(color) {
      $("body").css("background-color", color);
    }

    //sets background-color based on weatherIcon
    switch (weatherIcon) {
      case "01d":
        //clear sunny
        setBackgroundColor("#328cc1");
        break;
      case "01n":
        //clear night
        setBackgroundColor("#0b3c5d");
        break;
      case "02d":
        //few clouds day
        setBackgroundColor("#2f496e");
        break;
      case "02n":
        //few clouds night
        setBackgroundColor("2f3131");
        break;
      case "03d":
        //scattered clouds day
        setBackgroundColor("#3498db");
        break;
      case "03n":
        //scattered clouds night
        setBackgroundColor("#1e0000");
        break;
      case "04d":
        //broken clouds day
        setBackgroundColor("#217ca3");
        break;
      case "04n":
        //broken clouds night
        setBackgroundColor("#423134");
        break;
      case "09d":
        //shower rain day
        setBackgroundColor("#8593ae");
        break;
      case "09n":
        //shower rain night
        setBackgroundColor("#5a4e4d");
        break;
      case "10d":
        // rain day
        setBackgroundColor("#9a9eab");
        break;

      case "10n":
        //rain night
        setBackgroundColor("#5d535e");
        break;
      case "11d":
        //thunderstorm day
        setBackgroundColor("#68829e");
        break;
      case "11n":
        //thunderstorm night
        setBackgroundColor("#505160");
        break;
      case "13d":
        //snow day
        setBackgroundColor("#f0efea");
        break;
      case "13n":
        //snow night
        setBackgroundColor("#c0b2b5");
        break;
      case "50d":
        //mist day
        setBackgroundColor("#5b7065");
        break;
      case "50n":
        //mist night
        setBackgroundColor("#304040");
        break;
      default:
        setBackgroundColor("# #3498db");
    }
  }
  function actSunny() {
    console.log("fuck");
    // var utcSunrise = currentSun.sys.sunrise;
    // console.log(utcSunrise);
    // var sunrise = prettyDate2(utcSunrise);
    // $(".sunrise").html(sunrise);
    // var utcSunset = currentSun.sys.sunset;
    // console.log(utcSunset);
    // var sunset = prettyDate2(utcSunset);
    // $(".sunset").html(sunset);
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
    clouds = "";
  }

});
