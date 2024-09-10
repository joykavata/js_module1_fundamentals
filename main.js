//context 1:personal info

//Create an object
//camelCasing or PascalCasing

let personalInfo={
    //add key value pairs
    name:"Faith",
    age: 30,
    address: "65 Muthithi rd"
}

console.log(personalInfo)

//Variable declaration
let number
console.log(number)

//Variable re-assignment
number= 51616
console.log(number)

//We can assign variables to other variables

let a = 10
let b = 20
let sum = a+b
console.log(sum)

a= 30
b= 50
sum=a+b
console.log(sum)

 // Conditional Statements or Control flow

let religion = ""

if (religion === "Christian") {
    console.log("You worship in church")
}
else if (religion === "Muslim") {
    console.log("You worship in the mosque")
}
else if (religion === "Hindu") {
    console.log("You worship in the temple")
}
else {
    console.log("You have no religion")
}
let greeting = "Hello", name = "Alice"
// let greetingName = greeting + "," + name + "!" // Hello,Alice!
// console.log(greetingName)
console.log(`${greeting},${name}!`)

//MULTIPLICATION TABLE
for(let a=1;a<=19;a++){
    console.log(`MULTIPLICATION TABLE FOR ${a}`)
    
    for(let b=1;b<=19;b++){
        console.log(`${a} x ${b} = ${a*b}`)
    }
}
