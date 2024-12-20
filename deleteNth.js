// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
function deleteNth(arr,n){
let obj = {};
let array = [];
for(const num of arr){
    obj[num] = (obj[num]||0)+1;
    if(obj[num]<=n){
        array.push(num)
    }
}

return array
}