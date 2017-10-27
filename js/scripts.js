//Front End
$(document).ready(function() {
  $("form#numbersubmit").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#numnum").val());
    // var beep = toBoop(userInput);
    $("#result").append(userInput)
  });
});
