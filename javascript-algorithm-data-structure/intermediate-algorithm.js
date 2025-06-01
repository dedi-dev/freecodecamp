function sumAll(arr) {
  let lowest = 0;
  let highest = 0;
  if (arr[0] < arr[1]) {
    lowest = arr[0];
    highest = arr[1];
  } else {
    lowest = arr[1];
    highest = arr[0];
  }
  let sum = 0;
  for (let i = lowest; i <= highest; i++) {
    sum += i;
  }
  return sum;
}

console.log("sumAll([1, 4]) :", sumAll([1, 4]));

function diffArray(arr1, arr2) {
  const newArr = [];
  let lowestLength = arr1.length;
  let highestLength = arr2.length;
  if (arr1.length > arr2.length) {
    lowestLength = arr2.length;
    highestLength = arr1.length;
  }

  for (let i = 0; i < highestLength; i++) {
    if (arr1.length > i && !arr2.includes(arr1[i])) {
      newArr.push(arr1[i])
    }
    if (arr2.length > i && !arr1.includes(arr2[i])) {
      newArr.push(arr2[i])
    }
  }
  return newArr;
}

console.log("diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) :", diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

function destroyer(arr, ...rest) {
  let newArr = [];
  for (let value of arr) {
    if (!rest.includes(value)) newArr.push(value)
  }
  return newArr;
}

console.log("destroyer([1, 2, 3, 1, 2, 3], 2, 3) :", destroyer([1, 2, 3, 1, 2, 3], 2, 3));

function whatIsInAName(collection, source) {
  let newArr = [];
  for (let obj of collection) {
    let hasAllSameKeyValue = true;
    for (let key in source) {
      if (!obj.hasOwnProperty(key)) {
        hasAllSameKeyValue = false;
      } else if (obj[key] !== source[key]) {
        hasAllSameKeyValue = false;  
      }
    }
    if (hasAllSameKeyValue) {
      newArr.push(obj)
    }
  }
  return newArr;
}

const wIIAN = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
console.log('whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) :', wIIAN);

function spinalCase(str) {
  return str.split(/[^a-zA-Z]/).reduce((result, word, index) => {
    let newWord = word.split('').reduce((acc, char, idx) => {
        if (idx !== 0 && /[A-Z]/.test(char)) {
            return acc + `-${char}`
        }
        return acc + char;
    }, "");
    if (index !== 0) {
        return result + `-${newWord}`
    }
    return result + newWord;
  }, "").toLowerCase();
}

console.log("spinalCase('AllThe-small Things') :", spinalCase('AllThe-small Things'));