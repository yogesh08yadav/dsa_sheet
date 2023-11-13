let pascal = (num) => {
  let res = [];
  if (num >= 1) res.push([1]);
  if (num >= 2) res.push([1, 1]);

  for (let i = 2; i < num; i++) {
    let prevArr = res[i - 1];
    let left = 0;
    right = 1;
    let add = [];
    // console.log(prevArr)
    while (right < prevArr.length) {
      add.push(prevArr[left] + prevArr[right]);
      left++;
      right++;
    }
    //  console.log(add)
    res.push([1, ...add, 1]);
  }

  console.log(res);
};
pascal(5);
