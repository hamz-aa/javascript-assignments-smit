
// Chapter#31-35

let date = new Date();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Q:01
// document.write(`${date}<br>`);

// Q:02
// document.write(`Current Month : ${months[date.getMonth()]}<br>`);

// Q:03
// document.write(`Today is ${days[date.getDay()].slice(0,3)}<br>`);

// Q:04
// if(days[date.getDay()] === 'Sunday' || days[date.getDay()] === 'Saturday') {
//     document.write(`It's Fun Day<br>`);
// }
// else document.write(`It's not Fun Day<br>`);

// Q:05
// let dayOfMonthInNum = date.getDate();

// if(dayOfMonthInNum < 16) document.write(`First Fifteen Days of Month<br>`);
// else document.write(`Last Days of Month<br>`);

// Q:06
// let millisecondsSince1970 = date.getTime();
// let minutesSince1970 = (millisecondsSince1970 - date.getMinutes()) / (1000 * 60 * 60);

// document.write(`Current Date : ${date}<br>`);
// document.write(`Elapsed Milliseconds since January 1, 1970 : ${millisecondsSince1970}<br>`);
// document.write(`Elapsed Minutes since January 1, 1970 : ${minutesSince1970}<br>`);

// Q:07
// let hours = date.getHours();

// if(hours < 12) document.write(`Its AM<br>`);
// else document.write(`Its PM<br>`);

// Q:08
// const laterDate = new Date(2020, 11, 31);

// document.write(`${laterDate}<br>`);

// Q:09
// const ramadan = new Date(2023, 2, 23);

// let diffInTime = date.getTime() - ramadan.getTime();
// let diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

// document.write(`${diffInDays} days have passed since 1st Ramadan, 2023<br>`);

// Q:10
// const givenDate = new Date(2015, 0, 1);
// let diffInTime = date.getTime() - givenDate.getTime();
// let diffInDays = Math.floor(diffInTime / (1000 * 3600 *24));
// let diffInMinutes = diffInDays * 24 * 60;


// document.write(`${diffInMinutes} minutes have been passed since beginning of 2015<br>`);

// Q:11
