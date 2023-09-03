//www.youtube.com/watch?v=oaVa-9wmpns&ab_channel=takeUforward
//https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/
// more approaches

var sortColors0123 = function (arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    switch (arr[mid]) {
      case 0:
        swap(arr, low++, mid++);
        break;
      case 1:
        mid++;
        break;
      case 2:
        swap(arr, mid, high--);
    }
  }

  return arr;
};

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(sortColors0123([2, 0, 2, 1, 1, 0, 1, 2]));

//TC - O(n)
//SC - O(1)
