/*jshint esversion: 6 */
// Strings Strings Strings
const aString = 'The quick brown fox jumped over the moon';
console.log(aString.length);
const stringLength = aString.length;
console.log('The length of aString is ' + stringLength);

const firstChar = aString.charAt(0);
console.log(firstChar);

const firstCharAnotherWay = aString[0];
console.log(firstCharAnotherWay);

const seventhChar = aString[6];
console.log(seventhChar);

const stringsTogether = aString.concat('!');
const stringsTogetherAgain = aString + '!';
console.log(stringsTogether);
console.log(stringsTogetherAgain);
console.log('aString: ', aString);

//STRINGS ARE IMMUTABLE!!!!

console.log(aString.substr(0,5));
console.log(aString.slice(0,5));

const words = aString.split(/ /);
console.log(words);

//What are the number of words?
const numberOfWords = aString.split('').length;
console.log(numberOfWords);

const numberOfSpaces = numberOfWords - 1;
console.log(numberOfSpaces);

const reverseString = aString.split(' ').reverse().join(' ');
console.log(reverseString);






// var holder = words[0];
// console.log(words);
//
// for (var i = 1; i <= words.length; i++) {
//   if (words[i].length > holder.length) {
//     holder = words[i];
//   }
// }
// console.log(holder);
