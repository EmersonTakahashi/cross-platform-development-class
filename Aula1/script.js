"use strict";

//exercise 1
// const person = {
//   firstName: "Emerson",
//   lastName: "Takahashi",
//   placeOfBirth: "Itapecerica da Serra",
//   birthDate: new Date(2000, 4, 23).toDateString(),
//   hobbies: ["Watch movies", "Counter Strike", "Chess"],
// };

// console.log(
//   `${person.firstName} ${person.lastName} was born in ${person.birthDate} at ${person.placeOfBirth}, nowadays has these hobbies: ${person.hobbies}`
// );

//exercise 2
// const myArray = [
//   "2021/02/27",
//   "2019/01/01",
//   "2018/11/01",
//   "2021/01/12",
//   "2018/12/01",
// ];

// console.log(myArray.sort().at(0));

//exercise 3
const car = {
  brand: "Renault",
  model: "Megane",
  run: function (secondsRunningInMs) {
    const brand = this.brand;
    const model = this.model;
    let count = 0;

    setInterval(function () {
      let running = "";
      for (let i = 0; i < count; i++) {
        running = running.concat(".");
      }
      const car = `${brand} : ${model}`;
      console.log(running.concat(car));
      count++;
    }, secondsRunningInMs);
  },
};
car.run(2000);
