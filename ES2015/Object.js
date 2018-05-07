
export const objData = {
  ["Talk"] : function(txt) {
    console.log(txt);
  }
}


const person1 = {

  name: "Danny Ansari",
  age: 45
}

const professions = {
  programmer: {
    occupation: "Programmer",
    experience: "Advanced"
  }
}

let data = {};

Object.assign(data, person1, professions);

export const personTeller = () => {

  console.log(person1);
};