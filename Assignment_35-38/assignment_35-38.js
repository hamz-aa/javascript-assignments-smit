
// Chapter#35-38

// Q:01
// function displayDateTime(){
//     date = new Date();
//     document.write(`${date}<br>`);
// }

// displayDateTime();

// Q:02
// function greetUser(firstName, lastName){
//     alert(`Greetings ${firstName + ' ' + lastName}!`);
// }

// greetUser(prompt('Enter First Name : '), prompt('Enter Last Name : '));

// Q:03
// function sum(num1, num2){
//     return num1 + num2;
// }

// let num1 = parseInt(prompt('Enter first number : '));
// let num2 = parseInt(prompt('Enter second number : '));

// document.write(`The sum of ${num1} and ${num2} is ${sum(num1, num2)}<br>`);

// Q:04
// function calculator(num1, num2, operator){
//     switch(operator){
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             return num1 / num2;
//         case '%':
//             return num1 % num2;
//         default:
//             return 'Invalid Input!';
//     }
// }

// let num1 = parseInt(prompt('Enter first number : '));
// let num2 = parseInt(prompt('Enter second number : '));
// let operator = prompt('Enter Operation to perform : ');

// document.write(`The result of ${num1} ${operator} ${num2} is ${calculator(num1, num2, operator)}<br>`);

// Q:05
// function square(num){
//     return num ** 2;
// }

// let num = parseInt(prompt('Enter a number : '));
// document.write(`The square of ${num} is ${square(num)}<br>`);

// Q:06
// function factorial(num){
//     if(num < 0) return undefined;
//     let fact = 1;
//     while(num > 0){
//         fact *= num;
//         num--;
//     }
//     return fact;
// }

// let num = parseInt(prompt('Enter a number : '));
// document.write(`The factorial of ${num} is ${factorial(num)}<br>`);

// Q:07
// function displayCount(start, end){
//     document.write(`Displaying Count : <br>`)
//     for(let i = start; i <= end; i++){
//         document.write(`${i} `);
//     }
// }

// let start = parseInt(prompt('Enter start number : '));
// let end = parseInt(prompt('Enter end number : '));

// displayCount(start, end)