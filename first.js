// "use strict";

// printing
// console.log("Hello World")

// function defination
function getFullName(fName, lName) {
    return fName +" "+ lName
}

// calling function
// console.log(getFullName("vinoth","kumar"))

// declaring object
const person = {
    // properties
    fName: "vinoth",
    lName: "kumar",
    dept: "IT",
    age: 22,
    // method
    fullName: function (message) { return message + ", " +this.fName + " " + this.lName }
}

// console.log(person.fName)
// ins = getFullName
// console.log(ins("hi","vinoth","kumar"))
// console.log(person.fullName("Hi"))

// typeof function
let name = "vinoth";
// console.log(typeof (name))

let age = 20
// console.log(typeof String(age))
// console.log(typeof age)
// console.log(age.toString())


// console.log(typeof Boolean(age))
let x = new Number()
// console.log(typeof x)

// name = window.prompt("Enter your name: ")
// age = window.prompt("Enter your age: ")

// console.log(name)
// console.log(age)
// console.log(typeof age)

function hypotenuse() {
    let sideA, sideB, sideC;
    sideA = Number(document.getElementById("sidea").value);
    sideB = Number(document.getElementById("sideb").value);
    sideC = Math.sqrt(Math.pow(sideA,2) + Math.pow(sideB,2))
    document.getElementById("sideC").innerHTML = String(sideC)
}

// document.getElementById("submit").onclick = function () {
//     let sideA, sideB, sideC;
//     sideA = Number(document.getElementById("sidea").value);
//     sideB = Number(document.getElementById("sideb").value);
//     sideC = Math.sqrt(Math.pow(sideA,2) + Math.pow(sideB,2))
//     document.getElementById("sideC").innerHTML = String(sideC)
// }

let count = 0;

// document.getElementById("decrease").onclick = function () {
//     count -= 1
//     document.getElementById("count").innerHTML = count
// }

// document.getElementById("reset").onclick = function () {
//     count = 0
//     document.getElementById("count").innerHTML = count
// }

// document.getElementById("increase").onclick = function () {
//     count += 1
//     document.getElementById("count").innerHTML = count
// }


// string
let userName = "vinoth kumar"
// console.log(userName.length)
// console.log(userName.charAt(0))
// // console.log(userName.charCodeAt(0))
// console.log(userName[0]) // property access method
// console.log(userName[-1]) // returns undefined
// console.log(userName.indexOf("a"))
// console.log(userName.lastIndexOf("a"))
// console.log(userName.toUpperCase())
// console.log(userName.toLowerCase())
// console.log(userName.trim())
// console.log(userName.slice(0,6))
// console.log(userName.slice(-5))
// console.log(userName.substring(-5, 7)) // here the less than 0 trezted as 0
// console.log(userName.substr(0,6))
// console.log(userName.replace("vinoth", "veeram"))
// console.log(userName)

let message1 = "I am the best in the world"
let message2 = "Today is my Day"
// console.log(message1.replace("the", "THE"))
// console.log(message1.replace(/the/g, "THE"))
// console.log(message2.replace(/day/i, "DAY"))
// console.log(message1.concat(", ",message2))
// console.log(userName.padStart(15, "X"))
// console.log(userName.padEnd(15,"X"))
// console.log(userName.split(" "))
// console.log(userName.split(""))  // for split all char as array element.
// console.log(message1.indexOf("the"))
// console.log(message1.indexOf("the",10)) // second param optional for start
// console.log(message1.lastIndexOf("the"))
// console.log(message1.lastIndexOf("the",20))
// console.log(userName.indexOf("THE")) // return -1 if not matched
// console.log(message1.search("the"))
// console.log(message1.match(/the/g)) // return array if matched else null
// console.log(message1.match("thee"))
// console.log(message1.includes("thee")) // return true if string metched else false
// console.log(message1.includes("the",10)) // second param optional for start
// console.log(userName.startsWith("vinoth")) // return true once matched else false
// console.log(userName.startsWith("vinoth", 10)) // second param optional for start
// console.log(userName.endsWith("kumar"))
// console.log(userName.endsWith("vinoth",5))  // second param for limit the search length
// console.log(userName.endsWith("vinoth",6))



// excape charecters
let text1 = "The flower is \"Beautiful\""
let text2 = "The flower is so 'beautiful'"
let text3 = "The flower is \n awesome"
let text4 = "The flower is \t wonderful"
let text5 = "This is text\\5"

