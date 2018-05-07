import { people } from './personData.js'

export default function map() {
  
  let per = people.map(person => {
    person.age *= 2;
    return person;
  });

  console.log(per);
};
