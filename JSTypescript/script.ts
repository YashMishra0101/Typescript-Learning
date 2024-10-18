console.log("Typescript Pratice Codes");
let a: number | string = "Yashu ji";

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

let tup: [string, number, boolean];

tup = ["one", 1, true];

//#Enum : For grouping (Enums in TypeScript are a way to group together values that are frequently used and "constants.")

// enum data {
//   success = "succes",
//   fail = "fail",
//   test = "test",
// }

// let info: data = data.success;
// console.log(info);

//#Union : Hold multiple types of values in single variable and You use the pipe (`|`) symbol to create a union type.

// let value: number | string;
// value = "12";

// function check(value: number | string) {
//   if (typeof value === "string") {
//     console.log("->", value.split(""));
//   } else {
//     console.log("^->", value.toString());
//   }
// }

// check(value);

//#Intersection: combine multiple type into single type and "&" is used for that.

// let value:number & string ; This is not possible

// type user = {
//   name: string;
//   role: string;
// };

// type info = {
// location: string;
// experience: string;
// };

// type userInfo = user & info;

// let combine: userInfo = {
//   name: "Yash",
//   role: "Full Stack",
//   location: "Bangalore",
//   experience:"1year"
// };

//#Type Alias
/*A Type alias allows you to define a common type once and reuse it in different places, instead of
rewriting the same type multiple times. It makes your code cleaner and easier to manage.

A type alias in TypeScript is a way to create a new name for an existing type, enhancing code
readability and maintainability. It can represent primitive types, union types, or complex object types.*/
//-- Exmaple 1

// type Age=number|boolean;

// let yashu:Age=22;

// //-- Exmaple 2

type main = {
  naam: string;
  umar: number;
  pata: string;
};

let aman: main = {
  naam: "Aman",
  umar: 19,
  pata: "Nagpur",
};

console.log(aman.umar);

//#Interfaces

/*
Interfaces in TypeScript define the structure of an object by specifying its properties and types. 
In React, they are used to define prop types for components, ensuring correct data is passed and 
helping to catch errors during development.

Interfaces bascially define the object and its property with the help of that we can structure the objects 
and its property acc to our need , we generally used interfaces in react for defining the props.
*/

//--We can create two same name of interfaces and eventually they combine each other;

interface Info {
  name: string;
}

interface Info {
  age: number;
}

let datas = (data: Info) => {
  data.age;
  data.name; //🤚age and number dono aajayegna same name ke interface create kiye hai fir bhi vo combine ho gai hai.
};

//--We can extend the Interfaces

interface foodOne {
  samosha: string;
}

interface foodTwo extends foodOne {
  cake: string;
}

interface foodThree extends foodTwo {
  paniPuri: number;
}

function allFood(info: foodThree) {
  info.cake;
  info.paniPuri;
  info.samosha; // samosha , cake , panipuri sb ek aa gai hai foodthree ke andar , food one ke andar nhi
}

//--classes

class speed {
  car = "Tata Safari";
  price = "25 lakh ";
  speed = 300;

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
  protected userName: string;
  protected userAge: number;

  constructor(userName: string, userAge: number) {
    this.userName = userName;
    this.userAge = userAge;
  }

  userInfo(): void {
    console.log(
      `Typescript : User name is ${this.userName} he is ${this.userAge} old`
    );
  }
}

class SubClass extends UserData {
  constructor(userName: string, userAge: number) {
    super(userName, userAge);
  }

  public NewUserInfo(): void {
    this.userInfo();
    console.log(
      `Typescript Subclass : User name is ${this.userName} he is ${this.userAge} old`
    );
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

function normalFun(): void {
  console.log("ky bol ti public");
}

let arrowFun = (): string => {
  return "Haaji kya Haal Chaal";
};

//--Optional Paramater " ? "

let userData = (name: string, age: number, location?: string): void => {
  // if we dont' put ? so it is necessary to give the value of location
  console.log(name, age, location);
};

userData("Yash", 22);

//--Default Paramater

let naamBata = (name: string = "Yashu"): void => {
  // if you not passed any name so it send default name
  console.log(name);
};

naamBata("Rahul");

//--Rest Operator  in Ts
function sum(...bhejo: number[]) {
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

let stringornum: "harsh" | 12; //--We already mention ki yaa to harsh hongi yaa fir 12
stringornum = 12;
stringornum = "harsh";
// stringornum = "harish"; // Not Possible

let isComplete: true;
isComplete = true; // Valid
// isComplete = false; // Error

let num: 3;
// num=4; //-- again not possible