// console.log(text1)
// console.log(text2)
// console.log(text3)
// console.log(text4)
// console.log(text5)


// template literals
let backTick = `God is always with me.`
// console.log(typeof backTick)
// console.log(backTick)
// console.log(`My name is ${userName}`)
// console.log(`Addition of 2 and 3 is ${2+3}`)


// Numbers
let num1 = 10; // integer without period or exponentails are accurate upto 15 digits
let num2 = 10.5;
let num3 = 11e3;
// console.log(num1)
// console.log(typeof num2)
// console.log(num3)
let result = 1 / "a"
// console.log(result)
// console.log(typeof result)
// console.log(typeof NaN)
// console.log(typeof Infinity)
// console.log(typeof -Infinity)
// console.log(isNaN(1 / "1")) // false
// console.log(isNaN(1 / "a")) // true
// console.log(0x12) // JS treated as hexadecimal leading  0x present in a num
// console.log(074) // JS treated as octal when leading 07 present in a num
// console.log(num1)
// console.log(num1.toString())
// console.log(typeof num1.toString())
// console.log(num1.toString(32)) 
// console.log(num1.toString(16))
// console.log(num1.toString(10)) // 10
// console.log(num1.toString(8))
// console.log(num1.toString(2)) // 1010
let num4 = new Number(300); // 
let num5 = new Number(300);
// console.log(num4)
// console.log(typeof num4)
let num6 = 300;
// console.log(num4 == num6);
// console.log(num4 === num6);
// console.log(num4 == num5);
// console.log(num4 === num5);



let infNum = 2
let txt = ""
function checkInfinity() {
    while (infNum != Infinity) {
        infNum *= infNum
        txt += infNum + "\t"
    };
    console.log(txt);

}
// checkInfinity()
let str1 = new String()

// console.log(typeof num4) // returns object
// console.log(typeof num4.valueOf()) // returns number
// console.log(typeof txt) // returns string
// console.log(typeof str1) //returns object
// console.log(typeof str1.toString()) // returns string
// console.log(num6.toFixed(2))
// console.log(num4.toFixed(2)) // returns number with specified deccimal
// console.log(num6.toExponential(2)) // return number with specified decimal and exponentail
// console.log(num6.toPrecision(2)) // return number with specifird precision and exponentail

// console.log(Number(10))
// console.log(Number("10   "))
// console.log(Number(true))
// console.log(Number(false))
// console.log(Number(" "))
// console.log(Number("vinoth"))

// console.log(parseInt(10))
// console.log(parseInt("10.5"))
// console.log(parseInt("10  "))
// console.log(parseInt("   10"))
// console.log(parseInt("10 vinoth"))
// console.log(parseInt("vinoth 10"))

// console.log(parseFloat(10))
// console.log(parseFloat("10.5"))
// console.log(parseFloat("10   "))
// console.log(parseFloat("   10"))
// console.log(parseFloat("10 vinoth"))
// console.log(parseFloat("vinoth 10"))

// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY)
// console.log(Number.NaN)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)


const arr1 = ["apple", "orange", "banana", "graph"]
// console.log(arr1)
// console.log(typeof arr1)
const arr2 = new Array()
// console.log(arr2)
// console.log(typeof arr2)
const arr3 = new Array()
// console.log(arr2 == arr3)
// console.log(arr2 === arr3)
const arr4 = []
// console.log(arr2 === arr4)

// console.log(arr1[-1]) // returns undefined
// console.log(arr1.length)
// console.log(arr4.length)
// console.log(arr1[arr1.length - 1])
// for (let i=0; i < arr1.length; i++){
//     console.log(arr1[i])
// }

// arr1.forEach(myFun1)
// function myFun1(i) {
//     console.log(i)
// }

// console.log(arr1.push("gova"))
// console.log(arr1)
// console.log(arr1.pop("gova"))
// console.log(arr1)
// console.log(arr1.pop())
// console.log(arr1)
// arr1[arr1.length] = "jack_fruit"
// console.log(arr1)
// arr1[10] = "pinapple"
// console.log(arr1)  // create undefined holes
// console.log(arr1[5]) // returns undefined

// arr4["name"] = "vinoth";
// arr4["age"] = 21;
// console.log(arr4.length)
// console.log(arr4["name"])
// console.log(arr4["age"])
// console.log(arr4.length) returns 0
let obj1 = { "name": "vinoth" }
// console.log(ab.length) // return undefined

