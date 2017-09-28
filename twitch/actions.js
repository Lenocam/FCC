$(document).ready(function() {
  var baseUrl = "https://wind-bow.gomix.me/twitch-api/";
  var users = "users/";
  var user = "freecodecamp";

  var url = baseUrl + users + user;

  console.log(url);

  $.ajax({
    url: url,
    dataType: "jsonp",
    type: "GET",
    success: function(data) {
      var userNameLink = baseUrl + users + data.display_name
      console.log(data);
      console.log(userNameLink);

      console.log(data.display_name);
      // console.log(data._links.self);
      // $("#output").prepend("<div class=well><a href=" + data[links][self] + "><h2>" + data[name] + "</h2></a>" + "<p>" + data[bio] + "</p></div>");
      $("#output").prepend("<div><a href=" + userNameLink + "><h2>" + data.display_name + "</h2></a><p>" + data.bio + "</p></div>")
    }
  });



});
