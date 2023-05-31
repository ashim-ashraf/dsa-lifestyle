var top;

class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function isEmpty() {
  if (top == null) {
    return true;
  } else return false;
}

function push(data) {
  var newNode = new StackNode(data);

  if (top == null) {
    top = newNode;
  } else {
    newNode.next = top;
    top = newNode;
  }
  console.log(data + " pushed to stack");
}

function pop() {
  var popped = Number.MIN_VALUE;

  if (top == null) {
    console.log("Stack is Empty");
  } else {
    popped = top.data;
    top = top.next;
  }
  console.log(popped, " popped from stack")
  return popped;
}

function peek() {
  if (top == null) {
    console.log("Stack is empty");
    return Number.MIN_VALUE;
  } else {
    return top.data;
  }
}

function check(arr) {
	for ( let i = 0 ; i<arr.length ; i++) {
		if (top != null && top.data != arr[i] ){
			pop()
		} else {
		push(arr[i]);
		}
	}
}


// Driver code
// push(10);
// push(20);
// push(30);

// console.log(pop() + " popped from stack<br/>");

// console.log("Top element is " + peek());

let arr = [0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1];

check(arr);
console.log("Top element is " + peek());




