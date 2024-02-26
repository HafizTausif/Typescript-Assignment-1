/*
City Names: Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this:
*/
function city_country(city:string = "KArachi ",country:string= "Pakistan"){
    return `"${city} ,${country}"`
}
console.log(city_country())
console.log(city_country("lahore"))
console.log(city_country("Kabul","Afghanistan"))