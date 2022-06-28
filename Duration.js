let dur;

dur = moment.duration(3000) // few seconds
dur = moment.duration(3, "seconds"); // few seconds
dur = moment.duration(1, "days"); // a day

console.log(dur.humanize());


let dur1;

dur1 = moment.duration(3000) 
dur1 = moment.duration(3, "seconds"); 
dur1 = moment.duration(1, "days");

console.log(moment.duration(5, "weeks").days()) //4


console.log(moment.duration(5, "weeks").get("days")) //4
console.log(moment.duration(5, "weeks").asDays()) //4
console.log(moment.duration(1, "days").add(1, "weeks").humanize()) // 8 days
console.log(moment.duration(1, "days").subtract(1, "weeks").humanize()) //6 days


const m1 = moment().add(2, "days");
const m2 = moment().add(1, "weeks");
console.log(moment.duration(m2.diff(m1).asDays())) //5.00000




let dur4;
dur4 = moment.duration(3000)
console.log(dur4.toISOString()); //PT3S