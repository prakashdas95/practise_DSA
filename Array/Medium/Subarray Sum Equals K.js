//www.youtube.com/watch?v=bWym1dWZhh0&ab_channel=HelloWorld

function sum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === 3) {
        res++;
      }
    }
  }
  return res;
}
sum([1, 2, 3]);

// TC - O(n^2)
// SC - O(1)

function kSumEquals(arr, target) {
  let hash = {};
  let count = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === target) {
      hash[sum] = 1;
      count++;
    } else if (sum - target === target) {
      hash[sum]++;
      count++;
    }
  }
  return count;
}

console.log(kSumEquals([1, 2, 3], 3));
