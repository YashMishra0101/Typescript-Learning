"use strict";
console.log("Typescript Pratice Codes");
let a = "Yashu ji";
//#Void: This is the void type when any function is not returning any value.The function does not return anything and completes normally. You can call it, and it will execute its actions.
// let prints = (): void => {
//     console.log("not returning any value");
//   };
//   prints();
//#Never : This is the never type, which is used when a function throws an error or when an infinite loop happens.The function does not complete normally and will either throw an error or run indefinitely. It does not return a value in any circumstance.
//   let see = (): never => {
//     while (true) {
//       console.log("Hello ji");
//     }
//   };
// see();
//#Tuple : In TypeScript, a Tuple is a special type of array where the number of elements and their types are fixed.
let tup;
tup = ["one", 1, true];
let aman = {
    naam: "Aman",
    umar: 19,
    pata: "Nagpur",
};
console.log(aman.umar);
let datas = (data) => {
    data.age;
    data.name; //🤚age and number dono aajayegna same name ke interface create kiye hai fir bhi vo combine ho gai hai.
};
function allFood(info) {
    info.cake;
    info.paniPuri;
    info.samosha; // samosha , cake , panipuri sb ek aa gai hai foodthree ke andar , food one ke andar nhi
}
//--classes
class speed {
    constructor() {
        this.car = "Tata Safari";
        this.price = "25 lakh ";
        this.speed = 300;
    }
    increase() {
        this.speed++;
        console.log(`This increase speed of car is ${this.speed}`);
    }
    decrease() {
        this.speed--;
        console.log(`This decrease speed of car is ${this.speed}`);
    }
}
let start = new speed();
start.decrease();
//--Constructor
/*
Access Modifier :

1. Public : Members marked as public can be accessed from anywhere, both inside and outside the class.
Default Modifier: In TypeScript, if you do not specify an access modifier, the member is public by default.

2. Private : Members marked as private can only be accessed from within the class they are defined in.
They are not accessible from outside the class, including derived classes (subclasses).

3. Protected : Members marked as protected can only be accessed within the class they are defined in and in
subclasses (derived classes). They cannot be accessed from outside the class.

*/
//>Functional Based (In Js)
// function UserData (userName, userAge, userLocation) {
//   this.userName = userName;
//   this.userAge = userAge;
//   this.userLocation = userLocation;
//   this.userInfo = function () {
//     console.log(
//       `Functional Based : User name is ${this.userName} he is ${this.userAge} and he belong from ${this.userLocation}`
//     );
//   };
// };
// let data=new UserData("Yash",22,"India");
// data.userInfo();
//>Class Based (In Js)
// class UserData {
//   constructor(userName, userAge, userLocation) {
//     this.userName = userName;
//     this.userAge = userAge;
//     this.userLocation = userLocation;
//   }
//   userInfo() {
//     console.log(
//       `Classed Based : User name is ${this.userName} he is ${this.userAge} and he belong from ${this.userLocation}`
//     );
//   }
// }
// let data = new UserData("Yash", 22, "India");
// data.userInfo();
//>Typescript
//--Public
// class UserData {
//   userName: string;
//   userAge: number;
//   constructor(userName: string, userAge: number) {
//     this.userName = userName;
//     this.userAge = userAge;
//   }
//   userInfo():void{
//     console.log(
//       `Typescript : User name is ${this.userName} he is ${this.userAge} old`
//     );
//   }
// }
// let data = new UserData("Yash", 22);
// data.userInfo();
//--Private
// class UserData {
//   private userName: string;
//   private userAge: number;
//   constructor(userName: string, userAge: number) {
//     this.userName = userName;
//     this.userAge = userAge;
//   }
//    userInfo():void{
//     console.log(
//       `Typescript : User name is ${this.userName} he is ${this.userAge} old`
//     );
//   }
// }
// let data = new UserData("Ram", 222);
// // data.userName="Test" not possible because it is a private
// data.userInfo();
//--Protected
class UserData {
    constructor(userName, userAge) {
        this.userName = userName;
        this.userAge = userAge;
    }
    userInfo() {
        console.log(`Typescript : User name is ${this.userName} he is ${this.userAge} old`);
    }
}
class SubClass extends UserData {
    constructor(userName, userAge) {
        super(userName, userAge);
    }
    NewUserInfo() {
        this.userInfo();
        console.log(`Typescript Subclass : User name is ${this.userName} he is ${this.userAge} old`);
    }
}
let data = new SubClass("Test", 22);
data.NewUserInfo();
//# Getter and Setter
// class Demo{
//   naam:string;
//   constructor(naam:string){
//     this.naam=naam;  
//   }
//   get userNaam(){  // they are not a function  they are object ,they don't need parentheses when called
//     return this.naam;
//   }
//   set NewUserNaam(newNaam:string){  // they are not a function object,they don't need parentheses when called
//     this.naam=newNaam;
//   }
// }
// let see=new Demo("Rahul");
// see.NewUserNaam="Rahul ji";
// console.log(see.userNaam);
//#Function
//-- How To Define the types in function
function normalFun() {
    console.log("ky bol ti public");
}
let arrowFun = () => {
    return "Haaji kya Haal Chaal";
};
//--Optional Paramater " ? "
let userData = (name, age, location) => {
    console.log(name, age, location);
};
userData("Yash", 22);
//--Default Paramater
let naamBata = (name = "Yashu") => {
    console.log(name);
};
naamBata("Rahul");
//--Rest Operator  in Ts
function sum(...bhejo) {
    return bhejo.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
/*
##Type assertions :

Sometimes, TypeScript cannot automatically infer the correct type, or you know more about the type of a value than the
compiler does. In such cases, you can use type assertions to inform TypeScript about the exact type of a value.

1. Angle-bracket:

   ```typescript
   let value: any = "Hello!";
   let length = (<string>value).length;
   ```

2. `as` keyword**:

   ```typescript
   let value: any = "Hello!";
   let length = (value as string).length;
   ```

### Usage:

- When TypeScript cannot infer the type.
- To handle `any` type or DOM elements.

*/
//#Literal Types. ( syntax " :  " bs type ke place per value add kr do as you want)
// Literal types allow you to specify exact values that a variable or parameter can hold, instead of just general types like 
// string, number, or boolean.
// String Literal Types
// Numeric Literal Types
// Boolean Literal Types
let stringornum; //--We already mention ki yaa to harsh hongi yaa fir 12
stringornum = 12;
stringornum = "harsh";
// stringornum = "harish"; // Not Possible
let isComplete;
isComplete = true; // Valid
// isComplete = false; // Error
let num;
// num=4; //-- again not possible
