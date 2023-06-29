class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }

  printList() {
    let current = this.head;
    let str = "";

    while (current) {
      str += current.element + " ";
      current = current.next;
    }
    console.log(str);
  }

  addInto(element, pos) {
    let node = new Node(element);
    let current = this.head;
    let previous = null;
    let i = 0;
    while (i < pos) {
      current = current.next;
      i++;
    }
    previous = current;
    node.next = current.next;
    current.next = node;
  }

  addBegining(element) {
    let node = new Node(element);
    node.next = this.head;
    this.head = node;
  }

  deleteNode(element) {
    let current = this.head;
    let prev = null;
    while (current) {
      if (current.element == element) {
        prev.next = current.next;
      }
      prev = current;
      current = current.next;
    }
  }

  isEmpty() {
    if (this.head) {
      console.log("the linked list is not empty");
    }
  }
}

let ll = new LinkedList();

let arr = [13, 24, 42, 54, 24, 45, 23, 64];
for (let i = 0; i < arr.length; i++) {
  ll.add(arr[i]);
}

ll.addInto(11, 3);
ll.addBegining(1);
ll.deleteNode(24);
ll.isEmpty();
ll.printList();
