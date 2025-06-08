function firstNonRepeated(str)
{
    let freqMap = {};

    for(let char of str)    
    {
        
        freqMap[char] = (freqMap[char] || 0)+1;
    }
    for(let char of str)
    {
        if(freqMap[char] === 1)
        {
            return char;
        }
    }
    return null;
}

console.log(firstNonRepeated("abcc")); 
console.log(firstNonRepeated("aabbccddeeff")); 
console.log(firstNonRepeated("abc")); 