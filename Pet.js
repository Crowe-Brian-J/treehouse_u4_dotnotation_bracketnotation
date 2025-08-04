//new class - more general than just dogs
class Pet {
  //constructor method
  constructor(name, animal, age, breed, sound) {
    //syntax is this.insert-property-or-method-name-here
    this.name
    this.animal = animal
    this.age = age
    this.breed = breed
    this.sound = sound
  }

  //Pet method for speak - outside of constructor
  speak() {
    console.log(this.sound)
  }
}

//create an instance of a class
const ernie = new Pet('Ernie', 'dog', 1, 'Pug', 'Yip! Yip!')
const vera = new Pet('Vera', 'dog', 8, 'Border Collie', 'Woof! Woof!')

ernie.speak()
vera.speak()
