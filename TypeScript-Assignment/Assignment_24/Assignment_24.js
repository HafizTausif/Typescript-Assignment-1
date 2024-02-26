/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

*/
var string_1 = "Omais";
var string_2 = "Waleed";
console.log(string_1 == string_2);
console.log(string_1 !== string_2);
var first_1 = "HEELO";
var first_2 = "heelo";
console.log(first_1.toLowerCase() == first_2);
console.log(first_2.toUpperCase() == first_1);
var num_1 = 6;
var num_2 = 6;
console.log(num_1 == num_2);
console.log(num_1 !== num_2);
console.log(num_1 > num_2);
console.log(num_1 < num_2);
console.log(num_1 <= num_2);
var x = 5;
var y = 10;
var z = 15;
console.log((x > y) || (y < z));
var array = [1, 2, 3, 4, 5];
console.log(array.includes(3)); // True
// Test whether an item is not in an array
console.log(!array.includes(6)); // True
