//new class - more general than just dogs
class Pet {
  //constructor method
  constructor(animal, age, breed) {
    //syntax is this.insert-property-or-method-name-here
    this.animal = animal
    this.age = age
    this.breed = breed
  }
}

//create an instance of a class
const ernie = new Pet('dog', 1, 'Pug')
const vera = new Pet('dog', 8, 'Border Collie')

console.log(ernie)
