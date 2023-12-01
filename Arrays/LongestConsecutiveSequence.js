const consecutive = (arr) => {
  let set = new Set(arr);
  let max = 0;

  for (let num of set) {
    if (set.has(num - 1)) continue;

    let currNum = num;
    let currMax = 1;

    while (set.has(currNum + 1)) {
      currNum++;
      currMax++;
    }
    max = Math.max(max, currMax);
  }
  console.log(max, res);
};

let arr = [100, 4, 200, 1, 3, 2, 85, 86, 84, 83, 82, 81, 80];
consecutive(arr);
