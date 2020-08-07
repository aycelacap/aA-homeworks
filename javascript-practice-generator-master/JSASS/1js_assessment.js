 // Write a `String.prototype.realWordsInString(dictionary)` method, that returns
// an array containing the substrings of `string` that appear in `dictionary`.
// sorted alphabetically. This method does NOT return any duplicates.

String.prototype.realWordsInString = function(dictionary) {
    let subs = [];

    dictionary.forEach(word => {
        if (this.includes(word) && !subs.includes(word)) {
            subs.push(word)
        }
    });

    return subs.sort();
}

// Write a `String.prototype.symmetricSubstrings` method that returns an array
// of substrings which are palindromes in alphabetical order. Only include 
// substrings of length > 1.
// e.g. "cool".symmetricSubstrings() => ["oo"]

// String.prototype.reverse = function() {
//     let returnStr = "";
//     for (let i = this.length - 1; i > -1; i--) {
//         returnStr += this[i]
//     }
//     return returnStr;
// }

// String.prototype.symmetricSubstrings = function() {
//     const returnArr = [];
//     for (let i = 0; i < this.length - 1; i++) {
//         let tempStr = this[i];
//         for (let j = i + 1; j < this.length; j++) {
//             tempStr += this[j];
//             if (tempStr === tempStr.reverse()) {
//                 returnArr.push(tempStr);
//             }
//         }
//     }
//     return returnArr.sort();
// }



// String.prototype.reverse = function () {

//     let reversed = "";

//     for (let i = this.length - 1; i >= 0; i--) {
//         reversed += this[i];
//     }

//     return reversed;
// };

// String.prototype.symmetricSubstrings = function () {

//     const pals = [];

//     for (let i = 0; i < this.length - 1; i++) {
//             let sub = this[i]
//         for (j = i + 1; j < this.length; j++) {
//             sub += this[j]
//             if (sub === sub.reverse()) {
//                 pals.push(sub)
//             }
//         }
//     }
//     return pals.sort();
// }

String.prototype.reverse = function() {
    let reversed = "";

    for (let i = this.length - 1; i > -1; i--) {
        reversed += this[i];
    }

    return reversed;
}


String.prototype.symmetricSubstrings = function () {
    const pals = [];

    for (let i = 0; i < this.length - 1; i++) {
        let sub = this[i];
        for (let j = i + 1; j < this.length; j++) {
            sub += this[j]
            if (sub === sub.reverse()) {
                pals.push(sub)
            }
        }
    }

    return pals.sort();
}


// Write a function, `anagrams(str1, str2)`, that takes in two words and returns 
// a boolean indicating whether or not the words are anagrams. Anagrams are 
// words that contain the same characters but not necessarily in the same order. 
// Solve this without using Array.prototype.sort.
// 
// Examples:
// anagrams('listen', 'silent') => true
// anagrams('listen', 'potato') => false

function anagrams(str1, str2) {
    let letters = {};

    word1 = str1.split("")
    word2 = str2.split("")

    word1.forEach(char => {
        if (!letters[char]) letters[char] = 0;
        letters[char] += 1; 
    });

    word2.forEach(char => {
        if (!letters[char]) letters[char] = 0;
        letters[char] -= 1;
    });


    return Object.values(letters).every(val => val === 0);
}


// Write a function `titleize(str)` that capitalizes each word in a string like
// a book title. 
// Do not capitalize the following words (unless they are the first word in the 
// string): ["a", "and", "of", "over", "the"]

// function titleize(str) {
//     let tempArr = str.split(' '); // "the green cats" => The Green Cats
//     for (let i = 0; i < tempArr.length; i++) {
//         if (i === 0) {
//             tempArr[i] = tempArr[i][0].toUpperCase() + tempArr[i].substr(1);
//         } else if (tempArr[i] != 'a' && tempArr[i] != 'and' && tempArr[i] != 'of' && tempArr[i] != 'over' && tempArr[i] != 'the') {
//             tempArr[i] = tempArr[i][0].toUpperCase() + tempArr[i].substr(1);
//         }
//     }
//     return tempArr.join(" ");
// }

function capitalize(word) {
    let first = word[0].toUpperCase();
    let rest = word.slice(1).toLowerCase();
    return first + rest;
}

