let arr = [19,7,4,6,18,0,5]
let n = arr.length;
let largest = -Infinity
let secondLargest = -Infinity;

for (i = 0; i < n; ++i) {
    if(largest<arr[i]){
        secondLargest = largest;
        largest = arr[i]
    } else if (arr[i] != largest && secondLargest < arr[i] ){
        secondLargest = arr[i];
    }
}

console.log(largest , secondLargest)



