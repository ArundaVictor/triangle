function triangle() {
var a = parseInt(document.getElementById("sideA"));
var b = parseInt(document.getElementById("sideB"));
var c = parseInt(document.getElementById("sideC"));

if ((a === b && a === c & b === c)) {
  alert("The triangle is an Equilateral triangle")
} else if ((a !== b && a !== c && b !== c)) {
  alert("The triangle is a Scalene triangle")
} else if ((a+b<=c || a+c<=b || b+c<=a)) {
  alert("The triangle is an isoceles triangle")
} else {
  alert("That is not a triangle")
}
}
