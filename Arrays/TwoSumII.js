
const twoSum = (arr,n) =>{
    
   let start = 0
   let end = arr.length -1
   
   while(start < end){
       if(arr[start] + arr[end] > n ) end--
       else if(arr[start] + arr[end] < n ) start++
       else if(arr[start] + arr[end] == n ) return [start+1, end+1]
       
   }
}

console.log(twoSum([2,7,11,15],9))