"use strict";
// class Rectangle {
//   constructor(_width, _height, _color) {
//     console.log("The rectangle is being created");
//     this.width = _width;
//     this.height = _height;
//     this.color = _color;
//   }

//   getArea() {
//     return this.width * this.height;
//   }
// }

// let myRectangle1 = new Rectangle(10, 30, "green");

// console.log(myRectangle1);
// console.log(myRectangle1.getArea());

// const koii = {
//   year: 1999,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
// };

// const eea = {
//   year: 2002,
// };
// console.log("eea", eea);

// eea.calcAge = koii.calcAge;

// eea.calcAge();
// koii.calcAge();

// const f = {};

// f.calcAge = koii.calcAge;
// f.calcAge();

// const koii = {
//   firstName: "koii",
//   year: 1999,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2022 - this.year);

//     // solution 1
//     // const self = this;
//     // const isGenZ = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1997 && self.year <= 2005);
//     // };

//     // solution 2
//     const isGenZ = () => {
//       console.log(this);
//       console.log(this.year >= 1997 && this.year <= 2005);
//     };
//     isGenZ();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// koii.greet();
// koii.calcAge();

const object = {
  name: "koii",
  gender: "female",
  regFunction: function () {
    console.log(this.name);

    const arrowFunction = () => {
      console.log(this.gender);
    };
    arrowFunction();
  },
};
object.regFunction();
