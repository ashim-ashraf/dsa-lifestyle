//Array squared
// const input = [1, 2, 3, 4, 5];

// let result = input.map((x) => {
//     return x*x;
// })
// console.log(result);


//Sum of every positive element
const input = [1, -4, 12, 0, -3, 29, -150];

let result = input.filter( x => x>0).reduce((acc,curr) => acc+curr);

console.log(result);