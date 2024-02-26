var username = ['waleed', 'omais', 'nayab'];
var username_1 = ['nayab', 'Ali', 'Farhan'];
for (var i in username) {
    for (var j in username_1) {
        if (username[i] == username_1[j]) {
            console.log("".concat(username[i], " collides with ").concat(username_1[j]));
        }
    }
}
