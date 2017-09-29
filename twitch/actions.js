$(document).ready(function() {
  var twitchArray = [
    "ESL_SC2",
    "syndicate",
    "cretetion",
    "freecodecamp",
    "summit1g",
    "habathcx",
    "riotgames",
    "noobs2ninjas",
    "esl_csgo",
    "sodapoppin",
    "lirik"
  ];
  var baseUrl = "https://wind-bow.gomix.me/twitch-api/";
  var users = "users/";
  var streams = "streams/"
  var user = "";
  var streamUrl = baseUrl + streams;
  var userUrl = baseUrl + users;
  var userLinkSetUp = "https://go.twitch.tv/";
  for (var i = 0; i < twitchArray.length; i++) {
    user = twitchArray[i];
    streamingUser(user);
  }

  function streamingUser(name) {
    $.ajax({
      url: streamUrl + name,
      dataType: "jsonp",
      type: "GET",
      success: function(data) {
        if (data.stream === null) {
          ifItsNull(name);
        } else {
          $("#output").prepend("<div class='well'><img src="+ data.stream.channel.logo +"><a href=" + data.stream.channel.url + "><h2>" + data.stream.channel.display_name + "</h2></a>" + "<p>" + data.stream.game + "</p></div>");
          // console.log(data);
        }

      }
    });
  }


  function ifItsNull(name) {
    $.ajax({
      url: userUrl + name,
      dataType: "jsonp",
      type: "GET",
      success: function(data) {
        $("#output").append("<div class='well'><img src="+ data.logo +"><a href="+ userLinkSetUp + name + "><h2>" + data.display_name + "</h2></a><p>offline...</p></div>");
        console.log(data);
      }

    });

  }


});

// USAGE:
// Replace the Twitch API base URL https://api.twitch.tv/kraken with https://wind-bow.gomix.me/twitch-api. Use this endpoint according to the Twitch API documentation.
//
// NOTE:
// This server caches data to lower the request rate. To prevent abuses this server accepts GET requests only, and serves only routes /users/:user, /channels/:channel, and /streams/:stream. These are more than enough to complete the challenge.
//
//
