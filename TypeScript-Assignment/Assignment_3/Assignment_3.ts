/*Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase.*/

const Name = " Tausif ";
console.log(Name.toLowerCase())
console.log(Name.toUpperCase())
console.log(Name.replace(/\b\w/g,c=>c.toUpperCase()))

