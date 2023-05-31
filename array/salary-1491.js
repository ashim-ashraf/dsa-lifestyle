/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let highest = -Infinity;
    let lowest = Infinity;
    let sum = 0;
  
    for(let i=0; i<salary.length ; i++){
        if(highest < salary[i]){
            highest = salary[i]
        }  
        if(lowest > salary[i]){
            lowest = salary[i]
        }
        sum += salary[i]
    }  
    sum -= (highest + lowest)
    avg = sum/(salary.length-2)
    return avg 
  };

let salary = [4000,3000,1000,2000];

console.log(average(salary))