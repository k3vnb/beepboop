//Business End
var toBoop = function(x) {
  var blip = x.toString();
  var beep = Array.from(blip);
  // var beep = blip.split("");
  console.log("beep " + beep)
  if (x % 3 === 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that.";
  } else {
    for (var i = 0; i < beep.length; i++) {
      if (beep[i] === "0") {
        (beep[i] = "beep");
        return beep;
      }
    }
  }
}//end of Business Logic


//Front End
$(document).ready(function() {
  $("form#numbersubmit").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#numnum").val());
      if (isNaN(userInput)) {
        alert("please enter valid number");
      } else {
    var finalAnswer = toBoop(userInput);
    $("#result").append(finalAnswer);
    console.log(finalAnswer);
  }; //end of else statement
}); //end of .submit function
}); //end of docready.function
