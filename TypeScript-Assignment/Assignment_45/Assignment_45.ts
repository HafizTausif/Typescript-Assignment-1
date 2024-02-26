function createCar(manufacturer: string, model: string, ...extras: { [key: string]: any }[]):
 { manufacturer: string, model: string, [key: string]: any } {
    const car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    for (let extra of extras) {
        for (let key in extra) {
            if (extra.hasOwnProperty(key)) {
                car[key] = extra[key];
            }
        }
    }

    return car;
}

const myCar = createCar("Toyota", "Camry", { color: "red", feature: "sunroof" });
console.log(myCar);
