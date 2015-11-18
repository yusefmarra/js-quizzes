// function csvParse(str) {
//     var arr = str.split(',');
//     return arr.reduce(function(out, curr) {
//         curr.trim().charAt(0) === '"' ? out.push(curr.replace(/"/g,'').trim()) : out.push(+curr);
//         return out;
//     }, [])
// }

function csvParse(str) {
    var arr = [];
    var i = 0;
    while (str.lastIndexOf(',') != -1) {
        arr.unshift(str.slice(str.lastIndexOf(',')));
        str = str.slice(0,str.lastIndexOf(','));
    }
    arr.unshift(str);
    arr = arr.map(function(el) {
        el = el.replace(/[,]/g,'').trim();
        return el.charAt(0) == '"' ? el.replace(/"/g, '') : +el
    })
    return arr;
}

// function csvParse(str) {
//     return JSON.parse('[' + str + ']');
// }

var input = '1, "one", 2, "two", 3, "three"';

console.log(csvParse(input));

module.exports = csvParse;
