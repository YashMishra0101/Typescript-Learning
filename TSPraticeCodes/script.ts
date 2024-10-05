let a: number | string = "Yashu ji";

//#This is the void when any funtion not returing any value

// let prints = (): void => {
//   console.log("not retruning any value");
// };
// prints();

//#This is the never which is used of when funcition throw error and when ifinity loop happen

// let see = (): never => {
//   while (true) {
//     console.log("Hello ji");
//   }
// };

// see();

console.log("Testing");

//#enum : for grouping

// enum data {
//   success = "succes",
//   fail = "fail",
//   test = "test",
// }

// let info: data = data.success;
// console.log(info);

//#union : hold multiple types of values and You use the pipe (`|`) symbol to create a union type.

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

//#Intersection:combine multiple type into single type 

// let hmm:number & string ; This is not possible

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

// console.log(combine)


//#Type Alias

//-- Exmaple 1

type Age=number|boolean;

let yashu:Age=22;

//-- Exmaple 2

type main={
    naam:string,
    umar:number,
    pata:string
}

let aman:main={
    naam:"Aman",
    umar:19,
    pata:"Nagpur"
}

console.log(aman.umar);

//#Interfaces

interface UserInfo{
    name:string,
    age:number,
    role:string
}

let user:UserInfo=()=>{
    user.name.
}