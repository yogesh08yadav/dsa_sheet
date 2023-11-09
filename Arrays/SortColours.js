var sortColors = function (nums) {
  let zero = 0;
  let one = 0;
  let two = 0;
  let last = nums.length;

  for (let i of nums) {
    if (i === 0) zero++;
    else if (i === 1) one++;
    else two++;
  }
  for (let j = 0; j < last; j++) {
    if (j < zero) nums[j] = 0;
    else if (j >= zero && j < zero + one) nums[j] = 1;
    else nums[j] = 2;
  }
  return nums;
};
sortColors([2, 0, 2, 1, 1, 0]);
