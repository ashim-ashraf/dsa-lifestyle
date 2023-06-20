class Node {
  constructor(val, next = null) {
    this.data = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  peek() {
    if (this.head === null) {
      console.log("linked list empty");
      return null;
    }
    return this.head.value;
  }
  insertFirst(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }
  insertLast(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }
  inserAt(data, index) {
    if (index < 0 && index > this.size) return -1;
    if ((index = 0)) {
      this.insertFirst(data);
    }
    let node = new Node(data);
    let current, previous;
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }
  getAt(index) {
    let curr = this.head;
    let count = 0;
    while (curr) {
      if (count == index) {
        console.log(curr.data);
        return;
      }
      count++;
      curr = curr.next;
    }
    console.log("not found");
  }
  removeAt(ind) {
    if (ind > this.size) return -1;
    let curr = this.head;
    let previous;
    let count = 0;
    if ((ind = 0)) {
      this.head = curr.next;
    } else {
      while (count < ind) {
        count++;
        previous = curr;
        curr = curr.next;
      }
      previous.next = curr.next;
      this.size--;
    }
  }
  findIndex(value) {
    let count = 0;
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return count;
      }
      count++;
      current = current.next;
    }
  }
  deleteNode(element) {
    let current = this.head;
    let prev = null;
    while (current) {
      if (current.data == element) {
        prev.next = current.next;
      }
      prev = current;
      current = current.next;
    }
  }
  findMiddleElement() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.data;
  }
}

let ll = new LinkedList();
ll.insertFirst(2);
ll.insertFirst(23);
ll.insertFirst(25);
ll.deleteNode(2);
console.log(ll.findMiddleElement());
console.log(ll);
console.log(ll.findIndex(25));
