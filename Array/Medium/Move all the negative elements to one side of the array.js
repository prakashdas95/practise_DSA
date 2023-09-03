let move = function (arr) {
  let zero = 0;
  let j = -1;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] < zero) {
      j++;
      swap(arr, i, j);
    }
    i++;
  }
  return arr;
};
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
console.log(move([-2, -4, 5, 3, 1, 6, -7]));
