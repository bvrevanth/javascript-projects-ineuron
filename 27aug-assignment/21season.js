// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

let month = prompt("Enter Month: ");

if (month == "September" || month == "October" || month == "November") {
  document.write("the season is AUTUM");
} else if (month == "December" || month == "January" || month == "February") {
  document.write("the season is WINTER");
} else if (month == "March" || month == "April" || month == "May") {
  document.write("the season is SPRING");
} else if (month == "June" || month == "July" || month == "August") {
  document.write("the season is SUMMER");
}
