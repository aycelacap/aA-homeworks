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
            if (this[i] + this[j] === 0) pairs.push([i, j]);
        }
    }

    return pairs;
};

// Write a `String.prototype.realWordsInString(dictionary)` method, that returns
// an array containing the substrings of `string` that appear in `dictionary`.
// sorted alphabetically. This method does NOT return any duplicates.

String.prototype.realWordsInString = function (dictionary) {
    const realWords = [];

    dictionary.forEach((word) => {
        if (this.includes(word)) realWords.push(word);
    });

    return realWords.sort();
};

// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. Do NOT use the built-in
// `Array.prototype.forEach`.

Array.prototype.myEach = function (callback) {

    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }

};

// Write an `Array.prototype.mySome(callback)` method which takes a callback 
// and returns true if the callback returns true for ANY element in the array. 
// Otherwise, return false. 
// Use the `Array.prototype.myEach` method you defined above. Do NOT call the
// built-in `Array.prototype.some` or `Array.prototype.forEach` methods.

Array.prototype.mySome = function (callback) {
    let some = false;

    this.myEach((el) => {
        if (callback(el)) some = true;
    })

    return some;
};


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

Array.prototype.mergeSort = function (func) {
    if (this.length <= 1) return this;

    if (!func) func = (x, y) => {
        return x < y ? -1 : x > y ? 1 : 0;
    }

    const mid = Math.floor(this.length / 2);
    const left = this.slice(0, mid).mergeSort(func);
    const right = this.slice(mid).mergeSort(func);

    return merge(left, right, func);
};

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

    return merged.concat(left, right)
};

// Write a `Function.prototype.inherits(ParentClass)` method. It should extend
// the methods of `ParentClass.prototype` to `ChildClass.prototype`.
//
// **Do NOT use `Object.create`, `Object.assign`, `Object.setPrototypeOf`, or
// modify the `__proto__` property of any object directly.**

// Function.prototype.inherits = function (ParentClass) {
//     function Surrogate () {};
//     Surrogate.prototype = Parent.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this;
// }


// Function.prototype.inherits = function (ParentClass) {
//     function Surrogate() {};
//     Surrogate.prototype = ParentClass.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.contructor = this;
// };


// Function.prototype.inherits = function (ParentClass) {
//     function Surrogate () {};
//     Surrogate.prototype = ParentClass.prototype;
//     this.prototype = new Surrogate;
//     this.prototype.contructor = this;
// };

// Function.prototype.inherits = function (ParentClass) {
//     function Surrogate () {};
//     Surrogate.prototype = ParentClass.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this;
// };

// Function.prototype.inherits = function (ParentClass) {
//     function Surrogate () {};
//     Surrogate.prototype = ParentClass.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.contructor = this; 
// };

// Function.prototype.inherits = function (ParentClass) {
//     function Surrogate () {};
//     Surrogate.prototype = ParentClass.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this;
// }

// Function.prototype.inherits = function (ParentClass) {
//     function Surrogate () {};
//     Surrogate.prototype = ParentClass.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this;
// };

Function.prototype.inherits = function (ParentClass) {
    function Surrogate () {};
    Surrogate.prototype = ParentClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};

// Write a `Function.prototype.myCurry(numArgs)` method that collects arguments 
// until the number of arguments collected is equal to the original `numArgs` 
// value and then invokes the curried function.

// Function.prototype.myCurry = function (numArgs) {
//     let nums = [];
//     let that = this;

//     return function _myCurry(el) {
//         nums.push(el);
//         if (nums.length < numArgs) {
//             return _myCurry;
//         } else {
//             return that(...nums);
//         }
//     };
// };

// Function.prototype.myCurry = function (numArgs) {

//     let nums = [];
//     let that = this; 

//     return _myCurry = function (el) {
//         nums.push(el);
//       if (nums.length < numArgs) {
//           return _myCurry;
//       } else {
//           return that(...nums);
//       }
//     }
// };


// Function.prototype.myCurry = function (numArgs) {
//     let nums = [];
//     let that = this;

//     return _myCurry = function (el) {
//         nums.push(el);

//         if (nums.length < numArgs) {
//             return _myCurry;
//         } else {
//             return that(...nums);
//         }
//     };
// };








// Write a `Function.prototype.myCall(context)` method, that accepts an object, 
// and any number of additional arguments. It should call the function with the
// passed-in object as `this`, also passing the remaining arguments. Do NOT use
// the built-in `Function.prototype.call` or `Function.prototype.apply` methods 
// in your implementation.


Function.prototype.myCall = function (context, ...args) {
    return this.bind(context)(...args);
};
