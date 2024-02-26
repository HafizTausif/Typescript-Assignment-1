var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ['a', 'b', 'c', 'd'];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var i = magicians_1[_i];
        console.log(i);
    }
}
function make_modification(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var j = magicians_2[_i];
        great_magicians.push("".concat(j, " is Great"));
    }
    magicians.splice.apply(magicians, __spreadArray([0, magicians.length], great_magicians, false));
}
make_modification(magicians);
show_magicians(magicians);
