/*

T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

*/

function make_shirt(size:number,message:string){
    console.log(`the size of the shirt is ${size} and the printed logo will be ${message}`)
}

let size = 12
let messages = 'this is a shirt!!'
make_shirt(size,messages)