function titleize(str) {
    const littleWords = ["a", "and", "of", "over", "the"];
    let string = str.split(" ");
    let newTitle = [];

    string.forEach((word, idx) => {
        if (idx !== 0 && littleWords.includes(word)) {
            newTitle.push(word);
        } else {
            newTitle.push(capitalize(word));
        }
    })

    return newTitle.join(" ");
}


// Write an `Array.prototype.quickSort(callback)` method that quick sorts an array. 
// It should take an optional callback that compares two elements, returning -1 
// if the first element should appear before the second, 0 if they are equal, and
// 1 if the first element should appear after the second. Do NOT call the 
// built-in Array.prototype.sort method in your implementation.
//
// Here's a summary of the quick sort algorithm:
//
// Choose a pivot element, then iterate over the rest of the array, moving the 
// remaining elements on to the appropriate side of the pivot. Recursively quick 
// sort each side of the array until a base case is reached. 

// Array.prototype.quickSort = function (func) {
//     if (this.length <= 1) return this;

//     if (!func) func = (x, y) => {   
//         return x < y ? -1 : x > y ? 1 : 0;
//     }

//     const pivot = this[0];
//     let left = this.slice(1).filter((el) => func(el, pivot) === -1)
//     let right = this.slice(1).filter((el) => func(el, pivot) !== -1)
//     left = left.quickSort(func);
//     right = right.quickSort(func);

//     return left.concat([pivot]).concat(right)
// }


Array.prototype.quickSort = function(func) {
    if (this.length <= 1) return this;

    if (!func) func = (x, y) => {
        return x < y ? -1 : x > y ? 1 : 0;
    }

    const pivot = this[0];
    let left = this.slice(1).filter((el) => func(el, pivot) === -1)
    let right = this.slice(1).filter((el) => func(el, pivot) !== -1)
    left = left.quickSort(func);
    right = right.quickSort(func);

    return left.concat([pivot]).concat(right);
}

// Write a function `jumbleSort(string, alphabet)`.
// Jumble sort takes a string and an alphabet. It returns a copy of the string
// with the letters re-ordered according to their positions in the alphabet. If
// no alphabet is passed in, it defaults to normal alphabetical order (a-z).
//
// The English alphabet, in order, is 'abcdefghijklmnopqrstuvwxyz'
//
// **Do NOT use the built-in `Array.prototype.sort` in your implementation.**
//
// Example:
// jumbleSort("hello") => "ehllo"
// jumbleSort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'

function jumbleSort(string, alphabet) {
    alphabet = alphabet || 'abcdefghijklmnopqrstuvwxyz'.split("");
    string = string.split("")
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < string.length - 1; i ++) {
            let curr = string[i];
            let nextOne = string[i + 1];

            if (alphabet.indexOf(curr) > alphabet.indexOf(nextOne)) {
                [string[i], string[i + 1]] = [string[i + 1], string[i]];
                sorted = false;
            }
        }
    }
    return string.join("");
}

// Write a recursive function, `binarySearch(sortedArray, target)`, that returns
// the index of `target` in `sortedArray`, or -1 if it is not found. Do NOT use
// the built-in `Array.prototype.indexOf` or `Array.prototype.includes` methods 
// in your implementation.
//
// Here's a quick summary of the binary search algorithm:
//
// Start by looking at the middle item of the array. If it matches the target,
// return its index. Otherwise, recursively search either the left or the right
// half of the array until the target is found or the base case (empty array) is
// reached.

function binarySearch(sortedArray, target) {
    if (sortedArray.length === 0) return -1;

    const mid = Math.floor(sortedArray.length / 2);

    if (target === sortedArray[mid]) {
        return mid;
    } else if (target < sortedArray[mid]) {
        return binarySearch(sortedArray.slice(0, mid), target)
    } else if (target > sortedArray[mid]) {
        let res = binarySearch(sortedArray.slice(mid + 1), target)
        return res === -1 ? -1 : res + mid + 1
    }
}

// Write an `Array.prototype.mergeSort` method that merge sorts an array. It
// should take an optional callback that compares two elements, returning -1 if 
// the first element should appear before the second, 0 if they are equal, and 1 
// if the first element should appear after the second. Define and use a helper 
// method, `merge(left, right, comparator)`, to merge the halves. 
//
// **IMPORTANT: Make sure to use a function declaration (`function merge`) as
// opposed to a function expression (`const merge = function`) for `merge`. Do
// NOT use the built-in `Array.prototype.sort` method in your implementation.**
//
// Here's a summary of the merge sort algorithm:
//
// Split the array into left and right halves, then merge sort them recursively
// until a base case is reached. Use a helper method, merge, to combine the
// halves in sorted order, and return the merged array.

