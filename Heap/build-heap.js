1, 2, 3, 4,6

function heapify(arr, N, i)
{
	var largest = i; 
	var l = 2 * i + 1; 
	var r = 2 * i + 2; 


	if (l < N && arr[l] > arr[largest])
		largest = l;


	if (r < N && arr[r] > arr[largest])
		largest = r;

	if (largest != i) {
		var swap = arr[i];
		arr[i] = arr[largest];
		arr[largest] = swap;

		heapify(arr, N, largest);
	}
}

function buildHeap( arr)
{
	var N = arr.length;
	for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
		heapify(arr, N, i);
}

function printArray(arr)
{
	var N = arr.length;
	for (var i = 0; i < N; ++i)
    console.log(arr[i] + " ");
		
}

var arr = [1, 3, 5, 4, 6,25, 13, 10, 8, 15, 17];
var N = arr.length;


buildHeap(arr)

console.log( "Array representation of Heap is: ");
printArray(arr, N);
