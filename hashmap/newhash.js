let arr=[ 2, 6, 3, -6, 5, -9]
let n = arr.length;

function swap(arr,x,y){
    temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp; 
}

function selectionSort(arr, n){
    var i,j,min;
    for (i=0;i<n-1; i++){
        min = i;
        for(j=i+1; j<n ; j++){
            if(arr[j]< arr[min]){
                min = j;
                swap(arr,min,i)
            } 
        }
    }
}


selectionSort(arr,n)
console.log(arr)

console.log("second smallest" + arr[1]);