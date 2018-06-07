var words = ["ground", "control", "to", "major", "tom"];

var x = map(words, function(word) {
  return word.length;
});


var y = map(words, function(word) {
  return word.toUpperCase();
});


var z = map(words, function(word) {
  return word.split('').reverse().join('');
});


function map (anArray, aFunction){
  var newArray = [];
    for (element of anArray) {
      newArray.push(aFunction(element));
    }
  return newArray;
}

console.log(x);
console.log(y);
console.log(z);