// Array.prototype.mergeSort = function (func) {
//     if (this.length <= 1) return this;

//     if (!func) func = (left, right) => {
//         return left < right ? -1 : left > right ? 1 : 0
//     }

//     const mid = Math.floor(this.length / 2);
//     const sortedLeft = this.slice(0, mid).mergeSort(func);
//     const sortedRight = this.slice(mid).mergeSort(func);
//     return merge(sortedLeft, sortedRight, func)
// };

// function merge(left, right, comparator) {
//     const merged = [];

//     while (left.length && right.length) {
//         if (comparator(left[0], right[0]) === -1) {
//             merged.push(left.shift());
//         } else if (comparator(left[0], right[0]) === 0) {
//             merged.push(left.shift());
//         } else if (comparator(left[0], right[0]) === 1) {
//             merged.push(right.shift());
//         };
//     }
//     return merged.concat(left, right);

// };

Array.prototype.mergeSort = function(func) {
    if (this.length <= 1) return this;

    if (!func) func = (x, y) => {
        return x < y ? -1 : x > y ? 1 : 0;
    }

    // if (!func) func = (left, right) => {
    //     return left < right ? -1 : left > right ? 1 : 0
    // }

    const mid = Math.floor(this.length / 2);
    const left = this.slice(0, mid).mergeSort(func);
    const right = this.slice(mid).mergeSort(func);
    return merge(left, right, func);
}

function merge(left, right, func) {
    const merged = [];

    while (left.length && right.length) {
        if (func(left[0], right[0]) === -1) {
            merged.push(left.shift());
        } else if (func(left[0], right[0]) === 0) {
            merged.push(left.shift());
        } else if (func(left[0], right[0]) === 1) {
            merged.push(right.shift());
        }
    }

    return merged.concat(left, right);
}



// Write an `Array.prototype.bubbleSort(callback)` method, that bubble sorts an array.
// It should take an optional callback that compares two elements, returning
// -1 if the first element should appear before the second, 0 if they are
// equal, and 1 if the first element should appear after the second. Do NOT call
// the built-in `Array.prototype.sort` method in your implementation. Also, do NOT
// modify the original array.
//
// Here's a quick summary of the bubble sort algorithm:
//
// Iterate over the elements of the array. If the current element is unsorted
// with respect to the next element, swap them. If any swaps are made before
// reaching the end of the array, repeat the process. Otherwise, return the
// sorted array.

// Array.prototype.bubbleSort = function (func) {

//     let resArr = this.slice()

//     if (!func) func = (x, y) => {
//         return x < y ? -1 : x > y ? 1 : 0;
//     }

//     let sorted = false;
//     while (!sorted) {
//         sorted = true;

//         for (let i = 0; i < resArr.length - 1; i ++) {
//             let curr = resArr[i];
//             let next = resArr[i + 1];

//             if (func(curr, next) === 1) {
//                 [resArr[i], resArr[i + 1]] = [resArr[i + 1], resArr[i]];
//                 sorted = false;
//             }
//         }
//     }


//     return resArr;
// }

Array.prototype.bubbleSort = function(func) {

    let resArr = this.slice();

    if (!func) func = (x, y) => {
        return x < y ? -1 : x > y ? 1 : 0;
    }

    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < resArr.length - 1; i++) {
            let curr = resArr[i];
            let nextOne = resArr[i + 1];

            if (func(curr, nextOne) === 1) {
                [resArr[i], resArr[i + 1]] = [resArr[i + 1], resArr[i]];
                sorted = false;
            }
        }
    }

    return resArr;
}


// Write a recursive function, `factorialsRec(num)`, that returns the first 
// `num` factorial numbers. Note that the 1st factorial number is 0!, which 
// equals 1. The 2nd factorial is 1!, the 3rd factorial is 2!, etc.

function factorialsRec(num) {
    if (num === 1) return [1];

    let facs = factorialsRec(num - 1);
    facs.push(facs[facs.length - 1] * (num - 1));
    return facs;
}

// Write a function `firstEvenNumbersSum(n)` that returns the sum of the
// first n even numbers recursively. Assume n > 0

function firstEvenNumbersSum(n) {
    if (n === 1) return 2;
    return 2 * n + firstEvenNumbersSum(n - 1);
}

