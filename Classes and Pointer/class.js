//this is a class cookie
class Cookie {
  constructor(color) {
    this.color = color;
  }
  // Getter
  getColor() {
    return this.color;
  }
  // Setter
  setColor(color) {
    this.color = color;
  }
}

// Create a new instance of the Cookie class
let cookieOne = new Cookie("brown");
let cookieTwo = new Cookie("white");

console.log(cookieOne.getColor()); // brown
console.log(cookieTwo.getColor()); // white

cookieOne.setColor("red");
cookieTwo.setColor("green");
console.log(cookieOne.getColor()); // red
console.log(cookieTwo.getColor()); // green
