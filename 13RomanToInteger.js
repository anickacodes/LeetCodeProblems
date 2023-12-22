/*

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

**/

/* 
1. What is the problem we are asked to solve? 
-Convert the given roman numeral into an integer
2. How can we go about solving the problem? 
-We are given a string representing a Roman numeral. We need to convert it to an integer. The Roman numeral system has symbols (I, V, X, L, C, D, M) with corresponding values (1, 5, 10, 50, 100, 500, 1000).
-Roman numerals are usually written largest to smallest from left to right. 
However, there are specific cases where subtraction is used. 
IV represents 4 (5 - 1), IX represents 9 (10 - 1), XL represents 40 (50 - 10), etc.
-Create an object to map Roman numeral symbols to their corresponding values.
-Initialize a variable result to store the total value.
-Iterate through the Roman numeral string from left to right.
-Check if the current symbol is smaller than the next symbol.
-If true, subtract the current symbol value from the result.
-If false, add the current symbol value to the result.
-Return the final result.
3. Implement our plan

4. Look back/Check/Refactor
**/

// solution 1
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const strLen = s.length;
  let total = 0;

  for (let i = 0; i < strLen; i++) {
    if (i < strLen - 1 && numerals[s[i + 1]] > numerals[s[i]]) {
      total -= numerals[s[i]];
    } else {
      total += numerals[s[i]];
    }
  }

  return total;
};

// solution 2 utilizes arrow syntax

const romanToInt = (s) => {
  const numerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;

  for (let i = 0; i < s.length; i++)
    total +=
      numerals[s[i]] < numerals[s[i + 1]] ? -numerals[s[i]] : numerals[s[i]];

  return total;
};

// solution 3 also uses arrow syntax and provides more readability
const romanToInt = (s) => {
  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = numerals[s[i]];
    const next = numerals[s[i + 1]];

    total += next > current ? -current : current;
  }

  return total;
};

// https://leetcode.com/problems/roman-to-integer/description/
