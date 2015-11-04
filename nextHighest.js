//Find Next Higher Number With Same Digits: Write a
//function that takes an integer and returns the next
//higher number that uses only the digits in that
//number. For example - 1345 => 1354. Hint: Write tests first!

function stupidNextHighest(num) {
    var arr = num.toString().split('');

    if (arr.length === 1) {
        return "No results."
    }
    if (arr.length === 2 && arr[0] >= arr[1]) {
        return "No results."
    }
    while (true) {
        num++;
        // console.log(num);
        var temp = num.toString().split('');
        if (arr.length != temp.length) {
            return "No results."
        }
        if (matchingDigits(temp, arr)) {
            return temp.join('');
        }
    }
}

function matchingDigits(temp, arr) {
    var arr = arr.slice();
    var temp = temp.slice();
    for (var i = 0; i < temp.length; i++) {
        if (arr.indexOf(temp[i]) === -1) {
            return false;
        } else {
            arr.splice(arr.indexOf(temp[i]),1);
        }
    }
    return true;
}

function nextHighest(num) {
    num = String(num).split('');
    var arr = [];
    num.forEach(function(el) {
        arr.push(+el);
    });
    num = +num.join('');

    for (var i = arr.length-1; i>=0; i--) {
        for (var j = arr.length-2; j >= 1; j--) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            if (+arr.join('') > num) {
                return +arr.join('');
            }
        }
    }
    return "No results."
}

var number = 4321;
console.log(nextHighest(number));
console.log(stupidNextHighest(number))

module.exports = nextHighest;
