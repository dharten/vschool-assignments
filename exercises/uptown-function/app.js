var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

// function printLyrics(lyrics) {
//   console.log(lyrics.join(" "));
// }
// printLyrics(lyrics);

// function lyricsReverse(lyrics) {
//   console.log(lyrics.reverse().join(" "));
// }
// lyricsReverse(lyrics);

// function evenLyrics(lyrics) {
//   var otherArr = [];
//   for (var i = 0; i < lyrics.length; i += 2) {
//     otherArr.push(lyrics[i]);
//   }
//   console.log(otherArr.join(" "));
// }
// evenLyrics(lyrics);

function reverseEveryTwo() {
  var reversed = [];
  for (var i = 1; i < lyrics.length; i +=2) {
    reversed.push(lyrics[i] + " " + lyrics[i - 1]);
  }
  console.log(reversed.join(" "));
}
reverseEveryTwo();
