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

  //add a getter funciton before the setter function to more easily access data
  get owner() {
    return this._owner
  }

  //add owner - setter method
  set owner(owner) {
    //backing property - name can never be the same as a getter or setter method
    //add underscore before name of setter function to cirucmvent this
    this._owner = owner
    console.log(`setter called: ${owner}`)
  }

  //Pet method for speak - outside of constructor
  speak() {
    console.log(this.sound)
  }
}

//create Owner class
class Owner {
  constructor(name, address) {
    this.name = name
    this.address = address
  }

  //then create getter method
  get phone() {
    return this._phone
  }

  //setter method for phone
  set phone(phone) {
    //because string
    const phoneNormalized = phone.replace(/[^0-9]/g, '')
    this._phone = phoneNormalized
  }
}

//create an instance of a class
const ernie = new Pet('Ernie', 'dog', 1, 'Pug', 'Yip! Yip!')
const vera = new Pet('Vera', 'dog', 8, 'Border Collie', 'Woof! Woof!')

ernie.speak()
vera.speak()

//do not access getter method like speak method - also will not work with console.log(ernie)
console.log(ernie.activity)

//to set owner's name:
//ernie.owner = 'Ashley'

//now create Ashley as owner via constructor
ernie.owner = new Owner('Ashley', '123 Main Street')
//then set phone number
ernie.owner.phone = '(555) 555-5555'

//to access setter function method:
//NOT: console.log(ernie.owner)
//The following would work
//console.log(ernie._owner)
//but before setter function, add getter function
console.log(ernie.owner.name)
console.log(ernie.owner.phone)
