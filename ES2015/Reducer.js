import { people } from './personData.js'


const reducer = () => {

  var reduced = people.reduce((acc, currVal) => {

    acc.age += currVal.age;

    return acc;
  });

  return reduced;
};

export default reducer;
