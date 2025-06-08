function isAnagram(str1,str2)
{

    str1 =  str1.toLowerCase().replace(/\s/g, '');
    str2 =  str2.toLowerCase().replace(/\s/g, '');

    if(str1.length !== str2.length) return false;

    const map1 = buildCharMap(str1);
    const map2 = buildCharMap(str2);


    for(let char in map1)
    {
        if(map1[char] !== map2[char])
        {    
            return false;
        }
    }
    return true;
}
function buildCharMap(str)
{
    const map = {};
    for(let char  of str)
    {
        map[char] = (map[char] || 0) + 1;

    }
    return map;
}
console.log(isAnagram("School master", "The classroom"));
// console.log(isAnagram("Hel       lo", "World")); 