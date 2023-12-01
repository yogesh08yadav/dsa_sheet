const validSudoku = (board) => {
  for (let i = 0; i < board.length; i++) {
    let set = new Set();
    for (let j = 0; j < board[i].length; j++) {
      // console.log(board[i][j])
      // console.log(board[j][i])
      let value = board[i][j];
      if (value == ".") continue;
      if (set.has(value)) return false;
      set.add(value);
    }
  }

  for (let i = 0; i < board.length; i++) {
    let set = new Set();
    for (let j = 0; j < board[i].length; j++) {
      // console.log(board[j][i])
      // console.log(board[j][i])
      let value = board[j][i];
      if (value == ".") continue;
      if (set.has(value)) return false;
      set.add(value);
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let set = new Set();
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          let value = board[3 * i + k][3 * j + l];
          // console.log('borard',board)
          if (value == ".") continue;
          if (set.has(value)) return false;
          set.add(value);
        }
      }
    }
  }
  console.log(true);
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

validSudoku(board);

var isValidSudoku = function (board) {
  let set = new Set();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let value = board[i][j];
      if (value == ".") continue;
      let boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      let row = `row: ${i} value: ${value}`;
      let col = `col: ${j} value: ${value}`;
      let box = `box: ${boxNum} value: ${value}`;
      if (set.has(row) || set.has(col) || set.has(box)) return false;
      set.add(row);
      set.add(col);
      set.add(box);
    }
  }
  return true;
};
