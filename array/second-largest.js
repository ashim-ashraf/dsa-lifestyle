let arr = [19, 7, 4, 6, 18, 0, 5, 0 , 4, 0, 19]
let n = arr.length;

function seclargest(arr) {
    let largest = -Infinity
    let secondLargest = -Infinity;
    for (i = 0; i < n; ++i) {
        if (largest < arr[i]) {
            secondLargest = largest;
            largest = arr[i]
        } else if (arr[i] != largest && secondLargest < arr[i]) {
            secondLargest = arr[i];
        }
    }
    console.log(largest, secondLargest)
}

function findUnique(arr) {
    let n = arr.length - 1;
    let flag = 0
    for (let i = 0; i <= n; i++) {
        flag = 0;
        for (let j = 0; j <= n; j++) {
            if (i != j) {
                if (arr[i] == arr[j]) {
                    flag = 1
                }
            }
        }
        if (flag == 0) {
            console.log(arr[i])
        }
    }
}

function findPrime(arr, n) {
    if (n >= arr.length) {
        return;
    }
    let i = 2
    let isPrime
    if(arr[n]>1){
         isPrime = true;
    }
    while ( i <= arr[n] / 2) {
        if (arr[n] % i == 0) {
            isPrime = false;
        } 
        i++
    }
    if(isPrime){
        console.log(arr[n]);
    }
    findPrime(arr,n+1)
}

// seclargest(arr)
// findUnique(arr)
findPrime(arr, 0)