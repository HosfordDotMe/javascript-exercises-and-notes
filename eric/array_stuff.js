/*jshint esversion: 6 */
// arrays
//How do I create an arrays

const empty = [];
//numbers
const numbers = [1,2];
//strings
const strings = ['aasdasdad','b','c'];
//objects
const objects = [{},{},{}];
//arrays
const arrays =  [[],[],[]];

//How many elements in
const emptyLength = empty.length;
console.log(emptyLength);

const numbersLength = numbers.length;
console.log(numbersLength);

//access an element of array

const firstString = strings[0];
console.log(firstString);

const thirdObject = objects[3];
console.log(thirdObject);

numbers[2] = 4;

console.log(strings);
strings.push('f');
console.log(strings);

console.log(numbers.concat(strings));

const positionOfB = strings.indexOf('b');
const positionofK = strings.indexOf('k');

console.log(positionofK);
console.log(positionOfB);
console.log(numbers);
console.log(numbers.slice(numbers.length - 2));

//foreach - I want to iterate through an arrays
const resultOfForEach = numbers.forEach(function logger(number, index){
  console.log(number, index);
});
console.log(resultOfForEach);

const x = [4,5,6,7,8,9];
x.forEach(function logger(number, index) {
  console.log('Index: '+ index + ' Number: ' +number);
});

//map - I want to get a new array with changes to each element of the orignal
const stringLength = strings.map(function eachLength(string, index){
  return string.length;
});
console.log(stringLength);

const y = ['I', 'like', 'cheese', '?'];
const yLengths = y.map(function (string){
  return string.length;
});
console.log(yLengths);

//filter - I want only certain elements of array that pass a test
const lenghthOfOneStrings = y.filter(function test(string, index) {
  return string.length === 1;
});

console.log(lenghthOfOneStrings);
console.log(lenghthOfOneStrings.length);

//reduce - I want to take an array to something simpler
const sumOfNumbers = numbers.reduce(function adder(acc, next) {
  return acc + next;
},0);
console.log(sumOfNumbers);

console.log(strings.reduce(function(a, b) {
  return a.length > b.length ? a : b;
},0));

const stringsOverOne = y.filter(function OverOne(string) {
  return string.length > 1;
});
console.log(stringsOverOne);
