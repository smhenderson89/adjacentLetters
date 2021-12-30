import sys

adjacent_keys = {
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

# How to test if word/names can be composed of adjacent keys

# Turn test string into a range of letters
# Starting with first letter, check the corresponding adjacent keys for that word

# TODO: Find list of all names in the US
# Write loop to test all names on the list



def adjacent(word):
    for i in range(len(word)-1):  # Iterate over each letter of the word
        print('Checking letter ' + word[i] + '...', end='')
        adjacent_letters = adjacent_keys[word[i]]
        # Check if have reached end of the word
        if word[i+1] in adjacent_letters:   # If next letter in word is an adjacent key
            print('Yes, next letter is ' + word[i+1] + ' , '  + str(i))
            continue
        else:
            print('Sorry, ' + word[i+1]  + ' is not adjacent to ' + word[i])
            sys.exit(1)
    print('Congrats! "' + str(word) + '" has letters that are adjacent to each other in sequence!')

print('Input word')
word = str(input()).lower()

adjacent(word)