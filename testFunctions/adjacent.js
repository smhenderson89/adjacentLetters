/*  
TODO: Translate Python in Javascript
TODO: Write psuedo code for algorithim 
TODO: Learn about test cases and how to write them 
*/

// Adjacent Word object

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

function findAdjacentKeys(oneLetter, checkedLetters) {
    /* Find adjacent letters given a letter key */
    /* Add argument for already serached letters, to reduce search  */
    let adjLetters = []
    if (adjacent_keys.hasOwnProperty(oneLetter)) { // If values for key-value exists
            let adjLetters = adjacent_keys[oneLetter] // adjLetters == value of letter key
            if (!checkedLetters) { // Check if checkedLetters != null
                
            }
            console.log(oneLetter + ": adj ->" + adjLetters);
            return adjLetters
        }
    }

function pathToLetter (name) {
    const nameLetters = name.toLowerCase().split("")
    const nLL = nameLetters.length - 1
    const start = nameLetters[0];
    const dest = nameLetters.slice(-1);
    console.log(`Starting Letter: ${start}`);
    console.log(`End Letter: ${dest}`);

    for (let i = 0; i < nLL; i++) {
        let nextLetter = nameLetters[i+1] // Define next letter of name
        let searchedLetters = [] // Array of Letters already searched
        console.log(`Looking for ${nextLetter}`); 
        if ((findAdjacentKeys(nameLetters[i])).includes(nextLetter)) {
            console.log(`${nextLetter} adjacent to ${nameLetters[i]}`)
        } else {
            console.log(`Expand search for ${nextLetter} children of ${nameLetters[i]}`);
            let lettersToSearch = []
            searchedLetters.push()
            // Look at the adjacent letters for /* name[i] */
            // If letter name[i+1] is within adjacent letters (name[i+1] : adjacent), then have found next letter
            // If not, then look at all the children letters of the oringal letters
            // Keep track of sequence of all letters that have looked out, without loking at previous letters found in adjacent groups 
            // Once found letter, track back to original letter the shortest path to find that letter  */
        }
    } 
}

findAdjacentKeys('a');

//pathToLetter('Sam');

// For each letter in the name
// Beginning Letter of the name, name[i]
// Look at the next letter of the name, name[i+1]
// Look at the adjacent letters for name[i]
//      If letter name[i+1] is within adjacent letters (name[i+1] : adjacent), then have found next letter
//      If not, then look at all the children letters of the oringal letters
// Keep track of sequence of all letters that have looked out, without loking at previous letters found in adjacent groups 
// Once found letter, track back to original letter the shortest path to find that letter 
//  Could be C -> F -> G -> H or C -> V -> B -> H (both are 4 jumps)
//  Could be S -> W -> Q or S -> A -> Q (both are 3 jumps)

/* Code written in python



/* def adjacent(word): Python Code
    for i in range(len(word)-1):  # Iterate over each letter of the word
        print('Checking letter ' + word[i] + '...', end='')
        findAdjacentKeys(letter[i])
        # Check if have reached end of the word
        if word[i+1] in adjacent_letters:   # If next letter in word is an adjacent key
            print('Yes, next letter is ' + word[i+1] + ' , '  + str(i))
            continue
        else:
            print('Sorry, ' + word[i+1]  + ' is not adjacent to ' + word[i])
            sys.exit(1)
    print('Congrats! "' + str(word) + '" has letters that are adjacent to each other in sequence!')

*/