/*jshint esversion: 6 */


//Function
function square(num){
  return num * num;
}

const squareOfTwo = square(2);
console.log(squareOfTwo);

//  asssign function to Variables
const cube = function(num){
  return num * num * num;
};
console.log(cube(3));

// const cubeFatArrow = (num) => {
//   return num * num * num;
// };
const cubeFatArrow = (num) => num * num * num;

console.log(cubeFatArrow(2));
