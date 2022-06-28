const m = moment();

console.log(m.toString());

// getting unites
console.log(m.minutes());
console.log(m.hour());
console.log(m.week());
console.log(m.get("quarter"));
console.log(m.quarter());


// setting units

m.minutes(66);
m.hour(20);
m.week(8);
m.set("day", 5);