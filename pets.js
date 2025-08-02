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
