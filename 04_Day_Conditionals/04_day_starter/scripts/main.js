// this is your main.js script

alert('Open the browser console whenever you work on JavaScript')

/* 
Exercises: Level 2

1.Write a code which can give grades to students according to theirs scores:
    80-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F

2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    September, October or November, the season is Autumn.
    December, January or February, the season is Winter.
    March, April or May, the season is Spring
    June, July or August, the season is Summer

3.Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/

const studentScore = 77
let grade
if (studentScore >= 80) {
    grade = "A"
} else if (studentScore >= 70) {
    grade = "B"
} else if (studentScore >= 60) {
    grade = "C"
} else if (studentScore >= 50) {
    grade = "D"
} else {
    grade = "E"
}

const clientMonth = "April"
let season
if (clientMonth == "September" || clientMonth == "October" || clientMonth == "November") {
    season = "Autumn"
} else if (clientMonth == "December" || clientMonth == "January" || clientMonth == "February") {
    season = "Winter"
} else if (clientMonth == "March" || clientMonth == "April" || clientMonth == "May") {
    season = "Spring"
} else if (clientMonth == "June" || clientMonth == "July" || clientMonth == "August") {
    season = "Summer"
}

const clientDay = "SAturday"

if (clientDay.match(/saturday/g) || clientDay.match(/sunday/g)) {
    console.log("WEEKEND!")
} else {
    console.log("Working day! :( ")
}
/*
Exercises: Level 3

4.Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.

5.Write a program which tells the number of days in a month, now consider leap year.
*/

let monthName = "mARCH"
let isLeapYear = true
let amountOfDays

switch (monthName.toLowerCase()) {
    case "january": case "march": case "may": case "july": case "september": case "november":
        amountOfDays = 31
        break
    case "february":
        isLeapYear ? amountOfDays = 29 : amountOfDays = 28
        break
    default:
        amountOfDays = 30
        break
}
console.log(amountOfDays)