//https://www.youtube.com/watch?v=IhsUbEMfIbY&ab_channel=AlgorithmsMadeEasy (used)
//www.youtube.com/watch?v=LuLCLgMElus&t=298s&ab_channel=takeUforward

var nextPermutation = function (nums) {
  //step-1: find the first decreasing sequence from the end
  // length -2 - we keep first element fixed from left side
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) i--;
  // check if array is not in ascending from right
  if (i >= 0) {
    // step-2: find the number for substitution and perform swap exact next greater value
    let j = nums.length - 1;
    // find someone who is greater than a[i]
    while (j >= 0 && nums[j] <= nums[i]) j--;
    // swap both values
    swap(nums, i, j);
  }
  // step-3: rearrange remaining array by reverting it
  reverse(nums, i + 1, nums.length - 1);

  return nums;
};

function reverse(nums, i, j) {
  while (i < j) {
    swap(nums, i, j);
    i++;
    j--;
  }
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

console.log(nextPermutation([1, 2, 3]));
