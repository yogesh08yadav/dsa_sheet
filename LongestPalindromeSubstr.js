// const palindromeSubstr = (s) => {
//     if(s.length == 0)  return s
//     let maxPalin = ''
// for(let i = 0; i<s.length; i++){
//     let bag = ''

//     for(let j = i; j< s.length; j++){
//         bag = bag+s[j]
//         // console.log(bag)
//         if(bag.split('').reverse().join('') == bag && maxPalin.length < bag.length){
//             maxPalin = bag
//         }
//     }
// }
//         console.log(maxPalin)
// }

var longestPalindrome = function (s) {
  let max = [0, 1];

  for (let i = 0; i < s.length; i++) {
    let even = drome(i - 1, i, s);
    let odd = drome(i - 1, i - 1, s);
    let currSum = even[1] - even[0] > odd[1] - odd[0] ? even : odd;
    max = max[1] - max[0] > currSum[1] - currSum[0] ? max : currSum;
  }

  return s.slice(max[0], max[1]);
};

function drome(left, right, s) {
  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) break;
    left--;
    right++;
  }
  return [left + 1, right];
}
console.log(longestPalindrome("cbbd"));
