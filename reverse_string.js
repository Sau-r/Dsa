function reverseString(string)
   {
      if(string.length === 0)
      {
        return '';
      }
      let reversed = '';
        for(let i = string.length-1 ; i >= 0 ; i--)
        {
            reversed +=  string[i];
        }
        return reversed;
   }
   console.log(reverseString("saurabh"));