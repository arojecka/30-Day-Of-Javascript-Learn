console.log(countries)

const countries2 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

alert('Open the console and check if the countries has been loaded')

/*
Exercises: Level 2

    1.Develop a small script which generate any number of characters random id:
        fe3jo1gl124g
        xkqci4utda1lmbelpkm03rba

    2.Write a script which generates a random hexadecimal number.
        '#ee33df'
    
    3.Write a script which generates a random rgb color number.
        rgb(240,180,80)

    4.Using the above countries array, create the following new array.
    ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

    5.Using the above countries array, create an array for countries length'.
        [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

    6.Use the countries array to create the following array of arrays:
        [
        ['Albania', 'ALB', 7],
        ['Bolivia', 'BOL', 7],
        ['Canada', 'CAN', 6],
        ['Denmark', 'DEN', 7],
        ['Ethiopia', 'ETH', 8],
        ['Finland', 'FIN', 7],
        ['Germany', 'GER', 7],
        ['Hungary', 'HUN', 7],
        ['Ireland', 'IRE', 7],
        ['Iceland', 'ICE', 7],
        ['Japan', 'JAP', 5],
        ['Kenya', 'KEN', 5]
        ]

    7.In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
        ['Finland','Ireland', 'Iceland']

    8.In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
        ['Albania', 'Bolivia','Ethiopia']

    9.Using the above countries array, find the country containing the biggest number of characters.
        Ethiopia

    10.Using the above countries array, find the country containing only 5 characters.
        ['Japan', 'Kenya']

    11.Find the longest word in the webTechs array
    12.Use the webTechs array to create the following array of arrays:
        [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
    
    13.An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
    14.Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
    15.This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
    16.Print all the elements of array as shown below.
        const fullStack = [
            ['HTML', 'CSS', 'JS', 'React'],
            ['Node', 'Express', 'MongoDB']
        ]

        HTML
        CSS
        JS
        REACT
        NODE
        EXPRESS
        MONGODB
  */

const numberOfCharacters = 11
const alphabet = "abcdefghijklmnopqrstuvwxyz123456789"
let randomString = ""

for (let x = 0; x < numberOfCharacters; x++) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)]
}
console.log(randomString)

const hexadecimal = "1234567890abcdef"
let randomHexString = "#"

for (let x = 0; x < 6; x++) {
    randomHexString += hexadecimal[Math.floor(Math.random() * hexadecimal.length)]
}
console.log(randomHexString)

let rgbRandom = "rgb("

for (let x = 0; x < 3; x++) {
    rgbRandom += Math.floor(Math.random() * 255)
    if (x < 2) {
        rgbRandom += ", "
    }
}
rgbRandom += ")"
console.log(rgbRandom)

let upperCaseCountries = []
for (const country of countries2) {
    console.log(country)
    upperCaseCountries.push(country.toUpperCase())
}
console.log(upperCaseCountries)

let countriesLenght = []
for (const country of upperCaseCountries) {
    countriesLenght.push(country.length)
}
console.log(countriesLenght)

let doubleArray = []
for (const country of upperCaseCountries) {
    doubleArray.push([country.toUpperCase(), country.toUpperCase().substring(0, 3), country.length])
    console.log(doubleArray)
}

let landArray = []
for (const country of countries) {
    if (country.includes('land')) {
        landArray.push(country)
    }
}
landArray != [] ? console.log('Land array = ' + landArray) : console.log('All these countries are without land')

let iaArray = []
for (const country of countries) {
    if (country.endsWith("ia")) {
        iaArray.push(country)
    }
}
iaArray == [] ? console.log('These are countries ends without ia') : console.log(iaArray)

let maxCountryLenght = 0
let longestCountry
for (const country of countries) {
    if (country.length > maxCountryLenght) {
        longestCountry = country
        maxCountryLenght = country.length
    }
}

console.log("The longest country = " + longestCountry)

/*
Exercises: Level 3

   17.Copy countries array(Avoid mutation)
   18.Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
   19.Sort the webTechs array and mernStack array
   20.Extract all the countries contain the word 'land' from the countries array and print it as array
   21.Find the country containing the hightest number of characters in the countries array
   22.Extract all the countries contain the word 'land' from the countries array and print it as array
   23.Extract all the countries containing only four characters from the countries array and print it as array
   24.Extract all the countries containing two or more words from the countries array and print it as array
   25.Reverse the countries array and capitalize each country and stored it as an array
*/

const countriesCopied = countries
const sortedCountries = countriesCopied.sort()
webTechs.sort()
mernStack.sort()
