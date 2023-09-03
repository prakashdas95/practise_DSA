//https://www.youtube.com/watch?v=w4W6yya1PIc&ab_channel=CodeHelp-byBabbar

// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Sol -1 - brute force O(n2)

// const maxSubArray = (nums) => {
//   let maxSum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let curSum = 0;
//     for (let j = i; j < nums.length; j++) {
//       curSum += nums[j];
//       if (curSum > maxSum) {
//         maxSum = curSum;
//       }
//     }
//   }
//   return maxSum;
// };

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Sol - 2 - O(n);  - Kaden's algorithm

const maxSubArrays = (nums) => {
  let maxSum = nums[0];
  let curSum = 0;
  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    if (curSum > maxSum) {
      maxSum = curSum;
    }
    if (curSum < 0) {
      curSum = 0;
    }
  }
  return maxSum;
};

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArrays([5, 4, -1, 7, 8]));

// https://www.youtube.com/watch?v=HCL4_bOd3-4&ab_channel=AnujBhaiya
// coderhelp love babbar
