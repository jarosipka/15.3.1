function analyzeText() {
  var text = document.getElementById("textarea").value;

  var textLength = text.length;
  document.getElementById("textLength").innerHTML = textLength;

  var textWithoutSpaces = text.replace(/\s/g, "");
  var textLengthWithoutSpaces = textWithoutSpaces.length;
  document.getElementById("textLengthWithoutSpaces").innerHTML =
    textLengthWithoutSpaces;

  var digits = text.match(/\d/g);
  var numberOfDigits = digits ? digits.length : 0;
  document.getElementById("numberOfDigits").innerHTML = numberOfDigits;

  var words = text.split(" ");
  var longestWord = "";
  var longestWordLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWordLength) {
      longestWord = words[i];
      longestWordLength = words[i].length;
    }
  }

  document.getElementById("longestWord").innerHTML = longestWord;
  document.getElementById("longestWordLength").innerHTML = longestWordLength;
}

function encryptText() {
  var text = document.getElementById("textarea").value;

  var encryptedText = text
    .replace(/0/g, "O")
    .replace(/o/g, "O")
    .replace(/I/g, "1")
    .replace(/i/g, "1")
    .replace(/E/g, "3")
    .replace(/e/g, "3")
    .replace(/A/g, "4")
    .replace(/a/g, "4")
    .replace(/S/g, "5")
    .replace(/s/g, "5")
    .replace(/B/g, "8")
    .replace(/b/g, "8");

  document.getElementById("encryptedText").innerHTML = encryptedText;
}
