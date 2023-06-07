class Node {
    constructor(element) {
        this.element = element;
        this.prev = null;
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
        let node = new Node(element)

        if(head == null){
            this.head = node 
        } else {
            this.tail.next = node 
            node.prev = this.tail
        }
        tail= node;
    }

}  