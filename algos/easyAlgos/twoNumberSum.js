// TWO NUMBER SUM

//PROMPT:
/*
Write a function that takes in a non-empty array of distint integers and an integer representing a target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.

SAMPLE INPUT :

array = [3,5,-4, 8, 11, 1, -1, 6]
targetSum = 10

SAMPLE OUTPUT:
[-1, 11]

// PROBLEM FROM ALGOEXPERT.IO
*/

// SOLUTION:
export const twoNumberSum = (array, targetSum) => {
  let leftIdx = 0
  let rightIdx = array.length - 1

  while(leftIdx !== rightIdx) {
    const currSum = array[leftIdx] + array[rightIdx]

    if (currSum === targetSum) {
      return [array[leftIdx], array[rightIdx]]
    } else if (currSum < targetSum) {
      leftIdx++
    } else {
      rightIdx--
    }
  }

  return []
}







