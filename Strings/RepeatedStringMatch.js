let count = (a, b) => {
  let res = a,
    count = 1;
  let repeat = b.length / a.length + 2;

  for (let i = 0; i < repeat; i++) {
    if (a.includes(b)) return count;
    else {
      a = a + res;
      count++;
    }
  }
  return -1;
};

(a = "abcd"), (b = "cdabcdab");
console.log(count(a, b));
