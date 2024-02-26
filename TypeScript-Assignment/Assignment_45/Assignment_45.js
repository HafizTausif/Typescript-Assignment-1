function createCar(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var extra = extras_1[_a];
        for (var key in extra) {
            if (extra.hasOwnProperty(key)) {
                car[key] = extra[key];
            }
        }
    }
    return car;
}
var myCar = createCar("Toyota", "Camry", { color: "red", feature: "sunroof" });
console.log(myCar);
