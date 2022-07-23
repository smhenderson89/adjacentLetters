// ortholinear A* best route search aglo 

// https://en.wikipedia.org/wiki/A*_search_algorithm

// https://briangrinstead.com/blog/astar-search-algorithm-in-javascript/

// CONSTANTS

const alphaList = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
                   'N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const adjacentLettersObject = {
'Q': ['W', 'A', 'S'],
'W': ['Q', 'E', 'A', 'S', 'D'],
'E': ['W', 'R', 'S', 'D', 'F'],
'R': ['E', 'T', 'D', 'F', 'G'],
'T': ['R', 'Y', 'F', 'G', 'H'],
'Y': ['T', 'U', 'G', 'H', 'J'],
'U': ['Y', 'I', 'H', 'J', 'K'],      
'I': ['U', 'O', 'J', 'K', 'L'],
'O': ['I', 'P', 'K', 'L'],
'P': ['O', 'L'],
'A': ['Q', 'W', 'S', 'Z','X'],
'S': ['Q', 'W', 'E', 'A', 'D', 'Z', 'X', 'C'],
'D': ['W', 'E', 'R', 'S', 'F', 'X', 'C', 'V'],
'F': ['E', 'R', 'T', 'D', 'G', 'C', 'V', 'B'],
'G': ['R', 'T', 'Y', 'F', 'H', 'V', 'B', 'N'],
'H': ['T', 'Y', 'U', 'G', 'J', 'B', 'N', 'M'],
'J': ['Y', 'U', 'I', 'H', 'K', 'N', 'M'],             
'K': ['U', 'I', 'O', 'J', 'L', 'M'],
'L': ['I', 'O', 'P', 'K'],
'Z': ['A', 'S', 'X'],
'X': ['A', 'S', 'D', 'Z', 'C'],
'C': ['S', 'D', 'F', 'X', 'V'],
'V': ['D', 'F', 'G', 'C', 'B'],
'B': ['F', 'G', 'H', 'V', 'N'], 
'N': ['G', 'H', 'J', 'B', 'M'],
'M': ['H', 'J', 'K', 'N']}

const orthoMatrix = require ('./orthoAdjacentMatrix.json')

const orthoLetterKey = {
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
    'U' : [3, 7],
    'V' : [1, 4],
    'W' : [3, 2],
    'X' : [1, 2],
    'Y' : [3, 6],
    'Z' : [1, 1]
}

const orthoRowColKey = {
    '2, 1' : 'A',
    '1, 5' : 'B',
    '1, 3' : 'C',
    '2, 3' : 'D',
    '3, 3' : 'E',
    '2, 4' : 'F',
    '2, 5' : 'G',
    '2, 6' : 'H',
    '3, 8' : 'I',
    '2, 7' : 'J',
    '2, 8' : 'K',
    '2, 9' : 'L',
    '1, 7' : 'M',
    '1, 6' : 'N',
    '3, 9' : 'O',
    '3, 10': 'P',
    '3, 1' : 'Q',
    '3, 4' : 'R',
    '2, 2' : 'S',
    '3, 5' : 'T',
    '3, 7' : 'U', 
    '1, 4' : 'V',
    '3, 2' : 'W',
    '1, 2' : 'X',
    '3, 6' : 'Y',
    '1, 1' : 'Z'
}

// Class Node for letter, based on code from : https://briangrinstead.com/blog/astar-search-algorithm-in-javascript/
class Node {
    constructor(letter) {
        this.letter = letter
        
        // Determine row/col location from letter
        let coordinates = letterToRowCol(letter)
        this.row = coordinates[0];
        this.col = coordinates[1];
        this.parent = null // Need to lookup what this does
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.debug = "";

        // Determine neighbors of letter based on node letter
        this.neighbors = adjacentLetters(letter);
    }
}

// HELPER FUNCTIONS

// Converts row, col intergers into letter
function rowColToLetter(r,c) {
    outputLetter = orthoRowColKey[`${r}, ${c}`] // convert row/col input into string literal for array
    return outputLetter
}

// Converts letter into it's row/col position for a Ortholinear Keyboard
function letterToRowCol(letter) {
    coordinates = orthoLetterKey[letter]
    row = coordinates[0]
    col = coordinates[1]
    return [row, col]
}

// Determine adjacent letters from Ortholinear keyboard layout
function adjacentLetters(letter) {
    return adjacentLettersObject[letter]
}

/* Function that takes letters string inputs and 
returns their distance away from each other from the letter keyboard, squaring the distance
*/
function heuristic (a, b) {
    let aGrid = letterToRowCol(a)
    let bGrid = letterToRowCol(b)
    let d = ((Math.abs(aGrid[0] - bGrid[0])) ** 2 + (Math.abs(aGrid[1] - bGrid[1]))** 2)
    return d
}

// TEST FUNCTIONS


// INITIALIZE NODES
/* Create a series of nodes for the entire keyboard. Each node will be named letterLETTER, where LETTER is each letter of the alpahbet. 
Initalize each node depending on the location 
*/

letterNodes = new Map()
for (let i = 0; i < alphaList.length; i++) {
    varName = "letter" + alphaList[i]
    varValue = new Node(alphaList[i])
    letterNodes.set(varName, varValue)
}

