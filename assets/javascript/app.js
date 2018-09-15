// Trivia game 

var number = 30;

var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {

    number--;

    $("#timer").text(number);

    if (number === 0) {
      stop();
      alert("Time Up!");
    }
  }

function stop() {
    clearInterval(intervalId);
    // var selValue = $('input[name=rbnNumber]:checked').val(); 
    // console.log($('input[name=nba]:checked').val()); 
    // console.log(selValue);
    if ($('input[name=nba]:checked').val() == 6) {
        $("#nba-results").append("<b>Correct</b>");
    } else {
        $("#nba-results").append("<b>Incorrect</b>");
    };

    if ($('input[name=david]:checked').val() == 49) {
        $("#david-results").append("<b>Correct</b>");
    } else {
        $("#david-results").append("<b>Incorrect</b>");
    };

    if ($('input[name=gaslamp]:checked').val() == 92101) {
        $("#gaslamp-results").append("<b>Correct</b>");
    } else {
        $("#gaslamp-results").append("<b>Incorrect</b>");
    };

}

run();

