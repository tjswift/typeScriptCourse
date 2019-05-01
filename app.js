"use strict";
//string
var myName = "Tristen";
//myName = 28; This cannot equal 28 because myName was initiated as a string
var myAge = 23;
//myAge = "Tristen"; Nope. doesnt match type
var hasHobbies = true;
//hasHobbies = 1; Nope
//assign types
var myRealAge;
myRealAge = 27;
myRealAge = "27"; //this works, since we didn't initiate a type when declaring the variable
//myRealAge defaulted to type "Any"
//array
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
//hobbies = 100; would not work because it is not an array type
//tuples
var address = ["Witham Hill", 159];
//enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
//any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
//functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
function sayHello() {
    console.log("Hello");
    //return myName //This gives error. "void" doesn't return anything    
}
//argument types
function multiply(value1, value2) {
    return value1 * value2;
}
//console.log(multiply(2, "max")); throws error since "max is not a number"
console.log(multiply(10, 2));
//function types
var myMultiply;
//myMultiply = sayHello; myMultiply expects a funcion that takes two numbers, and returns a number 
//myMultiply(); wouldn't work
myMultiply = multiply;
console.log(myMultiply(5, 2));
//objects
var userData = {
    name: "Tristen",
    age: 27
};
//userData = {
//    a: "Hello",
//    b: 22
//};
//complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
//union types
var myRealRealAge = 24;
myRealRealAge = "24";
//myRealRealAge = true; does not work, as it is no a string or a number
//check types
var finalValue = 23;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
//*******************SECTION FIVE**********************/
//CLASSES
var Person = /** @class */ (function () {
    //private type: string; //available only within this object
    //protected age: number; //available from any object thta inherits this class
    function Person(name, username) {
        this.username = username;
        this.name = name;
    }
    return Person;
}());
var person = new Person("Tristen", "tjswift");
console.log(person);
//# sourceMappingURL=app.js.map