function bracketTester(string) {
  string = stripComments(string);
  var bracketArray = [];
  for (var i = 0; i < string.length; i++) {
    // console.log(string.charAt(i))
    var char = string.charAt(i);
    // console.log(bracketArray);
    switch (char) {
      case "{":
        // console.log('what')
        bracketArray.push(char);
        break;
      case "[":
        bracketArray.push(char);
        break;
      case "(":
        bracketArray.push(char);
        break;
      case "}":
        // console.log(bracketArray[bracketArray.length-1])
        if (bracketArray[bracketArray.length-1] === "{") {
          bracketArray.pop();
        } else {
          return false;
        }
        break;
      case ")":
        if (bracketArray[bracketArray.length-1] === "(") {
          bracketArray.pop();
        } else {
          return false;
        }
        break;
      case "]":
        if (bracketArray[bracketArray.length-1] === "[") {
          bracketArray.pop();
        } else {
          return false;
        }
        break;
      default:
        break;

    }
  }
  if (bracketArray.length){
    return false;
  }
  return true;
}

function stripComments(string) {
  // var newString = string.replace(/\/\*(.*)\*\//g, '');
  // newString = newString.replace(/\/\/(.*)\\n/g, '');
  var newString = string.replace( /(\/[*][^*]*[*]\/)|(\/\/[^\n]*)/gm, "" );
  return newString;
}
// console.log(bracketTester( "var a = function(){return 'b';}" ));
// console.log(bracketTester( "var a = function(){return 'b';" ));
// console.log(bracketTester( "/*Comment*/var a = function(){ \n // coment again \n return 'b';" ));
// console.log(bracketTester( "var a = function(){return 'b';" ));

console.log(bracketTester( "var a = function(){return 'b';}" ) === true );
console.log(bracketTester( "var a = function(){return 'b';" ) === false );
console.log(bracketTester( "/*Comment*/var a = function(){ \n // coment again \n return 'b';" ) === false );
console.log(bracketTester( "var a = function(){return 'b';" ) === false );
