//Business End
var toBoop = function(integer) {

}




//Front End
$(document).ready(function() {
  $("form#numbersubmit").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#numnum").val());
    if (isNaN(userInput)) {
      alert("please enter valid number");
    };
    console.log(userInput)
    var blip = userInput.toString();
    console.log(blip);
    var beep = blip.split();
    console.log(beep)
    // var beep = toBoot(userInput);
    $("#result").append(userInput);
  });
});
