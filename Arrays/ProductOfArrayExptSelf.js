const arrProduct = (arr) => {
  let frwdArr = [],
    start = 1;

  for (let i = 0; i <= arr.length - 1; i++) {
    frwdArr.push(start);
    start = start * arr[i];
  }
  console.log(frwdArr);
  let start2 = 1;
  let res = [];
  for (let i = frwdArr.length - 1; i >= 0; i--) {
    res.unshift(start2 * frwdArr[i]);
    start2 = start2 * arr[i];
  }
  console.log(res);
};

arrProduct([1, 2, 3, 4]);
