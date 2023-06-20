//array
// test=[1,2,3]
// newarr=[]
// for(i=0;i<test.length;i++){
//     newarr[i]=test[i]
//     newarr[i+test.length]=test[i]
// }

// console.log(newarr);

function encode(string, inc) {
  let key = inc % 26;
  let length = string.length;
  let str = "";
  let i = 0;
  while (i < length) {
    let letterposition = string.charCodeAt(i) + key;

    if (letterposition <= 122) {
      str += String.fromCharCode(letterposition);
    } else {
      str += String.fromCharCode(96 + (letterposition % 122));
    }
    i++;
  }

  return str;
}

function decode(string, dec) {
  let key = dec % 26;
  let length = string.length;
  let str = "";
  let i = 0;
  while (i < length) {
    let ascii = string.charCodeAt(i) - key;
    if (ascii >= 97) {
      str += String.fromCharCode(ascii);
    } else {
      str += String.fromCharCode(122 - (ascii % 97));
    }
    i++;
  }
  console.log(str);
}

let str = "fedba";
let code = encode(str, 2);
console.log(code);
const dec = decode(code, 2);
// function findduplicate(string) {
//     let length = string.length
//     let i = 0
//     let arr = []
//     let j=1

//     while (i < length) {
//         j = i + 1
//         while (j < length) {
//             if (string[i] == string[j]) {
//                 console.log(string[i]);
//             }
//             j++
//         }
//         i++
//     }
// }

// function removealphabet(str, alphabet) {
//     let remove=''
//     let length = str.length
//     let i=0

//     while (i < length-1) {
//         if (str[i] != alphabet) {
//             remove = remove + str[i]
//             console.log(remove);

//         }
//         i++
//     }

//     console.log(remove);

// }

// function reversestring(str) {
//     let i = str.length-1
//     let reverse = ''
//     while (i >= 0) {
//         reverse+=str[i]
//         i--
//     }
//     console.log(reverse);
// }
