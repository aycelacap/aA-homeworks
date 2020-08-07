// Write an `Array.prototype.myReduce(callback, acc)` method which takes a 
// callback and an optional argument of a default accumulator. If myReduce only 
// receives one argument, then use the first element of the array as the default 
// accumulator. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call in the built-in `Array.prototype.reduce` or `Array.prototype.forEach` 
// methods.

Array.prototype.myReduce = function(callback, acc) {
    let that = this.slice();

    
    if (!acc) {
        acc = that.shift();
    }

    that.myEach((el) => {
        acc = callback(acc, el)
    })

    return acc;
}

// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. Do NOT use the built-in
// `Array.prototype.forEach`.

Array.prototype.myEach = function(callback) {

    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
};

// Write an `Array.prototype.myReject(callback)` method. Return a new array, 
// which contains only the elements for which the callback returns false. 
// Use the `Array.prototype.myEach` method you defined above. Do NOT call the 
// built-in `Array.prototype.filter` or `Array.prototype.forEach` methods.
// ex.
// [1,2,3].myReject( (el) => el > 2 ) => [1, 2]

Array.prototype.myReject = function(callback) {
    let rejected = [];

    this.myEach((el) => {
        if (!callback(el)) {
            rejected.push(el)
        }
    });

    return rejected;
}

// Write an `Array.prototype.myFilter(callback)` that takes a callback and 
// returns a new array which includes every element for which the callback 
// returned true. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call the built-in `Array.prototype.filter` or `Array.prototype.forEach` 
// methods.

Array.prototype.myFilter = function(callback) {
    let filtered = [];

    this.myEach((el) => {
        if (callback(el)) {
            filtered.push(el)
        }
    });

    return filtered;
}

// Write an `Array.prototype.myEvery(callback)` method that returns true 
// if the callback returns true for every element in the array, and otherwise 
// returns false. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call the built-in `Array.prototype.every` or `Array.prototype.forEach` 
// methods.

Array.prototype.myEvery = function(callback) {
    let every = true;

    this.myEach((el) => {
        if (!callback(el)) return every = false;
    })

    return every;
}


// Write an `Array.prototype.mySome(callback)` method which takes a callback 
// and returns true if the callback returns true for ANY element in the array. 
// Otherwise, return false. 
// Use the `Array.prototype.myEach` method you defined above. Do NOT call the
// built-in `Array.prototype.some` or `Array.prototype.forEach` methods.


Array.prototype.mySome = function(callback) {
    let some = false; 

    this.myEach((el) => {
        if (callback(el)) return some = true;
    });

    return some;
}