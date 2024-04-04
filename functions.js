/*
function introduction(name, lang) {
  console.log("Hello");
  console.log(`My name is ${name}`);
  console.log(`I like ${lang}`);
}

introduction("Ivo", "JavaScript");
introduction("John", "Java");
introduction("Alex", "C++");
*/

/*
function sum(a, b) {
  console.log("In this code we are summing up to 2 values");
  return a + b;
}

console.log(sum(4, 5));
console.log(sum(6, 7));
*/

/*
function compare(a, b) {
  if (a > b) {
    return "First number is bigger";
  } else if (a < b) {
    return "Second number is bigger";
  } else {
    return "Numbers are equal";
  }
}

console.log(compare(22, 22));
*/

// function isEvenNumber(value) {
//   return value % 2 === 0;
// }

// console.log(isEvenNumber(33));

/*
const usersAge = prompt("Please state your age!");

function barSiteMessage(age) {
  return age >= 18
    ? console.log("Welcome to the bar!")
    : console.log("You are too young for the bar!");
}

barSiteMessage(usersAge);
*/

// function sayHello(age) {
//   if (age < 18) {
//     return;
//   }

//   console.log("This is from functions");
// }

// sayHello();
// console.log(message);

/*
function firstFunction() {
  const a = 5;
  const b = 6;

  function secondFunction() {
    console.log(a + b);
    return true;
  }

  return secondFunction;
}

const result = firstFunction;

const runFirst = result();

const runSecond = runFirst();
*/
/*
const sayHello = function () {
  console.log("Hello");
};

sayHello();
*/

/*
//Immediately Invoked Function Expression

 (function () {
   console.log("Hello");
 })();
*/

/*
//Arrow function

const sayHello = () => "Hello";

console.log(sayHello());
*/

/*
//Callback function

 setTimeout(() => {
   console.log("Hello");
 }, 5000);
*/

/*
//Pure function

 function sum(a, b) {
   return a + b;
 }

 sum(4, 5);

//Impure function
function getNumber(a) {
  return a * Math.random();
}

console.log(getNumber(5));

*/
