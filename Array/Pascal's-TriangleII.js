function pascal(rowIndex) {
  let pascalTriangle = new Array(rowIndex);
  pascalTriangle[0] = [1];
  if (rowIndex === 0) return pascalTriangle;

  for (let i = 1; i <= rowIndex; i++) {
    let row = new Array(i + 1);
    row[0] = 1;
    row[row.length - 1] = 1;
    for (let j = 1; j < row.length - 1; j++) {
      let prevRow = pascalTriangle[i - 1];
      row[j] = prevRow[j] + prevRow[j - 1];
    }
    pascalTriangle[i] = row;
  }
  console.log(pascalTriangle);
  console.log(pascalTriangle[rowIndex]);
  return pascalTriangle[rowIndex];
}
pascal(3);

// Time complexity - O(n^2)
