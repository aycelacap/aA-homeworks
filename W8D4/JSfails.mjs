// function mysteryScoping1() {
//     var x = 'out of block';
//     if (true) {
//       var x = 'in block';  
//       console.log(x);
//     }
//     console.log(x);
//   }

// mysteryScoping1();

// the function above will throw an error because we have to variables named x. WRONG
// the above code works because both variables are in different scopes


// function mysteryScoping2() {
//     const x = 'out of block';
//     if (true) {
//       const x = 'in block';  
//       console.log(x);
//     }
//     console.log(x);
//   }

// mysteryScoping2();

// ay! this one works too!



// function mysteryScoping3() {
//     const x = 'out of block';
//     if (true) {
//       var x = 'in block';  
//       console.log(x);
//     }
//     console.log(x);
//   }

// the code above will throw an error
// we have a SyntaxError and a ReferenceError


// function mysteryScoping4() {
//     let x = 'out of block';
//     if (true) {
//       let x = 'in block';  
//       console.log(x);
//     }
//     console.log(x);
//   }

//   mysteryScoping4();

//   let can declare a variable of the same name. This code works bc the let variables are separated by scope


// function mysteryScoping5() {
//     let x = 'out of block';
//     if (true) {
//       let x = 'in block';  
//       console.log(x);
//     }
//     let x = 'out of block again';
//     console.log(x);
//   }

// node wont allow us to create two let variables of the same name in the same scope. this will throw an error

// ('verb', 'adjective', 'noun') => { 

// }

function madLib('verb', 'adjective', 'noun') {
    let verbu = verb.toUpperCase
    let adju = adjective.toUpperCase
    let nounu = nounu.toUpperCase
    console.log `we shall ${verbu} the ${adju} ${nounu}`;
};

function isSubtring()
