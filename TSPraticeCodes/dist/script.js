"use strict";
let a = "Yashu ji";
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
let aman = {
    naam: "Aman",
    umar: 19,
    pata: "Nagpur"
};
console.log(aman.umar);
let datas = (data) => {
    data.age;
    data.name; //🤚age and number dono aajayegna same name ke interface create kiye kiye hai fir bhi vo combine ho gai hai.
};
function allFood(info) {
    info.cake;
    info.paniPuri;
    info.samosha; // samosha , cake , panipuri sb ek aa gai hai foodthree ke andar , food one ke andar nhi
}
//--classes
class acSpeed {
    constructor() {
        this.company = "volt";
        this.ton = "1ton";
        this.speed = 5;
    }
    start() {
        console.log("AC start");
    }
    increaseSpeed() {
        this.speed++;
        console.log("speed I :", this.speed);
    }
    decreaseSpeed() {
        this.speed--;
        console.log("speed D :", this.speed);
    }
    stop() {
        console.log("AC stop");
    }
}
let ac = new acSpeed();
ac.increaseSpeed();
ac.decreaseSpeed();