// checking array type
// console.log(arr1 instanceof Array)
// console.log(obj1 instanceof Array)
// console.log(Array.isArray(arr1))
// console.log(Array.isArray(obj1))

// console.log(arr1.toString())
// console.log(typeof arr1.toString())
// console.log(arr1.valueOf())
// console.log(arr1.join(" $ "))
// console.log(arr1.shift()) // remove a first element from an array
// console.log(arr1)
// console.log(arr1.unshift("watermelan")) // insert an element at first
// console.log(arr1)
// console.log(delete arr1[0]) // It leaves empty element in an array
// console.log(arr1)
// console.log(arr1.concat(arr2, "veeram", 2)) // it returns a new array after concadination.
// console.log()
// console.log(arr1.splice(1, 0, "kiwi", "straberry")) // first--> position, second--> how many element to be removed.
// console.log(arr1)
// console.log(arr1.splice(1, 2))
// console.log(arr1)
// console.log(arr1.slice(1)) // slice out rest of the element
// console.log(arr1)
// console.log(arr1.slice(1, 3)) // second --> specify upto(not include)
// console.log(arr1)
// console.log(arr1.toString())
// console.log(arr1.sort()) // accending order
// console.log(arr1)
// console.log(arr1.reverse()) // reverse an array element
// console.log(arr1.sort()) // decending order
// console.log(arr1.reverse())

// compare function for numeric sort
let numArray = [20, 34, 12, 27, 100,76]
// console.log(numArray.sort()) // incorrect result
// console.log(numArray.sort(function (a, b) { return a - b })) // accending
// console.log(numArray.sort(function(a,b) {return b-a})) // decending

// max and min in array
// console.log(Math.max.apply(null, numArray))
// console.log(Math.min.apply(null, numArray))

// forEach method
// console.log(numArray.forEach(fun2)); // return undefined

function fun2(value, index, array) {
    console.log(value, index, array);
    return value * 2;
}
function fun3(value) {
    console.log(`value - ${value}`)
    return value > 20;
}
function fun4(total, value, index, array) {
    console.log(total,value)
    return total + value;
}

// map method
// console.log(numArray.map(fun2)); // return a new array

// filter method
// console.log(numArray.filter(fun3)); // returns new array

// reduce method
// console.log(numArray.reduce(fun4)); // returns final value and operate left to right

// reduce with initial value
// console.log(numArray.reduce(fun4, 1000));

// reduceRight method
// console.log(numArray.reduceRight(fun4));

// reduceright method with initial value
// console.log(numArray.reduceRight(fun4,1000));

// every method
// console.log(numArray.every(fun3)) return boolen

// some method
// console.log(numArray.some(fun3))

// indexOf method
// console.log(numArray.indexOf(27)) // it search towards end
// console.log(numArray.indexOf(27, 0)) //returns corresponding index
// console.log(numArray.indexOf(27, 4)) // retunrns -1 if not matched

// lastIndexOf method
// console.log(numArray.lastIndexOf(27)) // return last occurance
// console.log(numArray.lastIndexOf(27,-2)) // It seach toward first
// console.log(numArray.lastIndexOf(27,-4)) // return -1

// find method
// console.log(numArray.find(fun3)); // return first matched element

// findIndex method
// console.log(numArray.findIndex(fun3)); // return first matched element index

// from method 
// console.log(Array.from("ABCDEF")) // create array from any iterable object

// keys method 
numArray["name"] = "vinoth"
numArray["age"] = 22
// console.log(numArray)
// const keys = numArray.keys()
// for (let x of keys) {
//     console.log(x)
// }

// values method
// for (let x of numArray.values()) {
//     console.log(x)
// }

// entries method
// const entities = numArray.entries() // like enumerate func in python
// for (let x of entities) {
//     console.log(x)
// }

// this loop returns all the indexes
// for (let x of numArray) {
//     console.log(x)
// }

// This loop returns all the keys
// for (let x in numArray) {
//     console.log(x)
// }

// includes method
// console.log(numArray.includes(27)) // return boolean if searched elemnt is matched
// console.log(numArray.includes("name"))
// console.log(numArray.includes(NaN))
// numArray.push(NaN)
// console.log(numArray)
// console.log(numArray.includes(NaN))

// Date objects
/*4 way to create date string
1. new Date()
2. new Date(year,month,day,hour,minute,second,millisecond)
3. new Date(date string)
4. new Date(millisecound)
*/


