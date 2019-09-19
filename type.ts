function sumMatrix(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    let current = matrix[i];
    for (let j = 0; j < current.length; j++) {
      sum += current[j];
    }
  }
  return sum;
}
