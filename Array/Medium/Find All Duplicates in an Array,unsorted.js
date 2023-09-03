//https://www.youtube.com/watch?v=ACYunkWQnSI&ab_channel=Codebix

function duplicates(nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    // first value is 4 so our arr length be at least 3 we get the 3 index
    // and make its value at 3 index visited by making it negative
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = nums[index] * -1;
      // if the value is negative that means it's already visited so it's duplicate
    } else {
      res.push(Math.abs(nums[i]));
    }
  }
  return res;
}

// console.log(duplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(duplicates([10, 2, 5, 10, 9, 1, 1, 4, 3, 7]));

// TC - O(n)
// SC - O(1)
