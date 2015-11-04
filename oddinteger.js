var array = [1,1,1,2,2,3,3,5,5,5,5];

function findOneReduce(arr) {
  var found = {};
  arr.reduce(function(previousValue, currentValue, index, array){

  });
}

function findOdd(arr) {
  var found = {};
  arr.forEach(function(el) {
    found[el] = 0;
  });
  Object.keys(found).forEach(function(key) {
    arr.forEach(function(el) {
      if (el == key) {
        found[el]++;
      }
    });
  });
  for (value in found) {
    if (found[value]%2 !== 0){
      return value;
    }
  }
  return found;
}

console.log(findOdd(array));
