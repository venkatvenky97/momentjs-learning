const m = moment();

console.log(`Original moment: ${m.toString()}`);

m.subtract({
    "hours": 4,
    "minutes": 20
});

m.endOf("days");

m.utc();
m.local();

m.utcOffset();

console.log(`After Manipulate: ${m.toString()}`);