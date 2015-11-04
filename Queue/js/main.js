function Stack() {
  var stack = [];
  this.length = stack.length;
  this.push = function(thing) {
    stack.push(thing);
    this.length++;
  };
  this.pop = function() {
    this.length--;
    return stack.pop();
  };
}

function Queue() {
  var stack1 = new Stack();
  var stack2 = new Stack();
  this.queue = function(thing) {
    stack1.push(thing);
  };

  this.deQueue = function() {
    while (stack1.length) {
      stack2.push(stack1.pop());
    }
    var toReturn = stack2.pop();

    // Re-order the stack.
    while (stack2.length) {
      stack1.push(stack2.pop());
    }

    return toReturn;
  };
}
