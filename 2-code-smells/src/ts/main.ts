// Long functions

function sumNumber(fibonacci: number[]) {
  const sum = fibonacci.reduce((accumulated, current) => {
    return accumulated + current;
  });
  return sum;
}

function avg(sum: number, length: number) {
  return sum / length;
}

const fib = [1, 1, 2, 3, 5, 8];
const sum = sumNumber(fib);
const a = avg(sum, fib.length);

// Functions that create html
interface IPerson {
  name: string;
  age: number;
}

function createHtml(p: IPerson) {
  // Create element for name
  // const name = document.createElement("h3");
  // name.innerHTML = p.name;
  // name.className = "person";
  // name.id = "person";
  const name = createNameElement(p.name); // name = nameHeading from createNameElement function.
  document.body.appendChild(name);

  // Create element for age
  // const age = document.createElement("p");
  // age.innerHTML = p.age.toString();
  // age.className = "age";
  // age.id = "age";
  const age = createAgeElement(p.age);
  document.body.innerHTML += age;
}

function createNameElement(name: string) {
  const nameHeading = document.createElement("h3");
  nameHeading.innerHTML = name;
  nameHeading.className = "person";
  nameHeading.id = "person";

  return nameHeading;
}

function createAgeElement(age: number) {
  return `<p class="age" id="age">${age}</p>`;
}

// Funktioner med många parametrar
class User {
  constructor(
    public name: string,
    public lastname: string,
    public email: string,
    public password?: string
  ) {}
}

// function createUser(name: string, lastname: string, email: string) {
//   // Create user based on parameters
// }

function createUser(user: User) {
  // Create user
  if (user.password) {
    //
  } else {
    //
  }
}

const u = new User("Sebastian", "Tegel", "sebastian@test.se", "1234");
createUser(u);

// switch
enum names {
  sebastian,
  hanna,
  astrid,
  alvar,
}

class Person {
  constructor(public name: names) {}
}

const p = new Person(names.sebastian);

switch (p.name) {
  case names.sebastian:
    break;

  case names.hanna:
    break;

  case names.astrid:
    break;

  case names.alvar:
    break;

  default:
    break;
}

// Gör return så fort som möjligt
function greeting(text: string) {
  // let result = "";
  const initalPhrase = "Blä";

  if (text === "hi") {
    // result = "Hello";
    return `${initalPhrase}Hello`;
  }

  if (text === "bye") {
    // result = "Goodbye";
    return `${initalPhrase}Goodbye`;
  }

  // return result;

  return "Don't know what to do";
}
