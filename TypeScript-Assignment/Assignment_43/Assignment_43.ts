
const magicians_ = ['a','b','c','d']



function show_magicians(magicians:string[]){
    for (let i of magicians){
        console.log(i)
    }
}
function make_modification(magicians:string[]){
    let great_magicians = []
    for (let j of magicians){
        great_magicians.push(`${j} is Great`)
    }
    return great_magicians
}
const copy = [...magicians_]
const modify_copy = make_modification([...magicians_])

console.log(copy)
console.log(modify_copy)