function findLongestWord(sentence)
{
    let cleanSentence =  sentence.replace(/[^\w\s]/gi, '');
    let words = cleanSentence.split(" ");
    let longest = "";
    console.log(words);
    for(let word of words)
    {
        
        if(word.length > longest.length)
        {
            longest =  word;
        }
    }
    return longest;
}

let input = "I love web, development!";
console.log(findLongestWord(input));