
// Chapter#12-13

// Q:01
// var char = prompt('Enter a character : ')
// var ascii = char.charCodeAt();
// if (ascii >= 48 && ascii <= 57) alert('The given character is a number')
// else if (ascii >= 97 && ascii <= 122) alert('The given character is a lowercase letter')
// else if (ascii >= 65 && ascii <= 90) alert('The given character is an uppercase letter')
// else alert('Invalid Input')

// Q:02
// var int1 = Number(prompt('Enter first integer : '))
// var int2 = Number(prompt('Enter second integer : '))
// if (int1 > int2) alert(`${int1} is the larger integer`)
// else if (int2 > int1) alert(`${int2} is the larger integer`)
// else alert('Both integers are equal')

// Q:03
// var num = number(prompt('Enter a number : '))
// if (num > 0) alert(`${num} is a positive number`)
// else if (num < 0) alert(`${num} is a negative number`)
// else alert('The number is zero')

// Q:04
// var char = prompt('Enter a character : ')
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// if (vowels.includes(char)) alert(`True \n ${char} is a vowel`)
// else alert(`False \n ${char} is a consonent`)

// Q:05
// var password = 'abc123'
// var checkPassword = prompt('Please enter your password : ')
// if (checkPassword === password) alert('Correct! The password you entered matches the original password')
// else alert('Incorrect Password')

// Q:06
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else {
// greeting = "Good evening";
// }

// Q:07
// var time = +prompt('Enter time in 24 hours format : ')
// if (time >= 0 && time < 1200) alert('Good Morning')
// else if (time >= 1200 && time < 1700) alert('Good Afternoon')
// else if (time >= 1700 && time < 2100) alert('Good Evening')
// else if (time >= 2100 && time < 2359) alert('Good Night')
// else alert('Invalid Input')