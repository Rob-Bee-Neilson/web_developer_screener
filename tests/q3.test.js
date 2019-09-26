const flatten = require('../q3');

test('flatten to flatten nested array', function () {
    // Arrange
    const testarr1 = [[1,2,[3]],4]
    
    const expected = [1, 2, 3, 4]
  
    // Act
    const actual = flatten(testarr1)
  
    // Assert
    expect(actual).toStrictEqual(expected)
})

test('flatten to remove empty array', function () {
    // Arrange
    const testarr3 = [1, [2, [], [3], 4]]
    const expected = [1, 2, 3, 4]
  
    // Act
    const actual = flatten(testarr3)
  
    // Assert
    expect(actual).toStrictEqual(expected)
})

test('flatten to advise of wrong data type', function () {
    // Arrange
    const testarr2 = [1, "2", [3], 4]
    const expected = 'Input includes wrong data type'
  
    // Act
    const actual = flatten(testarr2)
  
    // Assert
    expect(actual).toStrictEqual(expected)
})

test('flatten to deal with NaN', function () {
    // Arrange
    const testarr2 = [1, NaN, [3], 4]
    const expected = 'Input includes wrong data type'
  
    // Act
    const actual = flatten(testarr2)
  
    // Assert
    expect(actual).toStrictEqual(expected)
})