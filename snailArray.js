var arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]];
var arr2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
var arr3 = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20], []];

// function snail(array) {
//   var newArr = [];
//   array[0].forEach(function(element) {
//     newArr.push(element);
//   });
//   array.shift();
//   array.forEach(function(nestArr) {
//     newArr.push(nestArr.pop());
//   });
//   var temp = array.pop();
//   while(temp.length) {
//     newArr.push(temp.pop());
//   }
//   temp = [];
//   array.forEach(function(element) {
//     temp.push(element.shift());
//   });
//   temp.reverse();
//   temp.forEach(function(element) {
//     newArr.push(element);
//   });
//   array[0].forEach(function(element) {
//     newArr.push(element);
//   });
//   array.shift();
//   array[0].reverse();
//   while (array[0].length) {
//     newArr.push(array[0].pop());
//   }
//   console.log(array);
//   return newArr;
// }

function superSnail(array) {
  var snailed = [];
  while (array.length) {
    var topTemp = top(array);
    if (topTemp) {
      topTemp.forEach(function(element) {
        snailed.push(element);
      });
    }
    var outsideTemp = outside(array);
    if (outsideTemp) {
      outsideTemp.forEach(function(element) {
        snailed.push(element);
      });
    }
    var bottomTemp = bottom(array);
    if (bottomTemp) {
      bottomTemp.forEach(function(element) {
        snailed.push(element);
      });
    }
    var insideTemp = inside(array);
    if (insideTemp) {
      insideTemp.forEach(function(element) {
        snailed.push(element);
      });
    }
  }
  return snailed;
}

function top(array) {
  if (array.length) {
    var toprow = array.shift();
    return toprow;
  }
}

function outside(array) {
  if (array.length) {
    var outside = [];
    array.forEach(function(row) {
      outside.push(row.pop());
    });
    return outside;
  }
}

function bottom(array) {
  if (array.length) {
    return array.pop().reverse();
  }
}

function inside(array) {
  if (array.length) {
    var inside = [];
    array.forEach(function(row){
      inside.push(row.shift());
    });
    return inside.reverse();
  }
}

function mathSnail(array) {
  var square = array[0].length-1;
  var counter = 1;
  var max = square*square;
  var maxTemp = max;
  var snailed = [];
  while(maxTemp){
    console.log(counter);
    if (counter <= square) {
      snailed.push(counter);
      if (counter === square) {
        counter += square;
      } else {
        counter++;
      }
    }
    if (counter > square && counter < max) {
      counter += square;
      snailed.push(counter);
    }
    if (counter > (square*2)) {
      snailed.push(counter--);
    }
    maxTemp--;
  }
  return snailed;
}


// console.log(mathSnail(arr2));
// console.log(superSnail(arr));
// console.log(superSnail(arr2));
// console.log(superSnail(arr3));
