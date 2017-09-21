$(document).ready(function() {

  $("#searchButton").on("click", function() {
    var formValue = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=" + formValue;
    console.log(formValue);

    $.ajax({
      url: url,

      dataType: "json",
      data: {
        origin: "*"
      },
      type: "GET",
      success: function(data) {

        //console.log(data);
        $("#output").html(data);
      }
    });

  });
});
