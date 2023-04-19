export const data = [
  {
    id: 1,
    title: 'Change style of console',
    info: 'Change the style of console.log by using %c before the word, and add a second field to write the style attribute to be changed.',
    example: `console.log('%cI am text', 'font-size: 20px; color: #fff; background: #1a76a3;)`,
    btnInfo: 'Show in devtool!',
    func: () =>
      console.log(
        '%c01 example : I am text',
        'font-size:20px; color: #fff; background:#1a76a3; ',
      ),
  },

  {
    id: 2,
    title: 'Console Warn',
    info: 'Console information with a warning triangle, will mark where the warning occurred!',
    example: `console.warn('OH NOOO')`,
    btnInfo: 'Show in devtool!',
    func: () => console.warn('02 example : OH NOOO'),
  },

  {
    id: 3,
    title: 'Console Error',
    info: 'Console error with a red error symbol, will mark where the error occurred!',
    example: `console.error('Errorrrrr')`,
    btnInfo: 'Show in devtool!',
    func: () => console.error('03 example : Errorrrrr'),
  },

  {
    id: 4,
    title: 'Grouping console info together',
    info: 'Use console.groupCollapsed(label) and console.groupEnd(label), it will group the console info by label.',
    example: `Here is an array: [ { name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }, ... ], when writing dogs.forEach and console many things,
    we can use 'console.groupCollapsed(dog.name)' and 'console.groupEnd(dog.name)' to let the console info group by dog's name `,
    btnInfo: 'Show in devtool!',
    func: () => {
      const dogs = [
        { name: 'Snickers', age: 2 },
        { name: 'hugo', age: 8 },
      ];
      console.log('04 example :');
      dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.groupEnd(`${dog.name}`);
      });
      console.log('---------------');
    },
  },

  {
    id: 5,
    title: 'Count the times of console',
    info: 'Use console.count(value), it will count the number of occurrences of the same value.',
    example: `Write multiple and random times of "console.count('Andy')", "console.count('Steve')", and "console.count('Wes')"`,
    btnInfo: 'Show in devtool!',
    func: () => {
      console.log('05 example :');
      console.count('Wes');
      console.count('Wes');
      console.count('Steve');
      console.count('Steve');
      console.count('Wes');
      console.count('Steve');
      console.count('Wes');
      console.count('Steve');
      console.count('Andy');
      console.count('Andy');
      console.count('Steve');
      console.count('Andy');
      console.log('---------------');
    },
  },

  {
    id: 6,
    title: 'Tell the execution time of program!',
    info: 'Use console.time(string) and console.timeEnd(string) to wrap some codes, it will tell you how long it took to execute these code!',
    example: `Write console.time('fetching data') and fetch some data from api, then write console.timeEnd('fetching data')`,
    btnInfo: 'Show in devtool!',
    func: () => {
      console.log('06 example :');
      console.time('fetching data');
      fetch('https://api.github.com/users/wesbos')
        .then(res => res.json())
        .then(result => {
          console.timeEnd('fetching data');
          console.log(result);
          console.log('---------------');
        });
    },
  },
];
