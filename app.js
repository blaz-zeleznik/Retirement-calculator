const body = document.getElementById("body");
const btn = document.getElementById("btn");
const container = document.querySelector(".container");
const input = document.getElementById("input");
const ageInput = document.getElementById("age");
const clear = document.querySelector(".remove");
var people = [];
// create dom elements for each object in people array
function peopleList() {
  people.forEach((item) => {
    if (item.age >= 60) {
      let person = document.createElement("div");
      person.innerHTML = `<h3>${item.name} is ${item.age} and <span>can retire</span></h3>`;
      container.appendChild(person);
    } else {
      let person = document.createElement("div");
      person.innerHTML = `<h3>${item.name} is ${item.age} and has to go to work tommorow!</h3>`;
      container.appendChild(person);
    }
  });
}
// button for clearing array of people and all dom elements added
clear.addEventListener("click", () => {
  eraseList();
  people = [];
});
// remove every person in the dom function
function eraseList() {
  while (container.firstChild) {
    container.firstChild.remove();
  }
}
// add people to people array function
function addPeople() {
  people.push({ name: toUppercase(), age: ageInput.value });
}

// magic button event listener
btn.addEventListener("click", function submit() {
  if (input.value !== "" || ageInput.value !== "") {
    eraseList();
    addPeople();
    peopleList();
    input.value = "";
    ageInput.value = "";
  }
});
input.addEventListener("input", (e) => {
  return e.value;
});

ageInput.addEventListener("input", (e) => {
  return e.value;
});
// set text input to lower case first then first letter to uppercase
function toUppercase() {
  const str = input.value.toLowerCase();
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  return str2;
}
