/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.



*/
var guest_list = ['Ali', 'Fahad', 'Rahim'];
for (var _i = 0, guest_list_1 = guest_list; _i < guest_list_1.length; _i++) {
    var names = guest_list_1[_i];
    console.log("".concat(names, " , Welcome to my dinner "));
}
console.log("We Have Room For More Memebers ");
guest_list.unshift("Hamza ");
guest_list.splice(guest_list.length / 2, 0, "Alice");
guest_list.push("Faraz");
for (var _a = 0, guest_list_2 = guest_list; _a < guest_list_2.length; _a++) {
    var names = guest_list_2[_a];
    console.log("".concat(names, " , Welcome to my dinner "));
}
