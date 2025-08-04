/* They're changing what I'm doing with the code, so I'm commenting this out
const ernie = {
  animal: 'dog',
  age: '1',
  breed: 'pug',
  bark: function () {
    console.log('Woof!')
  }
}

//can be done using dot notation -> ernie.age - or - bracket notation
console.log(ernie['age'])
console.log(ernie['breed'])
ernie['bark']()

const prop = 'breed'

console.log(ernie[prop])

//when self-referencing inside the object, call *this* instead of object's name like this.animal instead of ernie.animal

ernie.age = 2
ernie['age'] = 2

ernie.color = 'black'

console.log(ernie)
*/

//Move to prototypes/classes
const ernie = {
  animal: 'dog',
  age: '1',
  breed: 'pug',
  bark: function () {
    console.log('Woof!')
  }
}

const vera = {
  animal: 'dog',
  age: 8,
  breed: 'Border Collie',
  bark: function () {
    console.log('Woof!')
  }
}

const scofield = {
  animal: 'dog',
  age: 6,
  breed: 'Doberman',
  bark: function () {
    console.log('Woof!')
  }
}

const edel = {
  animal: 'dog',
  age: 7,
  breed: 'German Shorthaired Pointer',
  bark: function () {
    console.log('Woof!')
  }
}
