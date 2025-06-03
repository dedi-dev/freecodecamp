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

console.log('sumAll([1, 4]) :', sumAll([1, 4]));

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
      newArr.push(arr1[i]);
    }
    if (arr2.length > i && !arr1.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

console.log(
  'diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) :',
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
);

function destroyer(arr, ...rest) {
  let newArr = [];
  for (let value of arr) {
    if (!rest.includes(value)) newArr.push(value);
  }
  return newArr;
}

console.log(
  'destroyer([1, 2, 3, 1, 2, 3], 2, 3) :',
  destroyer([1, 2, 3, 1, 2, 3], 2, 3)
);

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
      newArr.push(obj);
    }
  }
  return newArr;
}

const wIIAN = whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' }
);
console.log(
  'whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) :',
  wIIAN
);

function spinalCase(str) {
  return str
    .split(/[^a-zA-Z]/)
    .reduce((result, word, index) => {
      let newWord = word.split('').reduce((acc, char, idx) => {
        if (idx !== 0 && /[A-Z]/.test(char)) {
          return acc + `-${char}`;
        }
        return acc + char;
      }, '');
      if (index !== 0) {
        return result + `-${newWord}`;
      }
      return result + newWord;
    }, '')
    .toLowerCase();
}

console.log(
  "spinalCase('AllThe-small Things') :",
  spinalCase('AllThe-small Things')
);

/**
 *
 * @param {string} str
 * @returns
 */
function translatePigLatin(str) {
  if (str.match(/^[aiueo]/i)) {
    return str + 'way';
  }
  let listVowel = str.match(/[aiueo]/i);
  if (listVowel != null) {
    const firstVowelIdx = listVowel.index;
    return str.slice(firstVowelIdx) + str.slice(0, firstVowelIdx) + 'ay';
  } else {
    return str + 'ay';
  }
}

console.log('translatePigLatin("rhythm") :', translatePigLatin('rhythm'));
console.log('translatePigLatin("arahythm") :', translatePigLatin('arahythm'));
console.log('translatePigLatin("glove") :', translatePigLatin('glove'));
console.log(
  'translatePigLatin("paragraphs") :',
  translatePigLatin('paragraphs')
);

/**
 * 
 * @param {string} str 
 * @param {string} before 
 * @param {string} after 
 * @returns 
 */
function myReplace(str, before, after) {
  const matching = str.match(before);
  if (matching != null) {
    if (/^[A-Z]/.test(before)) {
      const replacer = after.substring(0, 1).toUpperCase() + after.substring(1);
      return str.replace(before, replacer);
    } else {
      const replacer = after.substring(0, 1).toLowerCase() + after.substring(1);
      return str.replace(before, replacer);
    }
  }
  return str;
}

console.log('myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped") :', myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log('myReplace("He is Sleeping on the couch", "Sleeping", "sitting") :', myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));


/**
 * 
 * @param {string} str 
 * @returns 
 */
function pairElement(str) {
  const result = [];
  str.split("").forEach((char) => {
    switch (char) {
      case "A":
        result.push(["A", "T"])
        break;
      case "T":
        result.push(["T", "A"])
        break;
      case "G":
        result.push(["G", "C"])
        break;
      case "C":
        result.push(["C", "G"])
        break;
      default:
        break;
    }
  })
  return result;
}

console.log('pairElement("GCG") :', pairElement("GCG"));
console.log('pairElement("TTGAG") :', pairElement("TTGAG"));

/**
 * 
 * @param {string} str 
 * @returns 
 */
function fearNotLetter(str) {
  let result = undefined;
  const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
  const rearrangeStr = str.toLowerCase().split('').sort((a,b) => {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  const idxFirstChar = alphabet.indexOf(rearrangeStr[0]);
  const idxLastChar = alphabet.indexOf(rearrangeStr[rearrangeStr.length-1]);
  const strObj = str.split('').reduce((obj, char) => {
    return {...obj, [char]: char};
  }, {})
  const targetRange = alphabet.slice(idxFirstChar, idxLastChar+1);
  for (const char of targetRange) {
    if (!strObj.hasOwnProperty(char)) {
      return char;
    }
  }
  return result;
}

console.log('fearNotLetter("cbad") :', fearNotLetter("cbad"));
console.log('fearNotLetter("abce") :', fearNotLetter("abce"));