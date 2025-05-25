function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log('convertCtoF(30) =', convertCtoF(30));

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log("reverseString('hello') =", reverseString('hello'));

function factorialize(num) {
  if (num === 0) return 1;
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log('factorialize(5) =', factorialize(5));

function findLongestWordLength(str) {
  let longest = 0;
  str.split(' ').forEach((word) => {
    const length = word.length;
    if (length > longest) {
      longest = length;
    }
  });
  return longest;
}

console.log(
  "findLongestWordLength('The quick brown fox jumped over the lazy dog') =",
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);

function largestOfFour(arr) {
  let largestArray = [];
  arr.forEach((subArr) => {
    let largestNumber = subArr[0];
    subArr.forEach((num) => {
      if (num > largestNumber) {
        largestNumber = num;
      }
    });
    largestArray.push(largestNumber);
  });
  return largestArray;
}

const largestArr = largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

console.log('largestArr =', largestArr);
console.log(
  'largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) =',
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);

function confirmEnding(str, target) {
  const endWord = str.substring(str.length - target.length);
  return endWord === target;
}

console.log("confirmEnding('Bastian', 'n') =", confirmEnding('Bastian', 'n'));

function repeatStringNumTimes(str, num) {
  if (num < 1) return '';
  let result = '';
  for (let i = 1; i <= num; i++) {
    result += str;
  }
  return result;
}

console.log("repeatStringNumTimes('abc', 3) =", repeatStringNumTimes('abc', 3));

function truncateString(str, num) {
  if (str.length <= num) return str;
  return str.substring(0, num) + '...';
}

console.log(
  "truncateString('A-tisket a-tasket A green and yellow basket', 8) =",
  truncateString('A-tisket a-tasket A green and yellow basket', 8)
);

function findElement(arr, func) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (func(num)) {
      result = num;
      break;
    }
  }
  return result;
}

console.log(
  'findElement([1, 2, 3, 4], num => num % 2 === 0) =',
  findElement([1, 2, 3, 4], (num) => num % 2 === 0)
);

function booWho(bool) {
  if (typeof bool === 'boolean') return true;
  return false;
}

console.log('booWho(null) =', booWho(null));

function titleCase(str) {
  let result = [];
  str.split(' ').forEach((word) => {
    let capitalized =
      word.at(0).toUpperCase() + word.substring(1).toLowerCase();
    result.push(capitalized);
  });
  return result.join(' ');
}

console.log(
  'titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") =',
  titleCase('HERE IS MY HANDLE HERE IS MY SPOUT')
);

function frankenSplice(arr1, arr2, n) {
  let result = [];
  if (n === 0) {
    result = [...arr1, ...arr2];
  } else {
    for (let i = 0; i < arr2.length; i++) {
      if (i === n) {
        result = [...result, ...arr1];
      }
      result.push(arr2[i]);
    }
  }

  return result;
}

console.log(
  'frankenSplice([1, 2, 3], [4, 5, 6], 1) =',
  frankenSplice([1, 2, 3], [4, 5, 6], 1)
);

function bouncer(arr) {
  let newArr = [];
  arr.forEach((val) => {
    if (val) {
      newArr.push(val);
    }
  });
  return newArr;
}

console.log(
  "bouncer([7, 'ate', '', false, 9]) =",
  bouncer([7, 'ate', '', false, 9])
);

function getIndexToIns(arr, num) {
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    if (num <= sortedArr[i]) return i;
  }
  return sortedArr.length;
}

console.log('getIndexToIns([60, 40], 50) =', getIndexToIns([60, 40], 50));

function mutation(arr) {
  let result = true;
  arr[1].split('').forEach((char) => {
    if (!arr[0].toLowerCase().includes(char.toLowerCase())) result = false;
  });
  return result;
}
console.log("mutation(['hello', 'hey']) =", mutation(['hello', 'hey']));

function chunkArrayInGroups(arr, size) {
  let result = [];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.length < size) {
      newArr.push(arr[i]);
    }
    if (newArr.length === size || i === arr.length - 1) {
      result.push(newArr);
      newArr = [];
    }
  }
  return result;
}
console.log(
  "chunkArrayInGroups(['a', 'b', 'c', 'd'], 2) =",
  chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)
);
