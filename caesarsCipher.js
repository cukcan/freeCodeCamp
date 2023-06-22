function rot13(str) {
  var decoded = '';

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (char.match(/[A-Z]/)) {
      var code = str.charCodeAt(i);
      var decodedCode = ((code - 65 + 13) % 26) + 65;
      char = String.fromCharCode(decodedCode);
    }

    decoded += char;
  }

  return decoded;
}

rot13("SERR PBQR PNZC");
