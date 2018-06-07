// Callback Exercise
function findWaldo(arrayOfNames, found) {
  for (i = 0; i < arrayOfNames.length; i++) {
    if (name === "Waldo") {
      found();
    }
  }
}


function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



//Array ForEach Exercise

function findWaldo(arrayOfNames, found) {
  arrayOfNames.forEach(function(name, index) {
    if (name === "Waldo") {
      found(index);
    }
  });
}


function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);