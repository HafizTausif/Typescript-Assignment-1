/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.



*/
const guest_list = ['Ali','Fahad','Rahim']
for (let names of guest_list ){
    console.log(`${names} , Welcome to my dinner `)
}

console.log("We Have Room For More Memebers ")

guest_list.unshift("Hamza ")
guest_list.splice(guest_list.length/2,0,"Alice")
guest_list.push("Faraz")


for (let names of guest_list ){
    console.log(`${names} , Welcome to my dinner `)
}

