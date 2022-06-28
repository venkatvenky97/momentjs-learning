let m = moment();  //current date and time

m = moment("2022-06-27T23:10:00.000+05:00"); //create from ISO 8601 string

m = moment("27-06-2022 12:35PM", "DD/MM/YYYY h:mmA"); //using a formate

m = moment(800000);  //create using milliseconds since epoch ()

m = moment.unix(5600)  // create using seconds since epoch()

m = moment.utc();  //create a moment object in UTC mode