
// JavaScript program for linked-list implementation of queue
class QNode
{
	constructor(data)
	{
		this.data = data;
		this.next = null;
	}
}

let front = null, rear = null;

function enqueue(data)
{
	// Create a new LL node
		let newNode = new QNode(data);

		// If queue is empty, then new node is front and rear both
		if (rear == null) {
			front = rear = newNode;
			return;
		}

		// Add the new node at the end of queue and change rear
		rear.next = newNode;
		rear = newNode;
}


function dequeue()
{
	// If queue is empty, return NULL.
		if (front == null)
			return;

		// Store previous front and move front one node ahead
		let temp = front;
		front = front.next;

		// If front becomes NULL, then change rear also as NULL
		if (front == null)
			rear = null;
}

//driver code
enqueue(10);
enqueue(20);
dequeue();
dequeue();
enqueue(30);
enqueue(40);
enqueue(50);
dequeue();
console.log("Queue Front : " + ((front != null) ? (front).data : -1) );
console.log("Queue Rear : " + ((rear != null) ? (rear).data : -1) );


// This code is contributed by avanitrachhadiya2155

