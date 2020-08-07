// Write a `String.prototype.realWordsInString(dictionary)` method, that returns
// an array containing the substrings of `string` that appear in `dictionary`.
// sorted alphabetically. This method does NOT return any duplicates.

String.prototype.realWordsInString = function(dictionary) {
    let realWords = [];

    dictionary.forEach(word => {
        if (this.includes(word)) {
            realWords.push(word)
        }
    });

    return realWords.sort();
}

// Write a `String.prototype.symmetricSubstrings` method that returns an array
// of substrings which are palindromes in alphabetical order. Only include 
// substrings of length > 1.
// e.g. "cool".symmetricSubstrings() => ["oo"]

// String.prototype.symmetricSubstrings = function() {
//     let pals = [];

//     for (let i = 0; i < this.length; i++) {
//         for (let j = i + 1; j <= this.length; j++) {
//             // since slicing is non-inclusive, we need to change our loop;
//             let sub = this.slice(i, j);
//             let reversed = sub.split("").reverse().join("");

//             if (sub === reversed && sub.length > 1) {
//                 pals.push(sub)
//             }
//         }
//     }

//     return pals.sort();
// }

String.prototype.symmetricSubstrings = function() {
    let pals = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j <= this.length; j++) {
            let sub = this.slice(i, j);
            let reversed = sub.split("").reverse().join("");

            if (sub === reversed && sub.length > 1) {
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

    let count = {};

    let word1 = str1.split("");
    let word2 = str2.split("")

    word1.forEach(el => {
        if (!count[el]) count[el] = 0
        count[el] += 1
    })
    word2.forEach(el => {
        if (!count[el]) count[el] = 0
        count[el] -= 1
    })

    return Object.values(count).every(val => val === 0);
};


// Write a function `titleize(str)` that capitalizes each word in a string like
// a book title. 
// Do not capitalize the following words (unless they are the first word in the 
// string): ["a", "and", "of", "over", "the"]

function titleize(str) {
    const littleWords = ["a", "and", "of", "over", "the"]
    let words = str.split(" ");

    let titleized = words.map((word, idx) => {
        if (idx !== 0 && littleWords.includes(word)) {
            return word;
        } else {
            return capitalize(word)
        }
    });

    return titleized.join(" ");
}

function capitalize(word) {

    let first = word[0].toUpperCase();
    let rest = word.slice(1).toLowerCase();

    return first + rest;
}
