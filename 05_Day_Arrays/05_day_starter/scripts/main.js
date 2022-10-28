console.log(countries)

/* 
Exercise: Level 1

1.Declare an empty array;
2.Declare an array with more than 5 number of elements
3.Find the length of your array
4.Get the first item, the middle item and the last item of the array
5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
7.Print the array using console.log()
8.Print the number of companies in the array
9.Print the first company, middle and last company
10.Print out each company
11.Change each company name to uppercase one by one and print them out
12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
14.Filter out companies which have more than one 'o' without the filter method
15.Sort the array using sort() method
16.Reverse the array using reverse() method
17.Slice out the first 3 companies from the array
18.Slice out the last 3 companies from the array
19.Slice out the middle IT company or companies from the array
20.Remove the first IT company from the array
21.Remove the middle IT company or companies from the array
22.Remove the last IT company from the array
23.Remove all IT companies
*/

const emptyArray = []
const fiveNumbersArray = new Array(5).fill("a")
const fiveNumbersArrayLenght = fiveNumbersArray.length

console.log(fiveNumbersArray[0])
console.log(fiveNumbersArray[fiveNumbersArrayLenght - 1])
const fiveNumbersArrayMiddleIndex = parseInt(fiveNumbersArrayLenght / 2)
console.log(fiveNumbersArray[fiveNumbersArrayMiddleIndex])
const mixedDataTypes = ["A", 0, undefined, ['a', 'b'], []]
console.log(mixedDataTypes.length)

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log("First company = %s", itCompanies[0])
console.log("Middle company = %s", itCompanies[parseInt(itCompanies.length / 2)])
console.log("Last company = %s", itCompanies[itCompanies.length - 1])

for (let x = 0; x < itCompanies.length; x++) {
    console.log(itCompanies[x].toUpperCase())
}
console.log(itCompanies + " are big IT companies!")

if (itCompanies.indexOf('Google') == -1) {
    console.log("Company NOT found!")
} else {
    console.log("Company found!")
}

console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies.slice(0, 3))
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))
console.log(itCompanies.slice(2, 5))
itCompanies.shift()
console.log(itCompanies.splice(3, 3))
itCompanies.pop()
console.log(itCompanies.splice())

/*
Exercise: Level 2

24.Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
25.First remove all the punctuations and change the string to array and count the number of words in the array

    let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    console.log(words)
    console.log(words.length)
    ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
    13

26.In the following shopping cart add, remove, edit items
        const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    -add 'Meat' in the beginning of your shopping cart if it has not been already added
    -add Sugar at the end of you shopping cart if it has not been already added
    -remove 'Honey' if you are allergic to honey
    -modify Tea to 'Green Tea'

27.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
28.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
29.Concatenate the following two variables and store it in a fullStack variable.
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
    console.log(fullStack)
    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
*/

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace(/[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/g, "")
let words = text.split(" ")
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.push('Meat')
if (shoppingCart[shoppingCart.length - 1] != 'Sugar') {
    shoppingCart[shoppingCart.length] = 'Sugar'
}
if (shoppingCart.lastIndexOf('Honey') != -1) {
    let indexToRemove = shoppingCart.lastIndexOf('Honey')
    shoppingCart.splice(indexToRemove, 1)
}

let teaIndex = shoppingCart.indexOf("Tea")
shoppingCart[teaIndex] = "Green Tea"

console.log("Shopping cart: " + shoppingCart)

countries.indexOf("Ethiopia") == -1 ? countries.push("Ethiopia") : print("ETHIOPIA")

webTechs.indexOf("Sass") == -1 ? console.log(webTechs) : print("Sass is a CSS preprocess")

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd + backEnd
console.log("FullStack = " + fullStack)

/*
Exercise: Level 3

30.The following is an array of 10 students ages:
        const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    -Sort the array and find the min and max age
    -Find the median age(one middle item or two middle items divided by two)
    -Find the average age(all items divided by number of items)
    -Find the range of the ages(max minus min)
    -Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
    
31.Find the middle country(ies) in the countries array
32.Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sortedAges = ages.sort()
const minAge = sortedAges[0]
const maxAge = sortedAges[sortedAges.length - 1]
console.log(sortedAges)
let medianAge

if (sortedAges.length % 2 == 0) {
    let sum = sortedAges[sortedAges.length / 2] + sortedAges[sortedAges.length / 2 + 1]
    medianAge = sum / 2
} else {
    medianAge = parseInt(sortedAges.length / 2 - 1)
}
console.log(medianAge)

let agesRange = maxAge - minAge
console.log("Range = " + agesRange)

const agesSum = ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9]
const averageAge = agesSum / ages.length

console.log("Abs min = " + Math.abs(minAge - averageAge))
console.log("Abs max = " + Math.abs(maxAge - averageAge))

const countriesLenght = countries.length
let middleCountry
let countries1
let countries2

if (countriesLenght % 2 == 0) {
    middleCountry = [countries[countriesLenght / 2], countries[countriesLenght / 2 + 1]]
    countries1 = countries.slice(0, countriesLenght / 2 - 1)
    countries2 = countries.slice(countriesLenght / 2 - 1, countriesLenght - 1)
} else {
    middleCountry = countries[parseInt(countriesLenght / 2)]
    countries1 = countries.slice(0, parseInt(countriesLenght / 2))
    countries2 = countries.slice(parseInt(countriesLenght / 2) - 1, countriesLenght - 1)
}
console.log("MiddleCountry = %s", middleCountry)
console.log(countries1)
console.log(countries2)