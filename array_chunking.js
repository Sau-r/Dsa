
function chunckArray(array,chunkSize)
{
    if(array.length == 0 && chunkSize <= 0)
    {
    	return [];
    }
    let result = [];
    for(let i = 0 ; i < array.length ; i += chunkSize)
    {
    	result.push(array.slice(i,i + chunkSize));
    }
    return result;
}
console.log(chunckArray([1,2,3,4,5,6,7,8,9],3));


