let hashTags = [
  ["<div>"+"#Hashtag"+"</div>"],
  ["<div>"+"#Hashtag"+"</div>"],
  ["<div>"+"#Hashtag"+"</div>"],
];

for (var i = 0; i < hashTags.length; i++) {
  for (var j = 0; j < hashTags[i].length; j++) {
    document.getElementById("hashtagknapper").innerHTML += hashTags[i][j];
  }
}

// Sæt ind i html
// <div id="hashtagknapper"></div>
