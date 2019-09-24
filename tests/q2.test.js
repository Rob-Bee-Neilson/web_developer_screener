// Write some code, that will flatten an array of arbitrarily nested arrays of integers 
// into a flat array of integers. e.g. [[1,2,[3]],4] -> [1,2,3,4].

const flatten = require('../q2');

test('checkit test', function () {
    // Arrange
    const testarr1 = [1,[2],3,4]
    
    const expected = "all numbers"
  
    // Act
    const actual = flatten(testarr1)
  
    // Assert
    expect(actual).toBe(expected)
})

// test('flatten to flatten nested array', function () {
//     // Arrange
//     const testarr1 = [[1,2,[3]],4]
    
//     const expected = [1, 2, 3, 4]
  
//     // Act
//     const actual = flatten(testarr1)
  
//     // Assert
//     expect(actual).toBe(expected)
// })

// test('flatten to advise of wrong data type', function () {
//     // Arrange
//     const testarr2 = [1, "2", [3], 4]
//     const expected = 'Input includes wrong data type'
  
//     // Act
//     const actual = flatten(testarr2)
  
//     // Assert
//     expect(actual).toBe(expected)
// })

// test('flatten to remove empty array', function () {
//     // Arrange
//     const testarr3 = [1, [2, [], [3], 4]]
//     const expected = [1, 2, 3, 4]
  
//     // Act
//     const actual = flatten(testarr3)
  
//     // Assert
//     expect(actual).toBe(expected)
// })