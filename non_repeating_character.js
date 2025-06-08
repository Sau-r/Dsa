
function firstNonRepeatingChar(str)
{
    if(str.length === 0)
    {
        return null;
    }
   if(str.length === 1)
   {
     return str[0];
   }
   charCount = {};
   for(let charcter of str)
   {
      if(charcter in charCount)
      {
        charCount[charcter]++;
      }
      else
      {
        charCount[charcter] = 1;
      }
      console.log(charCount);

   }

   for(let charcter of str)
   {
     if(charCount[charcter] == 1)
     {
        return charcter;
     }
   }
   return null;
}
console.log(firstNonRepeatingChar('swiss'));


