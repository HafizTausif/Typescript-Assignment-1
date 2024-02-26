const username = ['waleed','omais','nayab']
const username_1 = ['nayab','Ali','Farhan']

for (let i in username){
    for (let j in username_1){
        if (username[i]==username_1[j]){
            console.log(`${username[i]} collides with ${username_1[j]}`)
        }
    }
}