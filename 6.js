function arrangeZero(arr)
{
    var sortArr = [];
    countZero = 0;
   for(let i = 0; i < arr.length; i++)
   {
      if(arr[i] !== 0)
      {
        sortArr.push(arr[i]);
      }
      else
      {
         countZero++;
      }
     
      
   }
    for(let i = 0; i < countZero; i++)
   {
       sortArr.push(0);
   }
   return sortArr

}
let arr = [0, 1, 0, 3, 12];
console.log(arrangeZero(arr));