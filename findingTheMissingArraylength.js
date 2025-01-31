function getLengthOfMissingArray(arrayOfArrays) {
if(!Array.isArray(arrayOfArrays) || arrayOfArrays.length == 0) return 0
let oneEmpty = (arrayOfArrays || []).some(ele=>!ele || ele.length == 0)
console.log(oneEmpty)

  if(oneEmpty){
return 0
  } 
let array = arrayOfArrays.map((x)=>x.length)
array.sort((a,b)=>a-b);
  let number;
for(let i = 0; i<array.length; i++){
if(array[i] + 1 !=array[i+1]){

  return array[i]+1
}
}
}
let arrays = null;

console.log(getLengthOfMissingArray(arrays))