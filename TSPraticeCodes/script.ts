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
    car ="Tata Safari";
    price="25 lakh ";
    speed=300;

    increase (){
        this.speed++;
        console.log(`This increase speed of car is ${this.speed}`);
    }
    decrease (){
        this.speed--;
        console.log(`This decrease speed of car is ${this.speed}`);
    }
}

let start=new speed();
start.decrease();