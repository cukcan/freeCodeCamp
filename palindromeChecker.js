function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  var cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');

  // Reverse the cleaned string
  var reversedStr = cleanedStr.split('').reverse().join('');

  // Check if the cleaned string and its reverse are equal
  return cleanedStr === reversedStr;
}

palindrome("eye");
