//Business End
var toBoop = function(x) {
  var blip = x.toString();
  var beep = Array.from(blip);

  if (x % 3 === 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that.";
  } else {
    for (var i = 0; i < beep.length; i++) {
    if (beep[i] === "1") {
        beep = "Boop!";
        return beep;
    } else if (beep[i] === "0") {
        beep = "Beep!";
        return beep;
    };
    };//end of for loop

    var newArray = [];
    var superArray = [];
    for (var range = 0; range <= x; range++) {
      newArray.push(range);
      var newArray2 = superArray.concat(newArray);
      beep = newArray2.concat(superArray);
    } return beep;
  }//end of big Else
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
    $(".card").show();
    $("#result").append(finalAnswer);
  }; //end of else statement
}); //end of .submit function
}); //end of docready.function
