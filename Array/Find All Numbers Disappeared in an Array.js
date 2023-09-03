//www.youtube.com/watch?v=0DMvg285Ua4&ab_channel=EngineeringBrains

var findDisappearedNumbers = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);
    nums[num - 1] = Math.abs(nums[num - 1]) * -1;
  }
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > 0) result.push(j + 1);
  }
  return result;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));

// Time Complexity: O(N)
// Space Complexity: O(1)
/*
We will scan through the input array and for every number we will use its value as an index and
negate the number at the index. For example, if we encounter 4, we will negate the number at index 3.
The reason the index is not four is because the array is zero-indexed.
*/
