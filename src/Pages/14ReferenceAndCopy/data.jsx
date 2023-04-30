const textExamples = [
  {
    id: 1,
    title: 'Copy Text (copy by value)',
    info: 'Primitive values in JavaScript will not be shared between multiple variables. Even if you set the variables equal to each other. Every variable representing a primitive value is guaranteed to belong to a unique memory location.',
    code: `
    let age = 100;
    let age2 = age;
    console.log(age, age2); // 100, 100
    age = 200;
    console.log(age, age2); // 100, 200
    `,
  },
];

const arrayExamples = [
  {
    id: 1,
    title: 'Copy Array (copy by reference)',
    info: `
    Here is a team1 array call team1 : ['Wes', 'Sarah', 'Ryan', 'Poppy'],
    we want to copy team1 and named to team2, let team2[0] = 'Andy'.
    There are several ways to do:
    `,
    code: `
    // 1. array.slice()
    const team2 = players.slice();

    // 2. array.concat()
    const team2 = [].concat(team1);

    // 3. ES6 Array Spread
    const team2 = [...team1]

    // 4. Array.from()
    const team2 = Array.from(team1)

    // Final step :
    team2[0] = 'Andy'

    // Here is the results :
    console.log(team1); // ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    console.log(team2); // ['Andy', 'Sarah', 'Ryan', 'Poppy'];
    `,
  },
];

const objectExamples = [
  {
    id: 1,
    title: 'Copy Object (copy by reference)',
    info: `
    Here is a team1 object call person1 : { name: 'Bos', age: 18 }. Same as array,
    we want to copy person1 and named to person2, let person2 = { name: 'Cindy', age: 18 }.
    There are several ways to do:
    `,
    code: `
    // 1. Object.assign()
    const person2 = Object.assign({}, person1, { name: 'Cindy'})

    // 2. ES6 Object Spread
    const person2 = { ...person1, name: 'Cindy' }

    // Here is the results :
    console.log(team1); // ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    console.log(team2); // ['Andy', 'Sarah', 'Ryan', 'Poppy'];
    `,
  },
];

const deepCopyExamples = [
  {
    id: 1,
    title: 'Shallow copy vs. Deep copy',
    info: `
    All the methods mentioned above are shallow copies.
    When the array or object has multiple layers, only the first layer will be copied to a new memory location,
    but the memory locations of other layers below are still the original,
    so they cannot be separated reassignment.
    `,
    subInfo: 'Therefore, here are several ways to do deep copy :',
    code: `
    // original object
    const person1 = { name: 'Bos', info: { age: 18, gender: 'male' } }

    // 1. Spread layer by layer (cumbersome way)
    const person2 = { ...person1, info: { ...person1.info, age: 20 }}

    // 2. JSON.parse() + JSON.stringify()
    const person2 = JSON.parse(JSON.stringify(person1))
    person2.info.age = 20

    // 3. lodash package clonedeep
    -> 'https://www.npmjs.com/package/lodash'


    // Here is the results:
    console.log(person1) // { name: 'Bos', info: { age: 18, gender: 'male' } }
    console.log(person2) // { name: 'Bos', info: { age: 20, gender: 'male' } }
    `,
  },
];

export { textExamples, arrayExamples, objectExamples, deepCopyExamples };
