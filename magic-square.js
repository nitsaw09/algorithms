const magicSquare = (num) => {
  const matrix = [];
  // matrix of 5 X 5 with all 0 values
  for (let i = 0; i < num; i++) {
        const col = [];
    for (let j = 0; j < num; j++) {
      col.push(0);
    }
    matrix.push(col);
  }
  
  // place 1 on middle of array
  const firstRow = parseInt(num/2);
  const firstCol = num - 1;
  matrix[firstRow][firstCol] = 1;
  let row = firstRow;
  let col = firstCol;
  const maxVal = num * num;
  for (let i = 2; i <= maxVal; i++) {
    row = row - 1;
    col = col + 1;
    
    if (row === -1 && col === num) {
      row = 0;
      col = col - 2;
    } else if (col === num) {
      col = 0;
    } else if (row === -1) {
      row = num - 1;
    } else if (matrix[row][col] !== 0) {
        row = row + 1;
        col = col - 2;
    }
    matrix[row][col] = i;
  }
  return matrix;
};
  
console.log(magicSquare(5));