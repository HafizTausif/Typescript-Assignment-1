

const magicians = ['a','b','c','d']



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
    magicians.splice(0,magicians.length,...great_magicians)
}


make_modification(magicians)
show_magicians(magicians)