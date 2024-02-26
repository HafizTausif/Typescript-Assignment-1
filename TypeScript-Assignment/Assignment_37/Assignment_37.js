function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = "I love typescript "; }
    console.log("the size of the shirt is ".concat(size, " and the printed logo will be ").concat(message));
}
var size_1 = "Smailll";
var messages_1 = 'this is a shirt!!';
make_shirt('meduim');
make_shirt(size_1, messages_1);
make_shirt();
