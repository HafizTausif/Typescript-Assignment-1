/*
Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website.
 Loop through the array, and print a greeting to each user:

*/
var names = ['waleed', 'nayab', 'Omais', 'Admin'];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var i = names_1[_i];
    if (i == 'Admin') {
        console.log("Hello ".concat(i, " Would tou like to see Status"));
    }
    else {
        console.log("Hello ".concat(i, " Welcome to the website  "));
    }
}
