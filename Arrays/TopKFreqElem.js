const findFreq = (arr, k) => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }
  console.log("map", map);
  console.log("map.entries", map.entries());

  let sorted = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  console.log("sortedMap", sorted);
  let count = 0,
    res = [];
  for (let i of sorted.keys()) {
    console.log(i);
    if (count < k) {
      res.push(i);
      count++;
    }
  }
  console.log(res);
};

findFreq([11, 11, 22, 22, 22, 33], 2);
