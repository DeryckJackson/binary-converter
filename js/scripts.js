const binaryConverter = (num) => {
  let numString = ""

  while (num > 0) {
    if (num % 2 === 1) {
      numString = "1" + numString;
      num = Math.floor(num / 2);
    } else {
      numString = "0" + numString;
      num = num / 2
    }
  }
  return numString;
}


$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();

    const number = parseInt($("input#num").val());

    $("#output").text(binaryConverter(number));
  });
});