var reverseWords = function (s) {
  let arr = s.split(" ");
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") res.unshift(arr[i].trim());
  }
  console.log(res.join(" "));
  return res.join(" ");
};
reverseWords("  hello world  ");
