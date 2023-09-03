// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

const rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
};

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

//Sol -2 - O(n)

// if you mode any number with given number it'll give you n-1 always
//eg- 0 -9 if 10
//43 % 10 -> 3
//69 % 10 -> 9
//70 % 10 -> 0
//55 % 10 -> 5

// formula -  (n+k) % n
// lets say you have a "k" that if you add to the "i" exceeds the actual length of the current array, but you don't want this to happen so you are going to start from the start of the array again right, and the percentage operator gives you back the remainder.
// Example:
// k = 3
// array.length = 6
// i = 3
// i + k = 6 (but we don't have element at index 6 so we should start from the beginning)
// (i + k) % array.length = 0 (because 6 / 6 and we don't have a remainder)

const rotate2 = (nums, k) => {
  const length = nums.length;
  const temp = [...nums];

  for (let i = 0; i < length; i++) {
    const index = (i + k) % length;
    nums[index] = temp[i];
  }
  return nums; 
};

// console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotate2([-1, -100, 3, 99], 2));
