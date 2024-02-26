/*
Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website.
 Loop through the array, and print a greeting to each user:

*/

const names = ['waleed','nayab','Omais','Admin'];

for (let i of names){

    if (i == 'Admin'){
        console.log(`Hello ${i} Would tou like to see Status`)
    }else{
        console.log(`Hello ${i} Welcome to the website  `)
    
    }
}