const date = new Date()
// console.log(date)
// console.log(date.toString())
// console.log(date.toUTCString())
// console.log(date.toISOString())
// console.log(date.toTimeString())
// console.log(date.toDateString())
// console.log(date.toLocaleString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())
// console.log(date.getFullYear())
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getHours())
// console.log(date.getMonth())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())
// console.log(date.getTime()) // returns milliseconds
// console.log(Date.now()) // returns millisecounds
// console.log(date.setFullYear(2000)
// console.log(date)


// console.log(new Date(2022, 0, 11).toString()) // month start with 0 and end with 11
// console.log(new Date(99, 1, 4).toString()) // previous century


// date string method
// console.log(new Date("Thu Feb 04 1999 00:00:00 GMT+0530"))

// millisecound method
// console.log(new Date(0).toString()) // 1970-01-01
// console.log(Date.parse("March 21, 2022")) // return millisecond


// console.log(new Date("2015-03-25").toString()) // ISO format
// console.log(new Date("Mar 25 2015").toString()) // long format
// console.log(new Date("03/25/2015").toString()) // short format

// Math module
// console.log(Math.E) // Euler's number
// console.log(Math.PI) // 3.14
// console.log(Math.SQRT2) // square root of 2
// console.log(Math.SQRT1_2) // square root of 1/2
// console.log(Math.LN2) // natural log of 2
// console.log(Math.LN10) // natural log of 10
// console.log(Math.LOG2E) // base 2 log of 2
// console.log(Math.LOG10E) // base 10 log of 10
// console.log(Math.abs(-38))
// console.log(Math.ceil(3.7))
// console.log(Math.floor(3.7))
// console.log(Math.exp(2))
// console.log(Math.random())
// console.log(Math.max(1,2,5,3,4))
// console.log(Math.min(10,2,5,2,4))
// console.log(Math.round(3.5415))
// console.log(Math.trunc(23.97)) // to get a inter part from a number
// console.log(Math.sign(-4)) // return -1
// console.log(Math.sign(3)) // return 1
// console.log(Math.sign(0)) // return 0
// console.log(Math.sign("name")) // return NaN
// console.log(Math.pow(2, 3))
// console.log(Math.sqrt(9))

// get the random intergers
// console.log(Math.floor(Math.random() * 10)) // generate between 0 and 10
// console.log(Math.floor(Math.random() * 100)) // generate between 0 and 100

// Boolean funciton
// console.log(Boolean(1 > 10))
// console.log(Boolean(""))
// console.log(Boolean(25 <= 100))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(true))
// console.log(Boolean(false))
// console.log(typeof true)
// console.log(typeof new Boolean(true))

// Logical operator
// && --> AND
// || --> OR
// ! --> NOT

// Ternary Operator
// console.log(numArray["age"] == 23 ? "PASS" : "FAIL")
// console.log(numArray["age"] == 22 ? "PASS": "FAIL")

// conditional statement
function checkAge(inputAge) {
    const age = Number(inputAge);
    if (age < 18) {
        return "You are too young!"
    }
    else if (18 <= age <= 50) {
        return "You are adalt!"
    }
    else {
        return "You are old age person!"
    }
    
}
// console.log(checkAge(10))
// console.log(checkAge(100))
// console.log(checkAge(14))

// Switch case
function checkWeekend() {
    let text;
    switch (new Date().getDay()) {
        case 6: // switch cases uses strict comparition (===)
        case 0:
            text = "It is weekend"
            break;
        case 4:
        case 5:
            text = "Soon it is weekend";
            break;
        default:            // this block only execute only if all cases failed
            text = "Looking forward to weekend";
            break;
    }
    return `${text}.`
    
}
// console.log(checkWeekend())

// for loop
// for (let i = 1; i < 11; i++){  // first--> local var,second --> condition, third --> increment
//     console.log("Iteration number",i)
// }

// i = 1;
// for (; i < 11;){
//     console.log("Iteration number", i)
//     i++
// }

// for in loop
// for (let x in numArray) { // return the keys
//     console.log(x)
// }

// for of loop
// for (let x of numArray) { // return the values
//     console.log(x)
// }

let i = 0;
// while loop
// while (numArray[i]) {
//     console.log(numArray[i])
//     i++
// }

