function longestPalindrome(s)
{
    let longest =  '';
    for(let i = 0; i < s.length; i++)
    {
        checkLeftAndRight(i, i);
         checkLeftAndRight(i, i+1);
    }
    function checkLeftAndRight(left,right)
{
    while(left >= 0 && right < s.length && s[left] === s[right])
    {

        if(right - left + 1 > longest.length)
        {
            longest = s.slice(left,right + 1);
        }
        left--;
        right++;
    }
}
 return longest;
}

console.log(longestPalindrome('abddddn'));