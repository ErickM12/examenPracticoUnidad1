/*
    - let y var
    - const
    let vs var

*/
const name = "Erick";
let age = 25; //a1
if (true) {
  const name = "Erick";
  let age = 21; //a2
  console.log(name, age);
}
console.log(name, age);

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

const colors = ["red", "green", "blue", 2, true];
colors[0] = "blue";
console.log(colors);
console.log(colors[0]);
if (colors.includes("red")) {
  console.log("Red is here");
}
switch (colors[0]) {
  case "red":
    console.log("Red");
    break;
  default:
    console.log("No color");
}
for (let color of colors) {
  console.log(color);
}
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(function (color, index) {
  console.log(color, index);
});

const getUser = () => {
  const username = "erick";
  const age = 25;
  const lastname = "Mireles";
  const sex = "M";
  return `Mi nombre es ${
    sex === "M" ? "Señor" : "Señora"
  } ${username} ${lastname} y tengo ${age} años`;
};
/*
const getUser = function() {

}
function getUser() {

}
*/
const getName = () => "Erick";
console.log(getName());
console.log(getUser());

const user = {
  id: 1,
  username: "erick",
  address: [
    {
      street: "calle 1",
      city: "CDMX",
      number: 22,
      cp: "12345",
    },
  ],
  person: {
    id: 1,
    fullname: "Alberto Merida",
    birthday: "1990-01-01",
  },
  creditCard: [
    {
      id: 1,
      number: "1234-1234-1234-1234",
      date: "2022-01-01",
    },
  ],
};
console.log(user.address[0].street);

const {
  id,
  username,
  address,
  person: { fullname, birthday },
} = user;
console.log(id, username, address, fullname);

console.log(user.person.birthday);
console.log(birthday);

(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{});
    const data = await response.json();
    console.log("datos", data);
    data.forEach(({title}) => {
      console.log(title);
    });
  } catch (error) {
    console.log("error", error);
  }finally{
    console.log("finally");
  }
})();

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));