// Write a function, `exponent(b, n)`, that calculates b^n recursively. 
// Your solution should accept negative values for n. Do NOT use ** or Math.pow

function exponent(b, n) {
    if (n === 0) return 1;
    
    if (n > 0) {
        return b * exponent(b, n - 1);
    } else if (n < 0) {
        return 1/b * exponent(b, n + 1);
    }
}

// Write a function, `fibsSum(n)`, that finds the sum of the first n
// fibonacci numbers recursively. Assume n > 0.
// Note that for this problem, the fibonacci sequence starts with [1, 1]. 

function fibsSum(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    return fibsSum(n - 1) + fibsSum(n - 2) + 1;
}

// know this
function fib(n) {
    if (n === 1) return 1;
    if (n === 2) return 1;

    return fib(n - 1) + fib(n - 2)
}

// Write a function, `deepDup(arr)`, that will perform a "deep" duplication of
// the array and any interior arrays. A deep duplication means that the array 
// itself, as well as any nested arrays (no matter how deeply nested) are duped 
// and are completely different objects in memory than those in the original 
// array.

// function deepDup(arr) {
//     return arr.map((el) => el instanceof Array ? deepDup(el) : el);
// }
function deepDup(arr) {
    return arr.map((el) => el instanceof Array ? deepDup(el) : el)
}


// Write a function, `digitalRoot(num)`. It should sum the digits of a positive
// integer. If the result is greater than 9 (i.e. more than one digit), sum the 
// digits of the resulting number. Keep repeating until there is only one digit 
// in the result, called the "digital root". 
// **Do not use string conversion within your method.** 
// For further explanation on the digital root concept, refer here: https://en.wikipedia.org/wiki/Digital_root
//
// You may wish to use a helper function, `digitalRootStep(num)` which performs
// one step of the process.

function digitalRoot(num) {
    return num < 10 ? num : digitalRoot(digitalRoot(Math.floor(num / 10)) + (num % 10))
}

// function digitalRoot(num) {
//     return num < 10 ? num : digitalRoot(digitalRoot(Math.floor(num / 10)) + (num % 10));
// }

// Write a recursive function `stringIncludeKey(string, key)` that takes in 
// a string to search and a key string. Return true if the string contains all 
// of the characters in the key in the same order that they appear in the key.
//
// stringIncludeKey("cadbpc", "abc") => true
// stringIncludeKey("cba", "abc") => false

function stringIncludeKey(string, key) {
    if (!key.length) return true;
    if (!string.length) return false;
    let char1 = string[0];
    if (key[0] === char1) key = key.slice(1);
    return stringIncludeKey(string.slice(1), key);
}

// function stringIncludeKey(string, key) {
//     if (!key.length) return true;

//     let nextKeyChar = key[0];
//     let keyIndex = string.indexOf(nextKeyChar);

//     if (keyIndex < 0) return false;
//     return stringIncludeKey(string.slice(keyIndex + 1), key.slice(1));
// };

// Write a recursive function `recSum(numArr)` that returns the sum of all
// elements in an array. Assume all elements are numbers.

function recSum(numArr) {
    if (!numArr.length) return 0;
    return numArr[0] + recSum(numArr.slice(1));
}

// Write a function `myReverse(array)` which returns the array in reversed
// order. Do NOT use the built-in `Array.prototype.reverse`.
// ex. myReverse([1,2,3]) => [3,2,1]

function myReverse(array) {
    let reversed = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }

    return reversed;
}

// Write a function, `doubler(arr)`, that returns a copy of the input array 
// with all elements doubled. You do not need to worry about invalid input.
//
// Example:
// doubler([1, 2, 3]) => [2, 4, 6]

function doubler(arr) {
    let doubled = [];

    arr.forEach(el => {
        doubled.push(el * 2);
    })

    return doubled;
}

// Write a function, `factors(num)`, that returns an array containing the factors
// of a number in ascending order.

function factors(num) {
    // const facts = Array.from(Array(num)).map( (el, idx) => idx + 1)
    // return facts.filter(el => num % el === 0);

    let facs = [];

    for (let i = 0; i <= num; i++) {
        if (num % i === 0) facs.push(i);
    }

    return facs;
}

// Write a function `primes(num)`, which returns an array of the first "num" primes.
// You may wish to use an `isPrime(num)` helper function.

function primes(num) {
    let primesArr = [];

    let i = 2

    while (primesArr.length < num) {
        if (isPrime(i)) primesArr.push(i);
        i += 1
    }

    return primesArr;

}

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}


