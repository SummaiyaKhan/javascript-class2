"use strict" // treat all JS code as new version: 

// alert("hello") // this is for brower and this is node.js 


// **************************************************************** DataTypes ****************************************************************//

// string => ""
// number => 2 to power 53
// bigint => this is used to big val of number
// boolean => true / false
// symbol => this is used to react component
// null  => object
// undefined => undefined




// *********************************************************** Example with datatype **********************************************************//

let dish1 = String("summai"); // String type
let dish2 = String("khan"); // String type
let dishQuantity = Number(2); // Number type
let address = Boolean(true); // Boolean type
let numberRange = BigInt(1245678910); // BigInt type

console.log(dish1);
console.log(dish2);
console.log(dishQuantity);
console.log(address);
console.log(numberRange);




// ******************************************************* Exmaple with experiment *************************************************************//

let book1 = String("summaiya");
let book2 = String("khan");
let book3 = Number(2);
let book4 = Boolean(true);
let book5 = null;
let book6;
let book7 = Number;
let book8 = undefined;

console.table([book1, book2, book3, book4, book5, book6, book7, book8]);



// How to cheack value of variable:

console.log(typeof book1);
console.log(typeof book2);
console.log(typeof book3);
console.log(typeof book4);
console.log(typeof book5);
console.log(typeof book6);
console.log(typeof book7);
console.log(typeof book8);




