const palindromes = function ( word ) {
  const validCharacters = '0123456789abcdefghijklmnopqrstuvwxyz';

  // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
  const resultString = word.toLowerCase().split('')
    .filter((character) => validCharacters.includes(character)).join('');

  // Create a new reversed string for comparison
  const reversedString = resultString.split('').reverse().join('');

  // Return the outcome of the comparison which will either be true or false
  return resultString === reversedString;
    
};

// Do not edit below this line
module.exports = palindromes;
