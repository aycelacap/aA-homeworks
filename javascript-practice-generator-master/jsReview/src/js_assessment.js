// Write a function, `deepDup(arr)`, that will perform a "deep" duplication of
// the array and any interior arrays. A deep duplication means that the array 
// itself, as well as any nested arrays (no matter how deeply nested) are duped 
// and are completely different objects in memory than those in the original 
// array.

function deepDup(arr) {
  // return arr.map((el) => { return el instanceof Array ? deepDup(el) : el })

  const duped = [];
  

  arr.forEach( (el) => {
    if (el  instanceof Array) {
      duped.push(deepDup(el));
    } else {
      duped.push(el);
    }
  })

  return duped;
}

// Write an `Array.prototype.twoSum` method, that finds all pairs of positions 
// where the elements at those positions sum to zero.

// NB: ordering matters. Each pair must be sorted with the smaller index
// before bigger index. The array of pairs must be sorted
// "dictionary-wise":
// [0, 2] before [1, 2] (smaller first elements come first)
// [0, 1] before [0, 2] (then smaller second elements come first)

Array.prototype.twoSum = function() {
  const pairs = [];

  for (let i = 0; i < this.length; i++) {
    for ( let j = 0; j < this.length; j++) {
      if (this[i] + this[j] === 0 && i < j) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
}

// Write a `String.prototype.symmetricSubstrings` method that returns an array
// of substrings which are palindromes in alphabetical order. Only include 
// substrings of length > 1.
// e.g. "cool".symmetricSubstrings() => ["oo"]

String.prototype.symmetricSubstrings = function() {
  const symmSubs = [];

  for (let i = 0; i < this.length; i++) {
    for(let j = i + 1; j <= this.length; j++) {
      let sub = this.slice(i, j);
      let reversed = sub.split('').reverse().join('');

      if(sub === reversed && sub.length > 1) {
        symmSubs.push(sub);
      }
    }
  }

  return symmSubs.sort();
}

// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. Do NOT use the built-in
// `Array.prototype.forEach`.

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

// Write an `Array.prototype.myReduce(callback, acc)` method which takes a 
// callback and an optional argument of a default accumulator. If myReduce only 
// receives one argument, then use the first element of the array as the default 
// accumulator. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call in the built-in `Array.prototype.reduce` or `Array.prototype.forEach` 
// methods.

Array.prototype.myReduce = function(cb, acc) {
  const arr = this.slice();
  // acc typeof 'undefined'


  if(!acc) {
    acc = arr.shift();
  }

  arr.myEach((el) => {
    acc = cb(acc, el);
  })

  return acc;
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

function comp(x, y) {
  if(x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else {
    return 0;
  }
};

Array.prototype.bubbleSort = function(cb) {
  const arr = this.slice();

  if(!cb) {
    cb = comp;
  }

  let sorted = false;

  while(!sorted) {
    sorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if(cb(arr[i], arr[i + 1]) === 1) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
  }

  return arr;
}


// Write a `Function.prototype.inherits(ParentClass)` method. It should extend
// the methods of `ParentClass.prototype` to `ChildClass.prototype`.
//
// **Do NOT use `Object.create`, `Object.assign`, `Object.setPrototypeOf`, or
// modify the `__proto__` property of any object directly.**


Function.prototype.inherits = function(ParentClass) {
  function Surrogate() {};
  Surrogate.prototype = ParentClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}


// Write a `Function.prototype.myCurry(numArgs)` method that collects arguments 
// until the number of arguments collected is equal to the original `numArgs` 
// value and then invokes the curried function.

Function.prototype.myCurry = function(numArgs) {
  let that = this;
  const args = [];

  function _curry(arg) {
    args.push(arg);

    if (args.length < numArgs) {
      return _curry;
    } else {
      // return that(...args);
      return that.apply(null, args)
    }
  }

  return _curry;
}


// Write a `Function.prototype.myCall(context)` method, that accepts an object, 
// and any number of additional arguments. It should call the function with the
// passed-in object as `this`, also passing the remaining arguments. Do NOT use
// the built-in `Function.prototype.call` or `Function.prototype.apply` methods 
// in your implementation.



Function.prototype.myCall = function(ctx, ...args) {
  const bound = this.bind(ctx);
  return bound(...args);
}
