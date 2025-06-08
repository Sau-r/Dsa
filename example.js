function firstNonRepeatingChar(s)
{
    if(s.length ==  0)
    {
        return null;
    }
    if(s.length == 1)
    {
        return s[0];
    }
    charCount = {};
    for(charcter of s)
    {

        if(charcter in charCount)
        {
            charCount[charcter]++;
        }
        else{
            charCount[charcter] = 1;
        }
    }
    for(charcter of s)
    {
        if(charCount[charcter] == 1)
        {
            return charcter;
        }
    }
}
console.log(firstNonRepeatingChar('swiss'));