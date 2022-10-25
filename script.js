class Rectangle {
  constructor(_width, _height, _color) {
    console.log("The rectangle is being created");
    this.width = _width;
    this.height = _height;
    this.color = _color;
  }

  getArea() {
    return this.width * this.height;
  }
}

let myRectangle1 = new Rectangle(10, 30, "green");

console.log(myRectangle1);
console.log(myRectangle1.getArea());
