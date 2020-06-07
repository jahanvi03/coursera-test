(function (window) {


var names = ["Jahanvi", "jaanvi", "Teena", "Heril", "Deepak", "anishi", "aman", "Jinisha", "Jack", "jaan"];

for (var i in names) {

  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);
