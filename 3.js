function  firstMissingPositive(arr)
{
    const set =  new Set();
   for(let num of arr)
   {
    if(num > 0)
    {
        set.add(num);
    }
   }
   for(let i = 1 ;i<=arr.length +1 ; i++)
   {
       if(!set.has(i))
       {
        return i;
       }
   }
}
console.log(firstMissingPositive([2, 5,3, -1, 1])); 
console.log(firstMissingPositive([1, 2, 0]));   
console.log(firstMissingPositive([7, 8, 9]));     
