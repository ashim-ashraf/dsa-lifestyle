function partition(arr){
    if(arr.length < 2){
        return arr;
    }

    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)
    return merge(partition(leftArr),partition(rightArr))
}

function merge(left, right){
    const sortArr = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sortArr.push(left.shift())
        } else {
            sortArr.push(right.shift())
        }
    }
    return [...sortArr,...left,...right]
}

let arr = [ 10, 7, 8, 9, 1, 5]
console.log(partition(arr));