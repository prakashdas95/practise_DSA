//www.youtube.com/watch?v=qgizvmgeyUM&t=695s&ab_channel=takeUforward

longestConsecutive = function (nums) {
  // Step 1 : we will add all values in a set
  let seq = new Set();
  for (let value of nums) {
    seq.add(value);
  }

  let long = 0;
  // Step 2 : we will check if the previous number is available of current number not available
  // that means it's the start of the sequence
  for (let num of nums) {
    if (!seq.has(num - 1)) {
      let curr = 0;
      let cn = num;
      // Step 3 : we will use a while loop in else with in the step 2 for loop
      // and will in crease the count and add 1 in the current number will check it in set exist while loop
      // if not exist and make longseq our currseq;
      while (seq.has(cn)) {
        curr += 1;
        cn += 1;
      }
      long = Math.max(long, curr);
    }
  }
  return long;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

// TC - O(n) +O(n)+ O(n) => O(3n) => O(n)
// SC - O(n)