// do while loop
// do {
//     console.log(numArray[i]);
//     i++
// }
// while (numArray[i]);

// set
const set1 = new Set([1, 5, 3, 8, 2])
// console.log(set1)
// console.log(typeof set1) // return object

// size property
// console.log(set1.size)  // equivalent to length property

// keys method
// console.log(set1.keys())

// values method
// console.log(set1.values())

// entries method
// console.log(set1.entries())

// clear method
// console.log(set1.clear()) // to clear all the set elements
// console.log(set1)

// add method
// console.log(set1.add(87))
// console.log(set1)

// delete method
// console.log(set1.delete(1))
// console.log(set1)

// has method
// console.log(set1.has(1))
// console.log(set1.has(11))

// forEach method
// set1.forEach(fun2)
// for (let i = 0; i < numArray.length; i++){
//     console.log(numArray[i])
// }


// Map datatype
// create a map object
const map1 = new Map([["name", "vinoth"]])
// console.log(map1)

// getting type
// console.log(typeof map1) // returns object

// set method
// console.log(map1.set("age", 20))
// console.log(map1)

// get method
// console.log(map1.get("name"))

// delete method
// console.log(map1.delete("age"))
// console.log(map1)

// size property
// console.log(map1.size)

// has method
// console.log(map1.has("name"))
// console.log(map1.has("age"))

// entries method
// console.log(map1.entries())

// clear method
// console.log(map1.clear())
// console.log(map1)

// forEach method
// map1.forEach(fun2)


// typeof function
// console.log(typeof "string") // return string (primitive)
// console.log(typeof 12) // return number (primitive)
// console.log(typeof true) // return boolean (primitive)
// console.log(typeof fun2) // return function (primitive)
// console.log(typeof obj1) // return object (primitive)
// console.log(typeof NaN); //return number (primitive)
// console.log(typeof null); // return object
// console.log(typeof undefined); // return undefined
// console.log(typeof new Date()) // return object
// console.log(typeof new String()) // return object
// console.log(typeof new Number()) // return object
// console.log(typeof new Boolean()) // return object
// console.log(typeof new Array()) // return object
// console.log(typeof numArray) // return object
// console.log(typeof set1) // return object
// console.log(typeof map1) // return object

// constructor property // it returns constructor
// console.log(str1.constructor) // return srring function
// console.log(str1.constructor.toString().indexOf("String") > -1)
// console.log(str1.constructor.toString().indexOf("Array") > -1)
// console.log(str1.constructor === String)
// console.log(str1.constructor === Array)

// null and undefined
// console.log(typeof null) // return object
// console.log(typeof undefined) // return undefined
// console.log(null == undefined) // return true
// console.log(null === undefined) // return false

// type conversion
// console.log(Number("vinoth")) // return NaN
// console.log(Number("")) // return 0
// console.log(Number(" ")) // return 0
// console.log(Number(null)) // return 0
// console.log(Number(undefined)) // return NaN
// console.log(Number(true)) // return 1
// console.log(Number(false)) // return 0
// console.log(Number([])) // return 0
// console.log(Number([20, 30])) //return NaN
// console.log(Number({})) // return NaN
// console.log(Number(Infinity)) // return Infinity
// console.log(Number("0")) // return 0
// console.log(Number("1")) // return 0
// console.log(Number("000")) // return 0
// console.log(Number("123")) // return 123
// console.log(Number(NaN)) // return NaN
// console.log(Number(new Date()))


// console.log(Boolean("vinoth")) // return true
// console.log(Boolean("")) // return false
// console.log(Boolean(" ")) // return true
// console.log(Boolean(null)) // return false
// console.log(Boolean(undefined)) // return flase
// console.log(Boolean(true)) // return true
// console.log(Boolean(false)) // return false
// console.log(Boolean([])) // return true
// console.log(Boolean([20, 30])) //return true
// console.log(Boolean({})) // return true
// console.log(Boolean(Infinity)) // return true
// console.log(Boolean(0)) // return 0
// console.log(Boolean(1)) // return 1
// console.log(Boolean("000")) // return true
// console.log(Boolean("123")) // return true
// console.log(Boolean(NaN)) // return flase


