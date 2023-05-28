var count = 0 ;
function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
  count++;
}

// An optimized version of Bubble Sort
function bubbleSort(arr, n) {
    console.log("Bubble sort")
  var i, j;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

function selectionSort(arr,  n)
{
    console.log("Selection sort")
    var i, j, min_idx;
 
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;
 
        // Swap the found minimum element with the first element
        swap(arr,min_idx, i);
    }
}

/* Function to print an array */
function printArray(arr, size) {
  var i;
  for (i = 0; i < size; i++) console.log(arr[i] + " ");
  console.log("\n");
}

// Driver program to test above functions
arr = [2, 3, 1, 5, 7, 3, 2];
var n = arr.length;
console.log("UnSorted array: \n");
printArray(arr, n);

selectionSort (arr, n);
console.log("Sorted array: ");

printArray(arr, n);
console.log("count : ",count)


