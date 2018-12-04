var sides = []

function triangle(sides) {
  var a = parseInt(document.getElementById("sideA").value);
  var b = parseInt(document.getElementById("sideB").value);
  var c = parseInt(document.getElementById("sideC").value);
  var sides = [];
  sides.push(a, b, c);
  var e = sides[0]
  var f = sides[1]
  var g = sides[2]

  if ((e === f && e === g && f === g)) {
    alert("The triangle is an Equilateral triangle")
  } else if ((e == f || e == g || f == g)) {
    alert("The triangle is an isoceles triangle")
  } else if ((e+f>=g && e+g>=f && f+g>=e)) {
    alert("The triangle is a Scalene triangle")
  } else if ((e+f<=g || e+g<=f || g+f<=e))
    alert("That is not a triangle")
  }
