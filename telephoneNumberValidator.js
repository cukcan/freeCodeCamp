function telephoneCheck(str) {
  // Regular expression pattern for valid phone numbers
  var pattern = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$/;

  // Test the input string against the pattern
  return pattern.test(str);
}

// Example usage:
var phoneNumber = "555-555-5555";
console.log(telephoneCheck(phoneNumber)); // Output: true

telephoneCheck("555-555-5555");
