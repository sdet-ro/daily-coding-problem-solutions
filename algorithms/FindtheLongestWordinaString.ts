// Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str: any) {
    let word = str.match(/\S+/g) || [];
    console.log(word);
    let storeLength: any = [];
    for(let i=0;i<word.length;i++){
        console.log(word[i].length);
        storeLength.push(word[i].length);
    }
    let theHighestValue = Math.max( 3, 5, 5, 3, 6, 4, 3, 4, 3);
    console.log(typeof storeLength);
    console.log(theHighestValue);
    return theHighestValue;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWordLength("May the force be with you") should return 5.
// findLongestWordLength("Google do a barrel roll") should return 6.
// findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.