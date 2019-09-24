// Write some code, that will flatten an array of arbitrarily nested arrays of integers 
// into a flat array of integers. e.g. [[1,2,[3]],4] -> [1,2,3,4].

// pseudocode:
// create new empty array (newArr1)
// look through given array (arr) and test items for obj type (array or number?)
// loop through arr
// if number then push to newArr1
// if array then pull each object out of arr and push to newArr1
// create another empty array (newArr2)
// look through newArr2 and test items for obj type (array or number?)
// if number then push to newArr2
// if array then pull each object out of arr and push to newArr2
// continue process
// stop when all items in tested array are numbers

function flatten(arr) {
    var newArray = [];
            
    for (var value of arr) {
        if (Array.isArray(value) == true) {
            newArray = newArray.concat(value)
        }
        
        else {
            newArray.push(value)
      }
    }
    
    return newArray;

}

module.exports = flatten;