// Write an `Array.prototype.myFlatten()` method which flattens a 
// multi-dimensional array into a one-dimensional array.
// Example:
// [["a"], "b", ["c", "d", ["e"]]].myFlatten() => ["a", "b", "c", "d", "e"]

Array.prototype.myFlatten = function() {
    let flattened = [];

    this.forEach((el) => {
        if (el instanceof Array) {
            flattened = flattened.concat(el.myFlatten());
        } else {
            flattened.push(el)
        }
    });

    return flattened;
};

// Write an `Array.prototype.myJoin(separator)` method, which joins the elements
// of an array into a string. If an argument is provided to `myJoin`, use that
// between each element. Otherwise, use an empty string.
// Do NOT call the built-in `Array.prototype.join` method.
// ex.
// [1, 2, 3].myJoin() => '123'
// [1, 2, 3].myJoin('$') => '1$2$3'

Array.prototype.myJoin = function(separator = '') {
    let newString = '';

   this.forEach((el, idx) => {
       newString += `${el}`
       if (idx < this.length - 1) newString += separator;
   })

    return newString;
}

// Write a `String.prototype.mySlice(startIdx, endIdx)` method. It should take 
// a start index and an (optional) end index and return a new string. Do NOT 
// use the built-in string methods `slice`, `substr`, or `substring`. 
// ex. 
// `abcde`.mySlice(2) => `cde`
// `abcde`.mySlice(1, 3) => `bc`

// String.prototype.mySlice = function (startIdx, endIdx) {
//     let slice = "";

//     if (!endIdx) {
//         endIdx = this.length;
//     }

//     for (let i = startIdx; i < end && i < this.length; i++) {
//         slice += this[i];
//     }

//     return slice;
// };


String.prototype.mySlice = function (startIdx, endIdx) {
    let slice = "";

    // !endIdx
    if (typeof endIdx === 'undefined') {
        endIdx = this.length
    }

    for (let i = startIdx; i < endIdx && i < this.length; i++) {
        slice += this[i];
    }

    return slice;
}

// String.prototype.slice = function (start, end) {
//     let slice = "";

//     for (let i = start; i < end && this.length; i++) {
//         slice += this[i];
//     }

//     return slice;
// }


// Write an `Array.prototype.dups` method that will return an object containing 
// the indices of all duplicate elements. The keys are the duplicate elements; 
// the values are arrays of their indices in ascending order
//
// Example: 
// [1, 3, 4, 3, 0, 3, 0].dups => { 3: [1, 3, 5], 0: [4, 6] }

// Array.prototype.dups = function () {
//     const count = {};
//     const dups = {};
//     this.forEach((el, idx) => {b
//         if (count[el]) {
//             count[el].push(idx);
//         } else {
//             count[el] = [idx];
//         }
//     });
//     const keys = Object.keys(count);
//     keys.forEach((key) => {
//         if (count[key].length > 1) {
//             dups[key] = count[key];
//         }
//     });
//     return dups;
// };
// console.log([1, 4, 1, 5, 6, 5].dups());


// Array.prototype.dups =  function() {

//     const count = {};
//     const duples = {};

//     this.forEach((el, idx) => {
//         if (count[el]) {
//             count[el].push(idx);
//         } else {
//             count[el] = [idx]
//         }
//     });


//    const keys = Object.keys(count);
//    keys.forEach((key) => {
//     if (count[key].length > 1) {
//         duples[key] = count[key]
//     }
//    });

//     return duples;
// };


// Array.prototype.dups = function() {
//     const count = {};
//     const duples = {};

//     this.forEach((el, idx) => {
//         if (count[el]) {
//             count[el].push(idx);
//         } else {
//             count[el] = [idx];
//         }
//     });

//     const keys = Object.keys(count)
//     keys.forEach((key) => {
//         if (count[key].length > 1) {
//             duples[key] = count[key];
//         }
//     });

//     return duples;
// }


Array.prototype.dups = function() {
    const count = {};
    const duples = {};

    this.forEach((el, idx) => {
        if (count[el]) {
            count[el].push(idx)
        } else {
            count[el] = [idx];
        }
    });

    const keys = Object.keys(count);
    keys.forEach((key) => {
        if (count[key].length > 1) {
            duples[key] = count[key]
        }
    });

    return duples;
}

