let arr = [ 10, 7, 8, 9, 1, 5]

function quickSort(arr) {
    
    if(arr.length-1 < 2){
        return arr
    }

    let pivot = arr[arr.length-1]
    let right = []
    let left = []

    for(i=0; i< arr.length-1 ; i++){
        if(arr[i]<= pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(arr));