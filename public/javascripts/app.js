$(function () {
  /** Click on Fetch data and display in HTML table **/
  $("#fetchdata").on("click", function () {
    $.get("/fetchdata", function (data) {
      var attendance = data["data"];
      $("#trdata").html("");
      $("#message").hide();
      var string = "";
      $.each(products, function (index, attendance) {
        string +=
          "<tr><td>" +
          (index + 1) +
          "</td><td>" +
          attendance["_id"] +
          "</td><td>" +
          attendance["PantherID"] +
          "</td><td>" +
          attendance["FirstName"] +
          "</td><td>" +
          attendance["LastName"] +
          "</td><td>" +
          attendance["Department"] +
          "</td></tr>";
        attendance["Level"] +
          "</td><td>" +
          attendance["Campus"] +
          "</td><td>" +
          attendance["Degree"] +
          "</td><td>" +
          attendance["Email"] +
          "</td><td>" +
          attendance["College"] +
          "</td></tr>" +
          attendance["Year"] +
          "</td><td>" +
          attendance["Checkin"] +
          "</td><td>";
      });
      $("#trdata").html(string);
    });
  });

  /** Import data after click on a button */
  $("#importdata").on("click", function () {
    $.get("/import", function (data) {
      $("#message").show().html(data["success"]);
    });
  });
});
