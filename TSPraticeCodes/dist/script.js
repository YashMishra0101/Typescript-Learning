"use strict";
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
