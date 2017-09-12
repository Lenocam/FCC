$(document).ready(function() {
  var localWeatherKey = "09a82f5d502a21a066b9f607f9aafd04";
  $("#getLocation").on("click", function() {
    var html = "";
    navigator.geolocation.getCurrentPosition(function(data) {
      html += "Latitude: " + data.coords.latitude;
      html += "<br>Longitude: " + data.coords.longitude;
      $(".demo").html(html);
    });



  })

});
