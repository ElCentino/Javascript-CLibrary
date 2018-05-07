let name = "Danny Ansari";
let age = 56;
const features = ["Tall", "White", "Bald"];

export {name, age, features};

export function printPeople() {

  console.log(`-------------------------------------------`);

  for(const obj of arguments) {
    console.log(`Person name : ${obj.name}`);
    console.log(`Person age : ${obj.age}`);
    console.log('Person features : ');

    for(let feature of obj.features) {
      console.log(`\t ${feature}`);
    }

      console.log(`-------------------------------------------`);
  }
}

export function displayToDOM() {

  const container = document.getElementById("container");

  container.appendChild(breaker);

  for(const obj of arguments) {

    const header = document.createElement('h3');
    header.setAttribute("class", "header bg-primary");
    header.innerHTML = `Name : ${obj.name}`;

    const age = document.createElement('p');
    age.innerHTML = `<strong>Age</strong> : ${obj.age}`;

    const featureList = document.createElement('ul');
    featureList.setAttribute("class", "list-unstyled text-center");

    const featureHeader = document.createElement('h3');
    featureHeader.setAttribute("class", "header bg-info");

    featureHeader.innerHTML = `Features are :`;

    for(let feature of obj.features) {

      const listItem = document.createElement('li');

      listItem.innerHTML= `\t${feature}`;

      listItem.setAttribute("class", "bg-danger");

      featureList.appendChild(listItem);

      listItem.addEventListener('click', () => {
        featureList.removeChild(featureList.childNodes[feature]);
      });
    }

    container.appendChild(header);
    container.appendChild(age);
    container.appendChild(featureHeader);
    container.appendChild(featureList);
  }

  console.log(this.message);
}

export default class Person {

  constructor(name, age, ...features) {
    this.name = name;
    this.age = age;
    this.features = features;
  }

  displayPerson() {
    console.log(`Person name : ${this.name}`);
    console.log(`Person age : ${this.age}`);
    console.log('Person features : ');

    for(let feature of features) {
      console.log(`\t ${feature}`);
    }
  }
}
