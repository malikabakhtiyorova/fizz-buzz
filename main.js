var fizzBuzzForm = document.querySelector(".fizz-buzz-form");
var numbers = fizzBuzzForm.querySelector(".js-number");
var fizzResult = document.querySelector(".fizz")
var fizzBuzzResult = document.querySelector(".fizz-buzz")
var buzzResult = document.querySelector(".buzz")

fizzBuzzForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var fizz = [];
  var buzz = [];
  var fizzBuzz = [];

  var number = numbers.value.trim();
  if (number === "") {
    alert("Sonni kiriting");
    return;
  }
  var realNumber = parseFloat(number, 10);
  if (isNaN(realNumber)) {
    alert("Bu yerga son kiritiladi");
    return;
  }

  for (i = 1; i <= realNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzz.push(i);
    }
    if (i % 3 === 0) {
      fizz.push(i);
    }
    if (i % 5 === 0) {
      buzz.push(i);
    }
  }
  console.log(fizz);
  fizzResult.textContent += fizz;
  console.log(buzz);
  buzzResult.textContent += buzz;
  console.log(fizzBuzz);
  fizzBuzzResult.textContent += fizzBuzz;
})