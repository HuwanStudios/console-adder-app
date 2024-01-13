//1.A I will declare two variables, why?
//1.B Declare one variable through prompt
//1.C Use the prompt() to ask for user's input
//1.D Declare variable give it the value of user's inout
const distanceInKilometers = prompt("");
const distanceOfMtoK = 1.60934;

//2.A I will add-convert the two variables, why?
//2.B I will rewrite this number up to two decimal places
//2.C I will pass the conversion through a new variable
const converter = (distanceInKilometers / distanceOfMtoK).toFixed(2);

//3.A I will declare a variable through string interpolation
//3.B I will pass two variables through template literals (v1, v3)
const displayMessage = `The distance of ${distanceInKilometers} kms is equal to ${converter}`;

//console.log()result) // number + string
console.log(displayMessage);

//console.log(typeof "") result // of data type 
console.log(typeof displayMessage);


//const roundedNumber = parseFloat || Number (displayMessage);
//Pass Number through to retrieve only the number and change data type 
const roundedNumber = Number(converter);
//console.log()result) // number 
console.log(roundedNumber);
