let str = "ashim ashraf"
let str1 =str.split('');
console.log(str1);
let length = str1.length-1;
let result = "";
for(let i = length;i>=0;i--){
     result += str1[i];
}
 console.log(result)