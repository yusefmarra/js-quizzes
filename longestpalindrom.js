function longestPalindrome(str) {
    var arr = str.split(' ');
    palindromes = findPalindrome(arr);
    return palindromes.reduce(function(prev, next) {
        return prev.length > next.length ? prev : next;
    });
}

function findPalindrome(arr) {
    var found = [];
    arr.forEach(function(el, i) {
        if (el.length > 1) {
            if (el == el.split('').reverse().join('')) {
                if (i != 0 && i != arr.length-1) {
                    var surroundingWords = checkSurroundingWords([arr[i-1],arr[i+1]]);
                    if (surroundingWords.length) {
                        found.push(surroundingWords.split('').reverse().join('')+' '+el+' '+surroundingWords);
                    } else {
                        found.push(el);
                    }
                }
            }
        }
    })
    return found;
}

function checkSurroundingWords(arr) {
    found = [];
    word1 = arr[0].split('').reverse();
    word2 = arr[1].split('');
    word1.forEach(function(letter, i) {
        if (letter == word2[i]) {
            found.push(letter);
        }
    })
    return found.join('');
}

console.log(longestPalindrome('I am a anna adfsrd racecar driver'));
