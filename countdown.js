var countdownGenerator = function (x) {

var currentCount = x+1;

  return function() {
    currentCount -= 1;
    if (currentCount > 0) {
      console.log("T-minus " + currentCount + "...")
    } else if (currentCount === 0){
      console.log("Blast Off!");
    } else {
      console.log("Rockets already gone, bub!");

    }

  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!