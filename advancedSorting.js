var numArray = [10, 2, 5, 1, 9];
numArray.sort(function(a, b) {return a - b});

//console.log(numArray);
/*This was the mini problem before the main problem!
*/


var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function SortTheNames(anyArray) {
  anyArray.sort(function(a, b) {
    if (a.name < b.name){
      return -1;
    } if (a.name > b.name) {
      return 1;
    } else {
      return b.age - a.age;
    }
  });
}


console.log(SortTheNames(students))
console.log(students);