const textExamples = [
  {
    id: 1,
    title: 'Text is copy by value',
    info: 'Primitive values in JavaScript will not be shared between multiple variables. Even if you set the variables equal to each other. Every variable representing a primitive value is guaranteed to belong to a unique memory location.',
    code: `
    const a = [1, 2, 3];
    console.log(a) // output: [1, 2, 3]
    `,
  },
];

const arrayExamples = [
  {
    id: 1,
    title: 'Slice',
    info: '',
    code: ``,
  },
  {
    id: 2,
    title: 'Concat',
    info: '',
    code: ``,
  },
  {
    id: 3,
    title: 'ES6 Array Spread',
    info: '',
    code: ``,
  },
  {
    id: 4,
    title: 'Array.from()',
    info: '',
    code: ``,
  },
];

const objectExamples = [
  {
    id: 1,
    title: 'Object.assign()',
    info: '',
    code: ``,
  },
  {
    id: 2,
    title: 'ES6 Object Spread',
    info: '',
    code: ``,
  },
  {
    id: 3,
    title: 'JSON.parse() + JSON.stringify()',
    info: '',
    code: ``,
  },
];

export { textExamples, arrayExamples, objectExamples };
