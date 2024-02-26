/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite.


*/
const guests = ['Ali','Faraz', 'Waleed'];

function message(guest){
    console.log(`Hello ${guest} , You are invited to my dinner party  !@! `)
}

guests.forEach(names=>{
    message(names)
    console.log('\n')
})

const ali_cant_come = guests.indexOf("Ali")
guests[ali_cant_come]="MUjahid";

console.log("Ali couldnt make to the dinner..sending new list ")
guests.forEach(names=>{
    message(names)
    console.log('\n')
})