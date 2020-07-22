let str = 'hello world';
console.log(str);
let arr = str.split('');
let exclList = ['l', 'd'];

function exclude(arr, exclList) {
  for (var i = 0; i <= arr.length - 1; i++) {
    for (var j = 0; j < exclList.length; j++) {
      if (arr[i] === exclList[j]) {
        arr.splice(i, 1);
        i--;
      }
    } 
  } return arr.join('');
}

console.log(exclude(arr, exclList));