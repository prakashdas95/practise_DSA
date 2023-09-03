//https://www.youtube.com/watch?v=y24nMGNkkPo&ab_channel=shirinsetayesh

//     [1]
//    [1,1]
//   [1,2,1]
//  [1,3,3,1] <- i-1
// [1,4,6,4,1] <- i

// [1,_,_,_,1]
// rowAbove[j] + rowAbove[j-1]

// 1. pascalsTriangle -> declare an array of size(numRows)
// 2. generate row by row
//    row[0] = 1;
//    row[row.length - 1] = 1;
//    to generate the value between 1...and...1 look at the row above (previous row)
//    rowAbove = pascalsTriangle[i-1]
//    then add
//    rowAbove[j] + rowAbove[j-1]

function pascal(numRows) {
  let pascalTriangle = new Array(numRows);
  if (numRows === 0) return [];
  pascalTriangle[0] = [1];

  for (let i = 1; i < numRows; i++) {
    let row = new Array(i + 1);
    row[0] = 1;
    row[row.length - 1] = 1;
    //  j = 1 bcoz we have 1 at row[0] and row.length - 1 bcoz we have 1 in the last
    for (let j = 1; j < row.length - 1; j++) {
      let prevRow = pascalTriangle[i - 1];
      row[j] = prevRow[j] + prevRow[j - 1];
    }
    pascalTriangle[i] = row;
  }
  console.log(pascalTriangle);
  return pascalTriangle;
}
pascal(5);

// Time complexity - O(n^2)
