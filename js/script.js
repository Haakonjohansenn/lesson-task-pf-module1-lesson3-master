var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber) {
  console.log("true");
}

var age = 11;
var minimumAge = "13";

if (age > minimumAge) {
  console.log("true");
} else {
  console.log("false");
}

var income = "11.050";
var maximumIncome = "13.075";

if (income < maximumIncome) {
  console.log("true");
} else {
  console.log("false");
}

var colour = "blue";

if (colour === "orange") {
  console.log("This colour is a bit rubbish");
}

var invoicePaid = false;

if (invoicePaid === false) {
  console.log("Not paid");
}

var selectedNumber = 11;
var winningNumber = "15";

if (selectedNumber === winningNumber) {
  console.log("Winner!");
} else {
  console.log("You lose again");
}

var dayOfTheWeek = 2;
var day;

switch (dayOfTheWeek) {
  case 1:
    day = "Monday";
    break;

  case 2:
    day = "Tuesday";
    break;

  case 3:
    day = "Wednesday";
    break;

  case 4:
    day = "Thursday";
    break;

  case 5:
    day = "Friday";
    break;

  case 6:
    day = "Saturday";
    break;

  case 7:
    day = "Sunday";
    break;

  default:
    day = "Invalid day number";
}

console.log("Today is", day);
