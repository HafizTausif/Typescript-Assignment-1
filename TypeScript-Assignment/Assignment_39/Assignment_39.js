/*
City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:
*/
function city_country(city, country) {
    if (city === void 0) { city = "KArachi "; }
    if (country === void 0) { country = "Pakistan"; }
    return "\"".concat(city, " ,").concat(country, "\"");
}
console.log(city_country());
console.log(city_country("lahore"));
console.log(city_country("Kabul", "Afghanistan"));
