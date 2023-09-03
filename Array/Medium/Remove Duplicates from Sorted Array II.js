function dup(arr) {
  if (nums.length < 3) {
    return nums.length;
  }
  let j = 2;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] !== arr[j - 2]) {
      arr[j] = arr[i];
      j++;
    }
  }
  return j;
}

console.log(dup([0, 0, 0, 1, 1, 1, 2, 2, 3]));

//SC - O(n)
//TC - O(1)
