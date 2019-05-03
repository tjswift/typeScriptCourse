// //string
// let myName = "Tristen";
// //myName = 28; This cannot equal 28 because myName was initiated as a string
// let myAge = 23;
// //myAge = "Tristen"; Nope. doesnt match type
// let hasHobbies = true;
// //hasHobbies = 1; Nope
// //assign types
// let myRealAge;
// myRealAge = 27;
// myRealAge = "27"; //this works, since we didn't initiate a type when declaring the variable
// //myRealAge defaulted to type "Any"
// //array
// let hobbies: any[] = ["Cooking", "Sports"];
// hobbies = [100]
// //hobbies = 100; would not work because it is not an array type
// //tuples
// let address: [string, number] = ["Witham Hill", 159];
// //enum
// enum Color {
//     Gray, //0
//     Green = 100, //100
//     Blue = 2 //2
// }
// let myColor: Color = Color.Blue;
// console.log(myColor);
// //any
// let car: any = "BMW";
// console.log(car);
// car = {brand: "BMW", series: 3};
// console.log(car);
// //functions
// function returnMyName(): string {
//     return myName;
// }
// console.log(returnMyName());
// //void
// function sayHello(): void{
//     console.log("Hello");
//     //return myName //This gives error. "void" doesn't return anything    
// }
// //argument types
// function multiply(value1: number, value2: number): number{
//     return value1 * value2;
// }
// //console.log(multiply(2, "max")); throws error since "max is not a number"
// console.log(multiply(10, 2));
// //function types
// let myMultiply: (val1: number, val2: number) => number ;
// //myMultiply = sayHello; myMultiply expects a funcion that takes two numbers, and returns a number 
// //myMultiply(); wouldn't work
// myMultiply = multiply;
// console.log(myMultiply(5, 2));
// //objects
// let userData: {name: string, age: number} = {
//     name: "Tristen",
//     age: 27
// }
// //userData = {
// //    a: "Hello",
// //    b: 22
// //};
// //complex object
// let complex: {data: number[], output: (all: boolean) => number[]} = {
//     data: [100, 3.99, 10],
//     output: function(all: boolean): number[] {
//         return this.data;
//     }
// }
// //type alias
// type Complex = {data: number[], output: (all: boolean) => number[]}; //this is now reusable as type "Complex" as seen below
// let complex2: Complex = {
//     data: [100, 3.99, 10],
//     output: function(all: boolean): number[] {
//         return this.data;
//     }
// };
// //union types
// let myRealRealAge: number | string = 24;
// myRealRealAge = "24";
// //myRealRealAge = true; does not work, as it is no a string or a number
// //check types
// let finalValue = 23;
// if (typeof finalValue == "number" ){
//     console.log("Final value is a number")
// }
// //********************** */MODULE 4 *************************
// //let and const
// console.log("LET & CONST")
// var variable = "test"; //creates a global scope
// let variable2 = "test"
// console.log(variable2);
// variable2 = "another value";
// console.log(variable2);
// const maxLevels = 100; //const makes a variable unable to be changed
// console.log(maxLevels);
// //maxLevels = 99; it will not let you do this since maxLevels was already assigned
// //block scope
// function reset() {
//     let variable = null;
//     console.log(variable)
// }
// reset();
// console.log(variable);
// //Arrow Function
// console.log("ARROW FUNCTION");
// const addNumbers = function(number1: number, number2: number ) {
//     return number1 + number2; //normal function
// }
// console.log(addNumbers(10, 3));
// const multiplyNumbers = (number1: number, number2: number) => number1 * number2; //arrow function
// console.log(multiplyNumbers(10, 3));
// const greet = () => {
//     console.log("hello!");
// };
// greet();
// const greetFriends = (friend: string) => console.log(friend);
// greetFriends("Aleesha");
// //default parameters
// console.log("DEFAULT PARAMETERS");
// const countdown = (start: number = 10 ): void => { //start: number = 10 sets start to 10 by default
//     console.log(start);
//     while (start > 0) {
//         start--
//     }
//     console.log("Done!", start);
// }
// countdown(20);
// // Rest and Spread
// console.log("REST & SPREAD");
// const numbers = [1, 10, 199, -5];
// console.log(Math.max(...numbers)); //... is the spread operator. it puts the array into a list
// function makeArray(...args: number[]) { //in this case ... is a rest operator
//     return args
// }
// console.log(makeArray(1, 3, 65, 76, -3, 65, 4));
// // Desctructuring
// console.log("DESTRUCTURING")
// const myHobbies = ["Drums", "Tenass", "Coding"];
// const [hobby1, hobby2, hobby3] = myHobbies;
// console.log(hobby1, hobby2, hobby3);
// const userData = {userName: "Tristen", age: 23};
// const {userName, age} = userData;
// console.log(userName, age);
// //Template Literals
// console.log("TEMPLATE LITERALS");
// const personName = "Tristen";
// const greeting = `This is a heading!
// I'm ${personName}.
// this is cool!`;
// console.log(greeting);
// //union types
// let myRealRealAge: number | string = 24;
// myRealRealAge = "24";
// //myRealRealAge = true; does not work, as it is no a string or a number
// //check types
// let finalValue = 23;
// if (typeof finalValue == "number" ){
//     console.log("Final value is a number")
// }
//***********************EXERCISE TWO *******************/
//Exercise 1
var double = function (value) {
    return value * 2;
};
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
var greet = function (name) {
    if (name === void 0) { name = "Tristen"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);


//*******************SECTION FIVE**********************/
//CLASSES
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 23; //available from any object thta inherits this class
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old Guy");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Tristen", "tjswift");
console.log(person.name, person.username);
person.printAge();
//person.setType("Cool guy") //wont work with private method
