const lodash = require('lodash');

const obj = {
  lol: 'haha',
};

const newObj = lodash.cloneDeep(obj);

console.log(obj);
console.log(newObj);
