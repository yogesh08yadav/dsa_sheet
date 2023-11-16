const grp = (arr) => {
  let sorted = arr.map((elem) => elem.split("").sort().join(""));
  console.log(sorted);
  let mapp = {};
  for (let i = 0; i < sorted.length; i++) {
    if (!mapp[sorted[i]]) {
      mapp[sorted[i]] = [arr[i]];
    } else {
      mapp[sorted[i]].push(arr[i]);
    }
  }
  console.log(mapp);
  console.log(Object.values(mapp));
};
grp(["eat", "tea", "tan", "ate", "nat", "bat"]);