// console.log(String("vinoth")) // return "vinoth"
// console.log(String("")) // return ""
// console.log(String(" ")) // return " "
// console.log(String(null)) // return "null"
// console.log(String(undefined)) // return "undefined"
// console.log(String(true)) // return "true"
// console.log(String(false)) // return "false"
// console.log(String([])) // return ""
// console.log(String([20, 30])) //return "20,30"
// console.log(String({})) // return "[object Object]""
// console.log(String(Infinity)) // return "Infinity"
// console.log(String(0)) // return "0"
// console.log(String(1)) // return "1"
// console.log(String("000")) // return "000"
// console.log(String("123")) // return "123"
// console.log(String(NaN)) // return "NaN"

// number methods
// console.log(Number(12.03))
// console.log(parseFloat(12.03))
// console.log(parseInt(12.03))
// console.log((23.01).toExponential())
// console.log((23.01).toExponential(3))
// console.log((23.01).toFixed())
// console.log((23.01).toFixed(3))
// console.log((23.01).toPrecision())
// console.log((23.01).toPrecision(3))

// console.log(String(new Date()))
// console.log(new Date().toString())


// try catch
// try {
//     // console.log(veeram)
//     throw "There is no variable called 'veeram'"
//     // console.log("This is try block")
// }
// catch (err) {
//     console.log("This is catch block")
//     // console.log(err.name,err.message)
//     console.log(err)
// }
// finally {
//     console.log("This is final block")
// }

// "use strict" cause it will raise an error
// cv = "vinoth";

// this keyword
// In object --> 'this' refers to the object
// In function --> 'this' refers to the global obejct
// In alone --> 'this' refers to the global object
// In strict mode --> 'this' refers to the global object
// In function with strict mode --> 'this' refers to undefined.
// In event --> 'this' refers to html element.

// object method binding
const person1 = {
    fName: "vinoth",
    lName: "kumar",
    age: 22,
    getFullName: function () {
        return this.fName + ' ' + this.lName
    }
}
// console.log(person1.fName)
// console.log(person1.lName)
// console.log(person1.age)
// console.log(person1.getFullName())

// explicit function binding
const person2 = {
    fName: "vinoth",
    lName: "kuamr",
    getFullName: function () {
        return this.fName +" "+ this.lName
    }
};

const person3 = {
    fName: "vinothh",
    lName: "kumarr",
    age: 22
}
// console.log(person2.getFullName())
// console.log(person2.getFullName.call(person3))
// let fullName = person2.getFullName.bind(person3)
// console.log(fullName())
// console.log(person2.getFullName.apply(person3))


function hello1() {
    return "Hello World!"
}
// console.log(hello1())

hello2 = function () {
    return "Hello World!"
}
// console.log(hello2())

// Arrow function
hello3 = () => {
    return "Hello World!"
}
// console.log(hello3())

// Arrow function return by default if function has one statement
hello4 = () => "Hello World!"
// console.log(hello4())

// Arroy function with parameters
greeting = (name) => {
    return `Hi ${name}, Welcome to JS.`
}
// console.log(greeting("vinoth"))


/*  1. In array function 'this' keyword represents
    the object that defined the arrow function

    2. In regular function 'this' keyword represents
    the object that call the function
*/

// class in JS
class Employee {
    constructor(fName,lName,age,dept) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.dept = dept;
    }
    getFullName() {
        return this.fName + ' ' + this.lName
    }
    getInfo() {
        return `${this.getFullName()} from ${this.dept}, having ${this.age} years old.` 
    }

}

//  obj1
// const employee1 = new Employee("Vinoth", "kumar", "22", "EEE")
// console.log(employee1)
// console.log(employee1.getFullName())
// console.log(employee1.getInfo())

// obj2
// const employee2 = new Employee("Ajith", "kumar", "20", "MECH")
// console.log(employee2)
// console.log(employee2.getFullName())
// console.log(employee2.getInfo())


// JSON --> Java Script Object Notation
let jsonText = '{"name": "vinoth","age": 20}'
// console.log(jsonText)
// console.log(JSON.parse(jsonText))

// Objects --> similar to dict in python
// object defination
const user = {
    fName: "vinoth",
    lName: "kumar",
    age: 22
}
// console.log(user)
// console.log(delete user.age)
// console.log(user)

const user1 = new Object()
// user1.fname = "Karan"
// console.log(user1)


// convert object into json
// console.log(JSON.stringify(user))

// convert json into object
// console.log(JSON.parse(JSON.stringify(user)))

// extract keys from object
// console.log(Object.keys(user))
// console.log(Object.keys(numArray) instanceof Array)
// console.log(Array.isArray(Object.keys(numArray)))