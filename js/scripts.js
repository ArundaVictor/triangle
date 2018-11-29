function triangle(a, b, c) {

};

var a = parseInt(prompt("Enter the value of side a"));
var b = parseInt(prompt("Enter the value of side b"));
var c = parseInt(prompt("Enter the value of side c"));

if ((a === b && a === c & b === c)) {
  alert("The triangle is an Equilateral triangle")
} else if ((a !== b && a !== c && b !== c)) {
  alert("The triangle is a Scalene triangle")
} else if ((a === b || a === c || b === c)) {
  alert("The triangle is an isoceles triangle")
} else {
  alert("That is not a triangle")
}
