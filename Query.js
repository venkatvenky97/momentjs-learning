
//isSame
console.log(moment("2022-06-28 10:45:20").isSame("2022-06-28 09:45:20", "day"))


//isBefore
console.log(moment("2022-06-25").isBefore("2022-06-25", "week"))


//isAfter
console.log(moment("2022-06-22").isAfter(moment("2022-06-25")))



//isSameOrBefore
console.log(moment("2022-06-22").isSameOrBefore(moment("2022-06-22"))) //true


//isBetween
const m1 = moment("2022-06-03");
const m2 = moment("2022-06-04");
const m3 = moment("2022-06-05");
console.log(m1.isBetween(m2, m3));


//isDST
console.log(moment("2022-06-20 02:00:00").locale("en-au").isDST()); //check the time


//isMoment
const m4 = moment("2022-06-03");
const m5 = moment("2022-06-04");
const m6 = moment("2022-06-05");
console.log(moment.isMoment(m4));
console.log(moment.isMoment ({
    name:"venky"
}))


//isDate
const m7 = moment("2022-06-03");
const m8 = moment("2022-06-04");
const m9 = moment("2022-06-05");
console.log(moment.isDate(new Date()));
console.log(moment.isDate(m7))
console.log(moment.isDate({
    name: "venky"
}))
