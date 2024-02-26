/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

*/

const string_1: string = "Omais"
const string_2: string = "Waleed"
console.log(string_1 == string_2);
console.log(string_1 !== string_2);

const first_1 = "HEELO"
const first_2 = "heelo"
console.log(first_1.toLowerCase() == first_2)
console.log(first_2.toUpperCase() == first_1)

const num_1 = 6
const num_2 = 6

console.log(num_1==num_2)
console.log(num_1!==num_2)
console.log(num_1>num_2)
console.log(num_1<num_2)
console.log(num_1<=num_2)



const x =5
const y = 10
const z = 15

console.log((x>y) || (y<z))

const array: number[] = [1, 2, 3, 4, 5];
const itemToFind = 6;

// Check if the item is in the array
const isInArray = array.includes(itemToFind);

// Print the result
if (isInArray) {
    console.log(`${itemToFind} is in the array.`);
} else {
    console.log(`${itemToFind} is not in the array.`);
}