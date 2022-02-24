const matrixKey =[
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
/* GridKey is a list of objects, listing the letter and the [Row, Colum] array of each 
of the letters of the alphanet. Z is [1,1], Q is [1, 3], M is [1, 7], P is [3, 10] */

// TODO: Rewrite Gridkey to have O(n) access to both key and value pairs
const gridKey = {
    'A' : [2, 1],
    'B' : [1, 5],
    'C' : [1, 3],
    'D' : [2, 3],
    'E' : [3, 3],
    'F' : [2, 4],
    'G' : [2, 5],
    'H' : [2, 6],
    'I' : [3, 8],
    'J' : [2, 7],
    'K' : [2, 8],
    'L' : [2, 9],
    'M' : [1, 7],
    'N' : [1, 6],
    'O' : [3, 9],
    'P' : [3, 10],
    'Q' : [3, 1],
    'R' : [3, 4],
    'S' : [2, 2],
    'T' : [3, 5],
    'V' : [1, 4],
    'W' : [3, 2],
    'X' : [1, 2],
    'Y' : [3, 6],
    'Z' : [1, 1]
}

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

// Function that inputs a letter, returns the X/Y coordinate of that letter based on the gridKey matrix
function letterPosition (letter) {
    coordinate = gridKey[letter.toUpperCase()]
    return coordinate
}

// Funciton that given an [x, y] array of an letter, returns the correspond letter from the key-value pair
function letterFromGridValue (x, y) {
    // console.log('X:' + x + ' Y:' + y);
    const targetArray = [x, y]
    // console.log('Target Array: ' + targetArray);
    for (var key in gridKey) {
        output = gridKey[key]
        outputX = output[0];
        outputY = output[1];
        // console.log(outputX, outputY);
        if (outputX == x && outputY == y) {
            // console.log('found key');
            console.log(key)
        }
    }
}

testName = 'fred';

function testMoving (start, end) {
    console.log('Start Letter: ' + start + ' to End Letter: ' + end);
    // Look at starting and end letter 
    // If difference, see how many moves would be needed to move over to the target grid
    startXY = letterPosition(start)
    startRow = startXY[0]; 
    startCol = startXY[1];
    endXY = letterPosition(end)
    endRow = endXY[0];
    endCol = endXY[1];

    /* positive is right and up, negative is down and left */
    diffRow = endRow - startRow
    diffCol = endCol - startCol
    console.log('Move ' + diffRow + ' up/down and ' + diffCol + ' L/R');

    // Move startingXY to endXY through valid moves that maximize movemnts
    // I.e. Move in diagnol that would accomplish two moves if need to change row/column
    // If Diagnol not available, move horizontally (in a row) or verticallyy (in a column)
    console.log('adjacent letters: ' + adjacentLetters(start));

    // Look at possible letters that match move that are adjacent to current letter
    let currentRow = startRow;
    let currentCol = startCol;

    // Loop to move to another letter
    let currentLetter = start;

    // Given difference in row/column, look for letters that help accomplish a move towards target coordinate
    //      Look at adjacent letters, are there any that are bad choices/ don't move closer to goal?
    //      Elminate those choices from the possible options
    //      Of the remaining options, see how those possible letters compare to moving closer to the goal
    //          Calculate the difference in coordinates, determine which letter is closest to the goal
    //              Take absolute difference in coordinates between, which letter will maximize the distance
    //              Else if multiple options exist, take the first option
    //      Repeat until have reached the end letter, record path


}

testMoving('e', 'x');
// console.log(testAdjacent('s','o'));

// return all adjacent letters to a leter
// console.log(adjacentLetters('e'));

// Return the "grid" position of the letter 
//console.log(letterPosition('A'));

// Test for value of letter given a coordinate
letterFromGridValue(2, 2);

/* 
Algorithm for finding adjacent keys

For letters in the name (excluding last letter)
    Check for adjacent letters 
    Look for letters for name[i]
        if name[i] & name[i +1] are adjacent, move to next letter
        else
            look at current letter's position in the grid position
            compare it to the target grid position
                compare different in row and column between row/colum of target
            
            find adjacent letters to name[i]
            make a set of adjacent letters
            while target letter is not part of set
                look at children letter of original letter
                add adjacent letters to set of adjacent letters
            once find letter, then return loop to next letter


Write loop to test all names on the list
*/


