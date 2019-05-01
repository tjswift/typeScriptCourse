//string
let myName = "Tristen";
//myName = 28; This cannot equal 28 because myName was initiated as a string

let myAge = 23;
//myAge = "Tristen"; Nope. doesnt match type

let hasHobbies = true;
//hasHobbies = 1; Nope

//assign types
let myRealAge;
myRealAge = 27;
myRealAge = "27"; //this works, since we didn't initiate a type when declaring the variable
//myRealAge defaulted to type "Any"

//array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100]
//hobbies = 100; would not work because it is not an array type

//tuples
let address: [string, number] = ["Witham Hill", 159];

//enum
enum Color {
    Gray, //0
    Green = 100, //100
    Blue = 2 //2
}
let myColor: Color = Color.Blue;
console.log(myColor);

//any
let car: any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car);

//functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

//void
function sayHello(): void{
    console.log("Hello");
    //return myName //This gives error. "void" doesn't return anything    
}

//argument types
function multiply(value1: number, value2: number): number{
    return value1 * value2;
}
//console.log(multiply(2, "max")); throws error since "max is not a number"
console.log(multiply(10, 2));

//function types
let myMultiply: (val1: number, val2: number) => number ;
//myMultiply = sayHello; myMultiply expects a funcion that takes two numbers, and returns a number 
//myMultiply(); wouldn't work
myMultiply = multiply;
console.log(myMultiply(5, 2));

//objects
let userData: {name: string, age: number} = {
    name: "Tristen",
    age: 27
}
//userData = {
//    a: "Hello",
//    b: 22
//};

//complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],
    output: function(all: boolean): number[] {
        return this.data;
    }
}

//type alias
type Complex = {data: number[], output: (all: boolean) => number[]}; //this is now reusable as type "Complex" as seen below

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function(all: boolean): number[] {
        return this.data;
    }
};

//union types
let myRealRealAge: number | string = 24;
myRealRealAge = "24";
//myRealRealAge = true; does not work, as it is no a string or a number

//check types
let finalValue = 23;
if (typeof finalValue == "number" ){
    console.log("Final value is a number")
}

//*******************SECTION FIVE**********************/
//CLASSES

class Person {
    name: string;
    //private type: string; //available only within this object
    //protected age: number; //available from any object thta inherits this class

    constructor(name: string, public username: string) {
        this.name = name;
    }
}

const person = new Person("Tristen", "tjswift");
console.log(person);
