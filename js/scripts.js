


$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();

    const number = parseInt($("input#num").val());

    $("#output").text(number)
  });
});