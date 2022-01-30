// test function with empty argument

const adjacent_keys = {
    'q': ['w', 'a'],
    'w': ['q', 'e', 'a', 's'],
    'e': ['w', 'r', 's', 'd'],
    'r': ['e', 'd', 'f', 't'],
    't': ['r', 'f', 'g', 'y'],
    'y': ['t', 'g', 'h', 'u'],
    'u': ['y', 'h', 'j', 'i'],      
    'i': ['u', 'j', 'k', 'o'],
    'o': ['i', 'k', 'l', 'p'],
    'p': ['o', 'l'],
    'a': ['q', 'w', 's', 'z'],
    's': ['w', 'e', 'a', 'd', 'z', 'x'],
    'd': ['e', 'r', 's', 'f', 'x', 'c'],
    'f': ['r', 't', 'd', 'g', 'c', 'v'],
    'g': ['t', 'y', 'f', 'h', 'v', 'b'],
    'h': ['y', 'u',  'g', 'j', 'b', 'n'],
    'j': ['u', 'i', 'h', 'k', 'n', 'm'],             
    'k': ['i', 'o', 'j', 'l', 'm'],
    'l': ['o', 'p', 'k'],
    'z': ['a', 's', 'x'],
    'x': ['s', 'd', 'z', 'c'],
    'c': ['d', 'f', 'x', 'v'],
    'v': ['f', 'g', 'c', 'b'],
    'b': ['g', 'h', 'v', 'n'], 
    'n': ['h', 'j', 'b', 'm'],
    'm': ['j', 'k', 'n']}

function testFunction(a, b) {
    if (!b) {
        console.log('no value')
    } else {
        console.log(b);
    }
    console.log(a);
}

searchedLetter = ['w']

testFunction('a');