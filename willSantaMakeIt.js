// https://www.codewars.com/kata/5857e8bb9948644aa1000246/train/javascript
function determineTime (durations) {
  if(durations.length == 0) return true
let hour = [];
let minute = [];
let second = [];
  let array = durations.map((x,l)=>{
    return x.split(":")
})

    if(durations.length ==1){
      hour.push(+array[0][0])
      minute.push(+array[0][1])
      second.push(+array[0][2])
    }else{
  for (let i = 0; i<array.length;i++){
    for(let j = 0; j<array[i].length; j++){
      if(j==0){
        hour.push(+array[i][j])
      }else if(j==1){
        minute.push(+array[i][j]);
        
      }else{
        second.push(+array[i][j])
      }
    }
  }
      
    }
  
    
 
    
  let hourTime = hour.reduce((a,b)=>a+b);
  let minuteTime = minute.reduce((a,b)=>{
    let sum = a+b;
    return sum
  })/60
  let secondTime = second.reduce((a,b)=>{
     let sum = a+b;
    return sum
  })/3600
  let total = hourTime + minuteTime + secondTime;
  if(total<=24){
    
    return true
  }
  console.log(total)
  return false

}