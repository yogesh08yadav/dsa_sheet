const matrixZero = (m) => {
  let zeros = [];

  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (m[i][j] == 0) {
        zeros.push([i, j]);
      }
    }
  }
  console.log(zeros);

  for (let zero of zeros) {
    let [row, col] = zero;

    for (let i = 0; i < m.length; i++) m[i][col] = 0;
    for (let i = 0; i < m[0].length; i++) m[row][i] = 0;
  }
  console.log(m);
};
matrixZero([[0, 1]]);
