// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

// brute force

function intersectionArray(arr1, arr2) {
  let output = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        output.push(arr2[j]);
      }
    }
  }
}

//optimal

var intersection = function (nums1, nums2) {
  const output = [];
  const hashmap = new Map();

  for (let i = 0; i < nums1.length; i++) {
    hashmap.set(nums1[i], i);
  }

  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];
    if (hashmap.has(num)) {
      output.push(num);
      hashmap.delete(num);
    }
  }

  return output;
};

//O(n+m).

var intersection = function (nums1, nums2) {
  let uni = new Set(nums1);

  return [...new Set(nums2.filter((itm) => uni.has(itm)))];
};
//Faster
//Solution 2: O(n)
