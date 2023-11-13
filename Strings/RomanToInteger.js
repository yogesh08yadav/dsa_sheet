var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let global = 0;

  for (let i = 0; i < s.length; i++) {
    // if(roman[s[i]]  > roman[s[i+1]]) global = global + roman[s[i]]
    // else  global = global - roman[s[i]]
    // we can't use this as for last element it will come s[i] as V & s[i+1] as undefined. If in false
    // we had '-' it will subtract the number. But as it is single we need to add it to the sum. So to handle
    // that we need to have add condition in else
    console.log(s[i] < s[i + 1]);
    if (roman[s[i]] < roman[s[i + 1]]) global = global - roman[s[i]];
    else global = global + roman[s[i]];
  }
  console.log(global);
};

romanToInt("MCMXCIV");
console.log(1989 > undefined);
