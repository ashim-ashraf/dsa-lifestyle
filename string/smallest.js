arr = [3,5,4,7,8,6]
let n = arr.length; 
let largest =arr[0];
let smallest = arr[0]


for(let i = 0 ; i<n ; i++){
  if(largest<arr[i]){
    largest = arr[i]
  }
  if(smallest>arr[i]){
    smallest = arr[i]
  }
}

console.log(smallest,largest)



let str="hello"
let newstr=""

newstr+=str[str.length-1]
for(i=0;i<str.length-1;i++){
  str+=str[i]
}
console.log(str);