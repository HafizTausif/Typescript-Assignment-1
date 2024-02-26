/*
Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name
 and an album title, and it should return a Object containing these two pieces of information.
  Use the function to make three dictionaries representing different albums. Print each return value to show that Objects
   are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks 
   on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object.
 Make at least one new function call that includes the number of tracks on an album.

*/

interface Album{
    artist_name:string;
    Title:string;
    tracks?:number;
}
function makeablum(artist_name:string , Title:string,track?:number): Album {

    const ablum :Album={
        artist_name:artist_name,
        Title:Title

    }   
    if(track!==undefined){
        ablum.tracks=track
    }
    return ablum


}

const album_1 = makeablum("Tausif","Bring_home",12)
const album_2 = makeablum("Ali","Bring_home")
const album_3 = makeablum("Faraz","home",33)

console.log(album_1)
console.log(album_2)
console.log(album_3)