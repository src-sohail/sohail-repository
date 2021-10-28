

function countVowel(str) { 
    const count = str.match(/[duygv]/gi).length;
    return count;
}


const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);
