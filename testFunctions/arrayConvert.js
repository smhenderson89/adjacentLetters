test = [
  1, 0, 0, 1, 1, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1, 1,
  0, 1
]

let location = [];

for (let i = 0; i < test.length; i++) {
    if (test[i] == 1) {
        location.push(i);
    }
}

letterArray = []
 
for (j in location) {
    text = String.fromCharCode(location[j] + 97) // Convert number to Unicode
    letterArray.push(text);
} 

console.log('location: ' + location);
console.log(letterArray)


