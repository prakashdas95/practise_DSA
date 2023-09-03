// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// Sol - 1 - O(n ^ 2);

// const contain = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// console.log(contain([1, 2, 3, 1]));
// console.log(contain([1, 2, 3, 4]));

// Sol - 2 - O(n);

const containsDuplicate = (nums) => {
  const uni = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (uni.has(nums[i])) {
      return true;
    } else {
      uni.set(nums[i], true);
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
