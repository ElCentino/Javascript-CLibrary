
import Mapper from './Map.js'
import Reducer from './Reducer.js'
import { data, sysmbols } from './Symbols.js'
import { objData, personTeller } from './Object.js'

//filter operation

// people = people.filter(x => x.occupation.toLowerCase() === 'doctor');

// Mapper();

// console.log(Reducer().age);

// data[Symbol.toPrimitive] = function(hint) {
//   console.log(hint);
//   return 40;
// };
//
// const sum = data + 100;
//
// console.log(sum);

objData.Talk("how");

personTeller();

sysmbols();
