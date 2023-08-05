const _lodash = require('lodash');
const _bootstrap = require('bootstrap');




const items = [1,[2,[3,[4]]]];

const newItems = _lodash.cloneDeep(items);

console.log(newItems);