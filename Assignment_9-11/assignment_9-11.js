
// Chapter#9-11

// Q:01
// var city = prompt('Enter your city name : ')
// if (city.toLowerCase() === 'karachi') city = 'city of lights';
// alert('Welcome to ' + city)

// Q:02
// var gender = prompt('Enter yopur gender : ')
// if (gender.toLowerCase() === 'male') alert('Good Morning Sir!')
// else if (gender.toLowerCase() === 'female') alert('Good Morning Ma\'am!')
// else alert('Invalid Input')

// Q:03
// var color = prompt('Enter road traffic signal : ')
// if (color.toLowerCase() === 'red') alert('Must Stop')
// else if (color.toLowerCase() === 'yellow') alert('Ready to Move')
// else if (color.toLowerCase() === 'green') alert('Move Now')
// else alert('Invalid Input')

// Q:04
// var fuel = prompt('Enter remaining fuel in your car : ')
// if (Number(fuel) < 0.25) alert('Please refill the fuel in your car')

// Q:05
// a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// e
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// f
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// Q:06
// var totalMarks = 300;
// var marks1 = +prompt('Enter subject 01 marks : ')
// var marks2 = +prompt('Enter subject 02 marks : ')
// var marks3 = +prompt('Enter subject 03 marks : ')
// var marksObtained = marks1 + marks2 + marks3;
// var percentage = (marksObtained / totalMarks) * 100;
// var grade, remarks;
// if (percentage >= 80){
//     grade = 'A-one';
//     remarks = 'Excellent';
// } 
// else if (percentage >= 70){
//     grade = 'A';
//     remarks = 'Good';
// } 
// else if (percentage >= 60){
//     grade = 'B';
//     remarks = 'You need to improve';
// }
// else if (percentage < 60){
//     grade = 'Fail';
//     remarks = 'Sorry';
// } 
// else {
//     alert("Invalid Input")
// }
// document.write(`<h1>Marks Sheet</h1><br><br>`)
// document.write(`Total Marks : ${totalMarks}<br>`)
// document.write(`Marks Obtained : ${marksObtained}<br>`)
// document.write(`Percentage : ${percentage}%<br>`)
// document.write(`Grade : ${grade}<br>`)
// document.write(`Remarks : ${remarks}<br>`)

// Q:07
// var secrentNum = 7;
// var guess = +prompt('Guess the secret number');
// if (guess === secrentNum) alert('Bingo! correct answer')
// else if (++guess === secrentNum) alert('close enough')
// else alert('wrong answer')

// Q:08
// var num = +prompt('Enter a number : ')
// if ((num % 3) === 0) alert(`${num} is divisible by 3`)
// else alert(`${num} is not divisible by 3`)

// Q:09
// var num = +prompt('Enter a number : ')
// if ((num % 2) === 0) alert(`${num} is an even number`)
// else alert(`${num} is an odd number`)

// Q:10
// var temp = +prompt('Enter temperature : ')
// if (temp >= 40) alert('It is too hot outside')
// else if (temp >= 30 && temp < 40) alert('The weather today is normal')
// else if (temp >= 20 && temp < 30) alert('Today\'s weather is cool')
// else if (temp >= 10 && temp < 20) alert('OMG! Today\'s weather is so cool')
// else alert('NIL')

// Q:11
// var num1 = Number(prompt('Enter first number : '))
// var num2 = Number(prompt('Enter second number : '))
// var operation = prompt('Enter operation (+,-,*,/,%) : ')
// if (operation === '+') alert(`${num1} ${operation} ${num2} = ` + (num1 + num2))
// else if (operation === '-') alert(`${num1} ${operation} ${num2} = ` + (num1 - num2))
// else if (operation === '*') alert(`${num1} ${operation} ${num2} = ` + (num1 * num2))
// else if (operation === '/') alert(`${num1} ${operation} ${num2} = ` + (num1 / num2))
// else if (operation === '%') alert(`${num1} ${operation} ${num2} = ` + (num1 % num2))
// else alert('Invalid Input')