// Write a function `myFind(array, callback)` that returns the first
// element for which the callback returns true. If none is found, the 
// function should return `undefined`
// Do not use the built-in `Array.prototype.find` method.

function myFind(array, callback) {

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i];
        }
    }
};

// function myFind(arr, callback) { //i think you cant use forEach in this one

//     arr.forEach((el) => {
//         if (callback(el)) {
//             return el;
//         }
//     })
// }

// Write an `Array.prototype.twoSum` method, that finds all pairs of positions 
// where the elements at those positions sum to zero.

// NB: ordering matters. Each pair must be sorted with the smaller index
// before bigger index. The array of pairs must be sorted
// "dictionary-wise":
// [0, 2] before [1, 2] (smaller first elements come first)
// [0, 1] before [0, 2] (then smaller second elements come first)

Array.prototype.twoSum = function () {
    const pairs = [];

    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0 && i < j) {
                pairs.push([i, j]);
            }
        }
    }

    return pairs;
}

// Write an `Array.prototype.myRotate(times)` method which rotates the array by 
// the given argument. If no argument is given, rotate the array by one position. 
// ex.
// ["a", "b", "c", "d"].myRotate() => ["b", "c", "d", "a"]
// ["a", "b", "c", "d"].myRotate(2) => ["c", "d", "a", "b"]
// ["a", "b", "c", "d"].myRotate(-1) => ["d", "a", "b", "c"]

// Array.prototype.myRotate = function (times = 1) {
//     const rotated = this.slice();
//     if (times > 0) {
//         for (let i = 0; i < times; i++) {
//             rotated.push(rotated.shift());
//         }
//     } else if (times < 0) {
//         for (let i = 0; i < -(times); i++) {
//             rotated.unshift(rotated.pop());
//         }
//     }
//     return rotated;
// }

// Array.prototype.myRotate = function(times = 1) {
//     const rotated = this.slice();

//     if (times > 0) {
//         for (let i = 0; i < times; i++) {
//             rotated.push(rotated.shift());
//         }
//     } else if (times < 0) {
//         for (let i = 0; i < -(times); i++) {
//             rotated.unshift(rotated.pop());
//         }
//     }

//     return rotated;
// }

// Array.prototype.myRotate = function(times = 1) {
//     const rotated = this.slice();
    
//     if (times > 0) {
//         for (let i = 0; i < times; i++) {
//             rotated.push(rotated.shift());
//         } 
//     } else if (times < 0) {
//         for (let i = 0; i < -(times); i++) {
//             rotated.unshift(rotated.pop());
//         }
//     }

//     return rotated;
// }

Array.prototype.myRotate = function(times = 1) {
    let rotated = this.slice();

    if (times > 0) {
        for (let i = 0; i < times; i++) {
            rotated.push(rotated.shift());
        }
    } else if (times < 0) {
        for (let i = 0; i < -(times); i++) {
            rotated.unshift(rotated.pop());
        }
    }

    return rotated;
};




// Write an `Array.prototype.median` method that returns the median of elements
// in an array. If the length is even, return the average of the middle two 
// elements.

// Array.prototype.median = function () {
//     if (!this.length) return null;

//     const sorted = this.sort();
//     const mid = Math.floor(this.length / 2);

//     if (this.length % 2 !== 0) {
//         return sorted[mid]
//     } else {
//         return (sorted[mid] + sorted[mid -1]) / 2; 
//     }
// };


Array.prototype.median = function() {
    if (!this.length) return null;

    const sorted = this.sort();
    const midIdx = Math.floor(this.length / 2)

    if (this.length % 2 !== 0) {
        return sorted[midIdx]
    } else {
        return (sorted[midIdx] + sorted[midIdx - 1]) / 2
    }
};

// Write a function `transpose(arr)` that returns a 2d array transposed.
// e.g. transpose([[1,2],[3,4],[5,6]]) => [[1,3,5],[2,4,6]]

function transpose(matrix) {
    const transposed = [];

    for (let i = 0; i < matrix[0].length; i++) {
        transposed.push([]);
        for (let j = 0; j < matrix.length; j++) {
           transposed[i][j] = matrix[j][i];
        }
    }

    return transposed;
}

// Write a `Function.prototype.myCurry(numArgs)` method that collects arguments 
// until the number of arguments collected is equal to the original `numArgs` 
// value and then invokes the curried function.

