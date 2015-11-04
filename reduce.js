function reducer(arr) {
    return arr.reduce(function(obj, curr, index, array) {
        if (index === array.length - 1) {
            obj[curr] = array[0];
        } else {
            obj[curr] = array[index+1];
        }
        return obj;
    },{});
}

console.log(reducer([11,20,89,1131]));
