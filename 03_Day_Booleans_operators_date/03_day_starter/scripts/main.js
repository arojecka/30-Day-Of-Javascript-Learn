/* 
    Exercises: Level 1
    1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
    2.Check if type of '10' is equal to 10
    3.Check if parseInt('9.8') is equal to 10
    4.Boolean value is either true or false.
        i.Write three JavaScript statement which provide truthy value.
        ii.Write three JavaScript statement which provide falsy value.

    5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
        4 > 3
        4 >= 3
        4 < 3
        4 <= 3
        4 == 4
        4 === 4
        4 != 4
        4 !== 4
        4 != '4'
        4 == '4'
        4 === '4'
        Find the length of python and jargon and make a falsy comparison statement.

    6.Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
        4 > 3 && 10 < 12
        4 > 3 && 10 > 12
        4 > 3 || 10 < 12
        4 > 3 || 10 > 12
        !(4 > 3)
        !(4 < 3)
        !(false)
        !(4 > 3 && 10 < 12)
        !(4 > 3 && 10 > 12)
        !(4 === '4')
        There is no 'on' in both dragon and python

    7.Use the Date object to do the following activities
        What is the year today?
        What is the month today as a number?
        What is the date today?
        What is the day today as a number?
        What is the hours now?
        What is the minutes now?
        Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

const firstName = "Hejo",
    lastName = "Tobie",
    country = "Poland",
    city = "Niemce",
    age = 11,
    isMarried = true,
    year = 3300

console.log(typeof (firstName))
typeof (lastName)
typeof (country)
typeof (city)
typeof (age)
typeof (isMarried)
typeof (year)

console.log('10' == 10)
console.log(parseInt('9.8') == 10)

console.log('0000000.00' == 0)
console.log(undefined == undefined)
console.log(NaN == NaN)
console.log('00' + 1 == 1)
console.log(1 + '00' == 1)
console.log(0 == null)

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log(33 === 13)
console.log("----Ex 6")
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
const dragon = "dragon"
const python = "python"
console.log(!(dragon.includes('on') && python.includes('on')))

const date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getTime() * 0.01)
/*
    Exercises: Level 2

    8.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
        Enter base: 20
        Enter height: 10
        The area of the triangle is 100

    9.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
        Enter side a: 5
        Enter side b: 4
        Enter side c: 3
        The perimeter of the triangle is 12

    10.Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

    11.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

    12.Calculate the slope, x-intercept and y-intercept of y = 2x -2

    13.Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

    14.Compare the slope of above two questions.
        Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

    15.Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
        Enter hours: 40
        Enter rate per hour: 28
        Your weekly earning is 1120

    16.If the length of your name is greater than 7 say, your name is long else say your name is short.

    17.Compare your first name length and your family name length and you should get this output.
        let firstName = 'Asabeneh'
        let lastName = 'Yetayeh'
        Your first name, Asabeneh is longer than your family name, Yetayeh

    18.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
        let myAge = 250
        let yourAge = 25
        I am 225 years older than you.

    19.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
        Enter birth year: 1995
        You are 25. You are old enough to drive
        Enter birth year: 2005
        You are 15. You will be allowed to drive after 3 years.

    20.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
        Enter number of years you live: 100
        You lived 3153600000 seconds.

    21.Create a human readable time format using the Date time object
        YYYY-MM-DD HH:mm
        DD-MM-YYYY HH:mm
        DD/MM/YYYY HH:mm
*/
let baseTr1 = parseFloat(prompt("Set base of triangle"))
let heightTr1 = parseFloat(prompt("Set height of triangle"))

console.log("Area of triangle = " + (0.5 * baseTr1 * heightTr1))

let sideA = parseFloat(prompt("set side a value:"))
let sideB = parseFloat(prompt("set side b value:"))
let sideC = parseFloat(prompt("set side c value:"))

console.log("perimeter of a triangle = " + (sideA + sideB + sideC))

let lenght = parseFloat(prompt("Set lenght of triangle"))
let height = parseFloat(prompt("Set height of triangle"))

console.log("Area of traingle = " + (lenght * height) + " and perimeter = " + (2 * (lenght + height)))

let radius = parseFloat(prompt("Set radius"))

console.log("Area of a circle = " + (Math.PI * radius * radius) + " and circumference = " + (c = 2 * Math.PI * radius))
const x = 2
console.log("Y = " + (2 * x - 2))

const point1 = [2, 2]
const point2 = [6, 10]
const m = parseFloat((point2[1] - point1[1]) / (point2[0] - point1[0]))
console.log("Slope2 = " + m)

console.log("y = " + (x * x + 6 * x + 9))

let rate = prompt("Rate per hour")
let hours = prompt("Hours")

console.log("Week salary = " + (rate * hours))

const myName = "Anefffta"
myName.length > 7 ? console.log("My name is long") : console.log("My name is short")

const secondName = "sty"
firstName.length < secondName.length ? console.log(firstName + " is shorter than " + secondName) : console.log(firstName + " is longer than " + secondName)

const myAge = 12
const yourAge = 33
myAge > yourAge ? console.log("I am " + (myAge - yourAge) + " years old") : console.log("You are " + (yourAge - myAge) + " years than me")


let birthYear = prompt("Enter year of born")
const currentYear = date.getFullYear()
const yearDiff = currentYear - parseInt(birthYear)
yearDiff >= 18 ? console.log("You are " + yearDiff + ". You are old enough to drive") : console.log("You are " + yearDiff + ". You are not old enough to drive")

let numberOfYears = prompt("Enter number of years you live")
const numberOfMiliseconds = numberOfYears * 365 * 24 * 60 * 100
console.log("You live " + numberOfMiliseconds + " miliseconds")

const month = date.getMonth()
const day = date.getDay()
const hour = date.getHours()
const minutes = date.getMinutes()
console.log(currentYear + "-" + month + "-" + day + " " + hour + ":" + minutes)
console.log(day + "-" + month + "-" + currentYear + " " + hour + ":" + minutes)
console.log(day + "/" + month + "/" + currentYear + " " + hour + ":" + minutes)

/*
    Exercises: Level 3

    22.Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
    YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/

let finalMonth
let finalDay

month < 10 ? finalMonth = "0" + month : finalMonth = month
day < 10 ? finalDay = "0" + day : finalDay = day
console.log(currentYear + "-" + finalMonth + "-" + finalDay + " " + hour + ":" + minutes)