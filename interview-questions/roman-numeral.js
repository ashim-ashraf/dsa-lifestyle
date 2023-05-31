let arr = ["I", "II", "III", "IV", "V", "VI", "VII", "VII", "IX", "X"];
let obj={ I:1,
 V:5,
 X:10
}
let sum=0;
function Calculate(input) {
  let data = input.split("");
  console.log(data)
  for(let i=0;i<data.length;i++){
    console.log(data[i+1])
    if(obj[data[i]]<obj[data[i+1]])
    {
      sum=sum-obj[data[i]]
    }else{
      sum=obj[data[i]]+sum;
    }
   
  }
  console.log(sum)
}

Calculate("XIX");