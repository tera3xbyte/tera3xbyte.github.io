var idPlatform = document.getElementById("platforms");
var platforms = ["CLI tools.", "Situs Web."];

var tw = new Typewriter(idPlatform, {
  loop: true,
  delay: 75,
});

for (var i = 0; i < platforms.length; i++) {
  tw.pauseFor(2500)
    .typeString(platforms[i])
    .pauseFor(1000)
    .deleteChars(platforms[i].length)
    .pauseFor(1000)
    .start();
}
