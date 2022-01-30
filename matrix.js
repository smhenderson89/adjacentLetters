var matrixKey =[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1],
    [0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0],
    [0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0],
    [0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0],
    [0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0],
    [0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1],
    [0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1],
    [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0]
]

// TODO: Find list of all names in the US

/* console.log(matrixKey[0][25]); 
Test if two letters are adjacent
*/

// Convert letter into a number, a : 0, b: 1 ... z: 25
function convertLetterToNum (letter) {
    if (typeof letter === 'string') {
        let test = letter.toLowerCase(); // conver to lower case
        return (test.charCodeAt(0) - 97)
    }
}

/* Test if two letters are adjacent to each other 
 given a matrixKey of the keyboard */
function testAdjacent (letterA, letterB) {
    numA = convertLetterToNum(letterA)
    numB = convertLetterToNum(letterB)
    if (matrixKey[numA][numB]) {
        return true
    } else {
        return false
    }
}

// Returns list of letters adjacent to request letter
function adjacentLetters (letterA) {
    let numA = convertLetterToNum(letterA)
    let adjacentKey = matrixKey[numA]; // Get matrix adjacent matrix for letterA
    /* Example: "s" returns
    [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,0, 1] */
    let letterArray = []

    // Generate array of numbers representing letters where adjacent
    for (let i = 0; i < adjacentKey.length; i++) {
        if (adjacentKey[i] == 1) {
            // Convert index location to Unicode Letter, push to 
            letterArray.push(String.fromCharCode(i + 97));
        }
    }
    // Return 
    return letterArray
}

testName = 'fred';
// console.log(testAdjacent('s','o')); returns false

// return all adjacent letters to a leter
console.log(adjacentLetters('s'));

/* 
Algorithm for finding adjacent keys

For letters in the name (excluding last letter)
    Check for adjacent letters 
    Look for letters for name[i]
        if name[i] & name[i +1] are adjacent, move to next letter
        else
            find adjacent letters to name[i]
            make a set of adjacent letters
            while target letter is not part of set
                look at children letter of original letter
                add adjacent letters to set of adjacent letters
            once find letter, then return loop to next letter


Write loop to test all names on the list
*/


