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
// const car = {
//   brand: "Renault",
//   model: "Megane",
//   run: function (secondsRunning) {
//     const brand = this.brand;
//     const model = this.model;
//     let count = 0;

//     setInterval(function () {
//       let running = "";
//       for (let i = 0; i < count; i++) {
//         running = running.concat(".");
//       }
//       const car = `${brand} : ${model}`;
//       console.clear();
//       console.log(running.concat(car));
//       count++;
//     }, secondsRunning * 1000);
//   },
// };
// car.run(2);

//exercise 4
// const person = {
//   firstName: "Emerson",
//   lastName: "Takahashi",
//   placeOfBirth: "Itapecerica da Serra",
//   birthDate: new Date(2000, 4, 23),
//   hobbies: ["Watch movies", "Counter Strike", "Chess"],
//   calculateAge: function () {
//     // return Math.floor(
//     //   (Date.now() - this.birthDate) / (1000 * 60 * 60 * 24 * 365.25)
//     // );

//     //hard way
//     const currentDate = new Date();
//     if (currentDate.getMonth() >= this.birthDate.getMonth()) {
//       if (currentDate.getDay() >= this.birthDate.getDay()) {
//         return currentDate.getFullYear() - this.birthDate.getFullYear();
//       } else {
//         return currentDate.getFullYear() - this.birthDate.getFullYear() - 1;
//       }
//     } else {
//       return currentDate.getFullYear() - this.birthDate.getFullYear() - 1;
//     }
//   },
// };

// console.log(
//   `${person.firstName} ${
//     person.lastName
//   } was born in ${person.birthDate.toDateString()} at ${
//     person.placeOfBirth
//   } (${person.calculateAge()} years old), nowadays has these hobbies: ${
//     person.hobbies
//   }`
// );

//exercise 6
const input = "+351123456789";
const phoneRegex = "";
console.log(phoneRegex.test());
