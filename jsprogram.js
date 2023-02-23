/*
multi
line
comment
*/

console.log("Hello World!"); //comment
/*
let book = {
    name: "javascript",
    edition: 7,
}
console.log(book["edition"])

const plus1 = x => x+1
console.log(plus1(1))
*/

// ---------------------------------------------------------------------alert
// alert("Saying hi from a different file!");

// ---------------------------------------------------------------------browser prompt
// browser prompt
// prompt("Hi! How are you?");

// ---------------------------------------------------------------------console prompt
/*
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
// const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
// Usage inside aync function do not need closure demo only*
(async() => {
    const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
    try {
        const name = await prompt("What's your name: ");
        // Can use name for next question if needed
        const lastName = await prompt(`Hello ${name}, what's your last name?: `);
        // Can prompt multiple times
        console.log(name, lastName);
        rl.close();
    } catch (e) {
        console.error("Unable to prompt", e);
    }
})();
// When done reading prompt, exit program 
// rl.on('close', () => process.exit(0));
*/

// -----------------------------------------------------------------------------------------------------------
console.log(Math.random());

let firstname = "Maria"; // declare a variable
firstname = "Jacky"; // assigning a new value

let language = "JavaScript";
let message = `Let's learn ${language}`; // backticks instead of quotes by pressing button below ESC
console.log(message);

let str = "Hello, what's your name? Is it \"Mike\"?";
console.log(str);

let str3 = "New \nline.";
console.log(str3);
let str4 = "I'm containing a backslash: \\!";
console.log(str4);

let bigNr = 90071992547409920n;

let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";
console.log("These two strings are the same:", str1 === str2);
let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
console.log("These two Symbols are the same:", sym1 === sym2);

let terribleThingToDo = undefined; // deliberately undefined variable
let lastName; // automatically undefined variable
console.log("Same undefined:", lastName === terribleThingToDo);
let betterOption = null;
console.log("Same null:", lastName === betterOption);

let nr1 = 2;
let nr2 = 3;
let result1 = nr1 ** nr2;
console.log(result1);

console.log(true ||false);