Function.prototype.myCurry = function(numArgs) {
    let nums = [];
    let that = this;

    return function _myCurry(el) {
        nums.push(el);

        if (nums.length < numArgs) {
            return _myCurry;
        } else {
            return that(...nums);
        }
    };
};

// Write a `Function.prototype.myCall(context)` method, that accepts an object, 
// and any number of additional arguments. It should call the function with the
// passed-in object as `this`, also passing the remaining arguments. Do NOT use
// the built-in `Function.prototype.call` or `Function.prototype.apply` methods 
// in your implementation.

Function.prototype.myCall = function(context, ...args) {
    return this.bind(context)(...args);
}

// Write a `Function.prototype.myApply(context, argsArr)` method that accepts an
// object and an array of additional arguments. It should call the function with 
// the passed-in object as `this`, also passing the arguments array. Do NOT use 
// the built-in `Function.prototype.apply` or `Function.prototype.call` methods
// in your implementation.

Function.prototype.myApply = function(context, argsArr = []) {
    return this.bind(context)(...argsArr);
}

// Write a `Function.prototype.myBind(context)` method. It should return a copy
// of the original function, where `this` is set to `context`. It should allow 
// arguments to the function to be passed both at bind-time and call-time.
// Note that you are NOT allowed to use ES6 arrow syntax for this problem.

Function.prototype.myBind = function(context, ...bargs) {
    const that = this;

    return function(...cargs) {
        return that.apply(context, bargs.concat(cargs));
    }
};

// Write a `Function.prototype.inherits(ParentClass)` method. It should extend
// the methods of `ParentClass.prototype` to `ChildClass.prototype`.
//
// **Do NOT use `Object.create`, `Object.assign`, `Object.setPrototypeOf`, or
// modify the `__proto__` property of any object directly.**

Function.prototype.inherits = function(ParentClass) {
    function Surrogate () {};
    Surrogate.prototype = ParentClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}


// Write an `Array.prototype.mySome(callback)` method which takes a callback 
// and returns true if the callback returns true for ANY element in the array. 
// Otherwise, return false. 
// Use the `Array.prototype.myEach` method you defined above. Do NOT call the
// built-in `Array.prototype.some` or `Array.prototype.forEach` methods.

Array.prototype.mySome = function (callback) {
    let some = false;

    this.myEach((el) => {
        if (callback(el)) return some = true;
    })

    return some;
}

// Write an `Array.prototype.myReduce(callback, acc)` method which takes a 
// callback and an optional argument of a default accumulator. If myReduce only 
// receives one argument, then use the first element of the array as the default 
// accumulator. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call in the built-in `Array.prototype.reduce` or `Array.prototype.forEach` 
// methods.

Array.prototype.myReduce = function(callback, acc) {

    let that = this;

    if (!acc) {
        acc = that.shift();
    }

    that.myEach((el) => {
        acc = callback(acc, el)
    })

    return acc;
}

// Write an `Array.prototype.myEvery(callback)` method that returns true 
// if the callback returns true for every element in the array, and otherwise 
// returns false. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call the built-in `Array.prototype.every` or `Array.prototype.forEach` 
// methods.

Array.prototype.myEvery = function (callback) {
    let every = true;

    this.myEach((el) => {
        if (!callback(el)) {
            every = false;
        }
    })

    return every;
};

// Write an `Array.prototype.myReject(callback)` method. Return a new array, 
// which contains only the elements for which the callback returns false. 
// Use the `Array.prototype.myEach` method you defined above. Do NOT call the 
// built-in `Array.prototype.filter` or `Array.prototype.forEach` methods.
// ex.
// [1,2,3].myReject( (el) => el > 2 ) => [1, 2]

Array.prototype.myReject = function (callback) {
    let rejected = [];

    this.myEach((el) => {
        if (!callback(el)) {
            rejected.push(el);
        }
    });

    return rejected;
};

// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. Do NOT use the built-in
// `Array.prototype.forEach`.

Array.prototype.myEach = function(callback) {

    for (let i= 0; i < this.length; i++) {
        callback(this[i]);
    }
};

// Write an `Array.prototype.myFilter(callback)` that takes a callback and 
// returns a new array which includes every element for which the callback 
// returned true. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call the built-in `Array.prototype.filter` or `Array.prototype.forEach` 
// methods.

Array.prototype.myFilter = function (callback) {
    let filtered = [];

    this.myEach((el) => {
        if (callback(el)) {
            filtered.push(el)
        }
    });

    return filtered;
};


