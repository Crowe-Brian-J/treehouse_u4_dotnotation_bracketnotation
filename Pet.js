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

  //add activity for Pet - getter method
  get activity() {
    const today = new Date()
    const hour = today.getHours()

    //if to figure out what the pet is doing
    if (hour > 8 && hour <= 20) {
      return 'playing'
    } else {
      return 'sleeping'
    }
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

//do not access getter method like speak method - also will not work with console.log(ernie)
console.log(ernie.activity)
