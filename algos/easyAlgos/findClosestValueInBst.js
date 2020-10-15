// FIND CLOSEST VALUE IN BST

/** Write a function that takes in a Binary Search Tree (BST) and a Target Intenger value and returns the closes value to that target value contained in the BST.
 *
 * You can assume that there will only be one closest value.
 *
 * Each BST node has an integer value, a left child node and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its
 right; and its children nodes are either valid BST nodes themsevels or None/null.
 *
 * tree =  10
 *     5        15
 *   2   5    13  22
 * 1         14
 * Target = 12
 */

// SOLUTION:
export const findClosestValueInBst = (tree, target) => {
  return findClosestValueInBstHelper(tree, target, parseFloat(Infinity))
}
const findClosestValueInBstHelper = (tree, target, closest) => {
  if (tree === null) return closest

  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value
  }

  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest)
  } else if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest)
  } else {
    return closest
  }
}
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// TODO: CREATE TESTING BST
