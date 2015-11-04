function Node(value) {
  this.value = value;
  this.next = null;
}

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);
var e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
// e.next = a;

function containsCycle(nodeHead) {
  var nextArray = [];
  var next = nodeHead.next;
  while(next) {
    if (nextArray.indexOf(next) !== -1) {
      console.log(nextArray);
      return true;
    } else {
      nextArray.push(next);
      next = next.next;
    }
  }
  console.log(nextArray);
  return false;
}

console.log(containsCycle(a));
