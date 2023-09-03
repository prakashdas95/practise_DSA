function mergedTwoSortedArray(arr1, arr2) {
  let i = 1;
  j = 1;
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let mergedArray = [];

  if (!arr1.length) {
    return arr2;
  }
  if (!arr2.length) {
    return arr1;
  }

  while (arr1Item || arr2Item) {
    console.log(arr1Item, arr2Item);
    //!arr2Item if the length is greater of arr1 then arr2 arr2Item will be undefined
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  console.log(mergedArray);
  return mergedArray;
}

mergedTwoSortedArray([0, 3, 4, 31], [4, 6, 30]);
