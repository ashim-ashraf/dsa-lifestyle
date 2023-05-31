let x = new Array(10);

function hashCode(arr) {
    let hash = 0;
    let len = arr.length;
    for (let i = 0 ; i < len; i++) {
        let nameLength = arr[i].length
        for (let j = 0; j < nameLength; j++) {
        let str = arr[i];    
        let chr = str.charCodeAt(i);
        hash = hash + chr;
        } 
        
        let index = hash%10;
        console.log(index)
        x[index] =arr[i];
        hash = 0;
    }
}

let names=["nela","adarsh","sufiyan","alen","rishal","ashim","zamil","jiby","irshad","rafi"];
let res = hashCode(names);



console.log( x)


// console.log(arr)


