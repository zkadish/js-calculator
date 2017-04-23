import Person from './class';
import uuid from 'uuid';
// const uuid = require('uuid');

const address = '1519 East Windsor Ave, Phoenix, Az 85006'
let likes = 'football, tv, javascript, girls, dogs, whisky, art';

const personId = uuid().replace(/-/g,'');
const personObj = {};
personObj[personId] = new Person('zach kadish', address, 'male', 'jewish', '47', '6-1', likes);

// console.log(zachkadish);
console.log(personObj);

personObj[personId].speaks('I like teaching!');
personObj[personId].get('name');
personObj[personId].set('name', 'zach scott kadish')