function sandwich_stuff() {
    var itms = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        itms[_i] = arguments[_i];
    }
    console.log("Items in the sandwich aree ");
    for (var _a = 0, itms_1 = itms; _a < itms_1.length; _a++) {
        var i = itms_1[_a];
        console.log("".concat(i));
    }
}
sandwich_stuff("abc", "bbb", 'uuu');
sandwich_stuff("isd", "mfc");
sandwich_stuff("hcdcsj");
