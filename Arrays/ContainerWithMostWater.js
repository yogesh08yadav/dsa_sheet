var maxArea = function (height) {
  // const maxWater = (arr) =>{
  let l = 0,
    r = height.length - 1,
    max = 0;

  while (l !== r) {
    let area = (r - l) * Math.min(height[l], height[r]);
    if (area > max) {
      max = area;
    }
    height[l] > height[r] ? r-- : l++;
  }
  return max;
  // }

  // maxWater([1,8,6,2,5,4,8,3,7])
};
