/*
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least
three people you’d like to invite to dinner.
 Then use your list to print a message to each person, inviting them to dinner

*/
var guests = ['Ali', 'Faraz', 'Waleed'];
function message(guest) {
    console.log("Hello ".concat(guest, " , You are invited to my dinner party  !@! "));
}
guests.forEach(function (names) {
    message(names);
    console.log('\n');
});
