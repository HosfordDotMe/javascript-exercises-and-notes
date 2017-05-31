/* jshint esversion: 6*/

//Let's create a car
//Properties
// color, make , model, hasAC
const Car = {
  color: 'green',
  make: 'Dodge',
  model: 'Dart',
  hasAC: false,
  paint: function(newColor){ //functions on objects are called methods
    this.color = newColor;
  },
  fixAC: function(){
    if (this.hasAC === false) {
    this.hasAC = true;
    } else {
      console.log('Ac is already working!');
    }
  }
};

console.log(Car);
//Car.hasAC = true; //this is shorthand
console.log(Car);
//Car['hasAC'] = false;
console.log(Car);


///check the color
console.log(Car.color);

Car.paint('orange');
console.log(Car);



console.log('***************************************');
console.log(Car.hasAC);
Car.fixAC();
console.log(Car.hasAC);
console.log(Car);





for (var val in Car) {
  console.log('Value: ' + Car[val]);
}



const shirt = {
  color: 'blue',
  size: 'large',
  isTorn: true,
  isLaundered: false,
  washShirt: function(){
    if (this.isLaundered === false) {
    this.isLaundered = true;
      console.log('The shirt is now clean');
    } else {
      console.log('The shirt is already clean');
    }
  },
  mendShirt: function(){
    if (this.isTorn === true) {
      this.isTorn = false;
      console.log('The shirt is now repaired');
    } else {
      console.log('The shirt doesn\'t need repair');
    }
  },
  dye: function(newColor){
    this.color = newColor;
  }
};

console.log(shirt);
shirt.mendShirt();
console.log(shirt);
shirt.mendShirt();
shirt.dye('red');
console.log(shirt);
shirt.washShirt();
console.log(shirt);
shirt.washShirt();
