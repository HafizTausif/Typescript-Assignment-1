/*
Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name
 and an album title, and it should return a Object containing these two pieces of information.
  Use the function to make three dictionaries representing different albums. Print each return value to show that Objects
   are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks
   on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object.
 Make at least one new function call that includes the number of tracks on an album.

*/
function makeablum(artist_name, Title, track) {
    var ablum = {
        artist_name: artist_name,
        Title: Title
    };
    if (track !== undefined) {
        ablum.tracks = track;
    }
    return ablum;
}
var album_1 = makeablum("Tausif", "Bring_home", 12);
var album_2 = makeablum("Ali", "Bring_home");
var album_3 = makeablum("Faraz", "home", 33);
console.log(album_1);
console.log(album_2);
console.log(album_3);
