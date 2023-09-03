var twoSum = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    if (nums[i] + nums[j] === target) return [i + 1, j + 1];
    if (nums[i] + nums[j] < target) i++;
    if (nums[i] + nums[j] > target) j--;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

//https://www.youtube.com/watch?v=9r63o60zBRg&ab_channel=PheezxCoding
