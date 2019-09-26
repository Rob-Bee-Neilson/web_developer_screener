// Write some code, that will flatten an array of arbitrarily nested arrays of integers 
// into a flat array of integers. e.g. [[1,2,[3]],4] -> [1,2,3,4].

// pseudocode:
// create new empty array (newArr1)
// loop through given array (arr) and test items for obj type (array or number?)
// if array then pull each object out of arr and push to newArr1
// if number then push to newArr1
// repeat process with newArr1
// stop when all items in tested array are numbers

function flatten(arr) {
    
    var newArray = [];
            
    for (var value of arr) {
        if (Array.isArray(value) == true) {
            newArray = newArray.concat(flatten(value))
        }
        
        else {
            newArray.push(value)
        }
    }

    return newArray
    
}

module.exports = flatten;