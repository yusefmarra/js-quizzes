function reverseWords(str) {
  str = str.split('');
  temp = [];
  while (str.length >= str.slice(0,str.indexOf(' ')).length) {
    if (str.lastIndexOf(' ') !== -1) {
      temp.push(str.splice(str.lastIndexOf(' ')).splice(1));
    } else {
      break;
    }
  }
  console.log(str);
  temp.push(str);
  str = temp.join(' ');
  return str.replace(/,/g, '');
}

function reverseWordsTwo(str) {
  str = str.split('');

  while (str.indexOf(' ') !== -1) {
    // str.unshift(str.splice(str.lastIndexOf(' ')).splice(1));
    str.unshift(str.splice(str.lastIndexOf(' ')).splice(1));
  }
  // for (var i = 0; i < str.length; i++) {
  //   if (typeof str[i] === "object"){
  //     str[i].unshift(str.splice(0, i));
  //     break;
  //   }
  // }
  return str;    //.join().replace(/,/g, '');
}

str = 'find you will pain only go you recordings security the into if';


// console.log(str.split(''));
// console.log(str.split('').slice(0,str.indexOf(' ')))

// console.log(cheatingReverseWords(str));

console.log(reverseWords(str));
console.log(reverseWordsTwo(str));
