// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
// video explanation brute force -> https://www.youtube.com/watch?v=54VcLqAHrHk&ab_channel=PheezxCoding

var threeSum = function (nums, target) {
  nums.sort((a, b) => a - b); // sorting to get from ascending list
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    // we dont want to create another same combination ->
    // [[-1,0,1],[-1,2,-1],[0,1,-1]]
    // i should be grater bcoz of n-1 comparation
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      // we dont want to create another same combination
      //[[-1,0,1],[-1,2,-1],[0,1,-1]]

      if (j > i + 1 && nums[j] == nums[j - 1]) continue;
      for (let k = j + 1; k < nums.length; k++) {
        // we dont want to create another same combination
        //[[-1,0,1],[-1,2,-1],[0,1,-1]]

        if (k > j + 1 && nums[k] == nums[k - 1]) continue;
        if (nums[i] + nums[j] + nums[k] === target) {
          res.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return res;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4], 0));

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    // a+b+c = 0
    // (a is picked then b+c = 0 -a) -----> b+c= 0 -a
    // twoSumSorted(b, c, array, target(b+c= 0 -a))
    if (i === 0 || nums[i] !== nums[i - 1]) {
      threeSumSorted(i + 1, nums.length - 1, nums, 0 - nums[i]);
    }
  }

  // https://www.youtube.com/watch?v=E7Ie6OlQgN4&t=494s&ab_channel=PrakashShukla

  function threeSumSorted(i, j, nums, target) {
    let a = nums[i - 1];
    while (i < j) {
      if (nums[i] + nums[j] < target) {
        i++;
      } else if (nums[i] + nums[j] > target) {
        j--;
      } else {
        res.push([a, nums[i], nums[j]]);
        // duplicates b
        while (i < j && nums[i] === nums[i + 1]) {
          i++;
        }
        // duplicates c
        while (i < j && nums[j] === nums[j - 1]) {
          j--;
        }
        i++;
        j--;
      }
    }
  }
  return res;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 0, 0]));
// console.log(threeSum([1, -1, -1, 0]));

// TC -
// sorting function - O(nLogn)
// Two sum is O(n) and we call it n times

// -> ((nlogn) + O(n^2))

//SC - from O(n) to O(logn) depending on the implementation of the sorting algorithm.
// for the purpose of complexity analysis, we ignore the memory required for the outer space
