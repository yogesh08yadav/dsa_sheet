const find = (haystack, needle) => {
  if (!haystack.includes(needle)) return -1;
  let firstElem = needle[0];
  let indexes = [];
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == firstElem) indexes.push(i);
  }
  for (let i = 0; i < indexes.length; i++) {
    if (haystack.slice(indexes[i], indexes[i] + needle.length) == needle)
      return indexes[i];
  }
  return -1;
};

// let haystack = "sadbutsad", needle = "sad"
let haystack = "hello",
  needle = "ll";
// let haystack = "leetcode", needle = "leeto"
console.log(find(haystack, needle));
