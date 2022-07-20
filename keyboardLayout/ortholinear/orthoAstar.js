// ortholinear A* best route search aglo 

// https://en.wikipedia.org/wiki/A*_search_algorithm

// https://briangrinstead.com/blog/astar-search-algorithm-in-javascript/

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
    '3, 10' : 'P',
    '3, 1' : 'Q',
    '3, 4' : 'R',
    '2, 2' : 'S',
    '3, 5' : 'T',
    '1, 4' : 'V',
    '3, 2' : 'W',
    '1, 2' : 'X',
    '3, 6' : 'Y',
    '1, 1' : 'Z'
}

const orthoRCMap = new Map()

orthoRCMap.set('[2, 1]', 'A')

// Class Node for letter
function Spot (r, c) {
    this.row = r;
    this.col = c;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.neighbors = [];
}

function rowColToLetter(r,c) {
    // console.log(r, c)
    outputLetter = orthoRowColKey[`${r}, ${c}`]
    // console.log(outputLetter)
    return outputLetter
}

console.log(rowColToLetter(2, 1))