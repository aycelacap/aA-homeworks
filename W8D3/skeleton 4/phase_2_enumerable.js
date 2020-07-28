Array.prototype.myReduce = function(callback, initialVal) {
    let arr = this;
    if (initialVal === undefined) {
        initialVal = arr[0];
        arr = arr.slice(1);
    }
    let acc = initialVal;

    for (let i = 0; i < arr.length; i++) {
        acc = callback(acc, arr[i]);
    }


    return acc;
};

function add(a, b) {
    return  a + b;
}


console.log([1, 2, 3].myReduce( (acc, el) => acc + el ));




// // without initialValue
// [1, 2, 3].myReduce(function (acc, el) {
//     return acc + el;
// }); // => 6

// // with initialValue
// [1, 2, 3].myReduce(function (acc, el) {
//     return acc + el;
// }, 25); // => 31