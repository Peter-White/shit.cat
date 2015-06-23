var m = document.getElementById("shitcat");
var c = m.style;
var shitcats = ["http://i.imgur.com/Gy98CEc.jpg", "http://i.imgur.com/t2XZqTj.jpg", "http://i.imgur.com/knntFzQ.jpg", "http://i.imgur.com/jElaj6c.jpg"];
c.backgroundImage = "url(" + shitcats[cat(0, shitcats.length)] + ")";
c.backgroundPosition = "center center";
c.backgroundRepeat = "no-repeat";
c.backgroundSize = "contain";


console.log(cat(0,shitcats.length));

function cat(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
