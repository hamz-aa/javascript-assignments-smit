
// Chapter#05

// Q:01
// var num1 = 3, num2 = 5;
// var result = num1 + num2;
// document.write(`Sum of ${num1} and ${num2} is ${result}`)

// Q:02
// var num1 = 3, num2 = 5;
// var result1 = num1 - num2;
// var result2 = num1 * num2;
// var result3 = num1 / num2;
// var result4 = num1 % num2;
// document.write(`Difference of ${num1} and ${num2} is ${result1}`)
// document.write(`Product of ${num1} and ${num2} is ${result2}`)
// document.write(`Quotient of ${num1} and ${num2} is ${result3}`)
// document.write(`Modulus of ${num1} and ${num2} is ${result4}`)

// Q:03
// var num;
// document.write(`Value after variable decleration is ${num}`);
// document.write('<br>')
// num = 5;
// document.write(`Initial value: ${num}`);
// document.write('<br>')
// num++;
// document.write(`Value after increment: ${num}`);
// document.write('<br>')
// num += 7;
// document.write(`Value after addition: ${num}`);
// document.write('<br>')
// num--;
// document.write(`Value after decrement: ${num}`);
// document.write('<br>')
// remainder = num % 3;
// document.write(`The remainder is: ${remainder}`);

// Q:04
// var ticketPrice = 600;
// var costOfFiveTickets = ticketPrice * 5;
// document.write(`Total Cost to buy 5 tickets is ${costOfFiveTickets}PKR`)

// Q:05
// var num = +prompt("Enter number to print its table : ")
// document.write(`Table of ${num}`)
// document.write('<br>')
// document.write(`${num} x 1  = ` + num*1 + '<br>')
// document.write(`${num} x 2  = ` + num*2 + '<br>')
// document.write(`${num} x 3  = ` + num*3 + '<br>')
// document.write(`${num} x 4  = ` + num*4 + '<br>')
// document.write(`${num} x 5  = ` + num*5 + '<br>')
// document.write(`${num} x 6  = ` + num*6 + '<br>')
// document.write(`${num} x 7  = ` + num*7 + '<br>')
// document.write(`${num} x 8  = ` + num*8 +  '<br>')
// document.write(`${num} x 9  = ` + num*9 +  '<br>')
// document.write(`${num} x 10 = ` + num*10 + '<br>')

// Q:06
// var celsiusTemp = 25;
// var fahrenheitTemp = (celsiusTemp * (9 / 5)) + 32;
// document.write(`${celsiusTemp}C is ${fahrenheitTemp}F`);
// document.write('<br>')
// fahrenheitTemp = 70;
// celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);
// document.write(`${fahrenheitTemp}F is ${celsiusTemp}C`);

// Q:07
// var price1 = 650, price2 = 100;
// var quantity1 = 3, quantity2 = 7;
// var totalCost = (price1 * quantity1) + (price2 * quantity2) + 100;
// document.write('<h1>Shopping Cart</h1><br><br>')
// document.write(`Price of item 1 is ${price1}<br>`)
// document.write(`Quantity of item 1 is ${quantity1}<br>`)
// document.write(`Price of item 2 is ${price2}<br>`)
// document.write(`Quantity of item 2 is ${quantity2}<br>`)
// document.write(`Shipping Charges 100<br>`)
// document.write(`Total cost of your order is ${totalCost}<br>`)

// Q:08
// var totalMarks = 980, marksObtained = 804;
// var percentage = (marksObtained / totalMarks) * 100;
// document.write(`<h1>Marks Sheet</h1><br><br>`)
// document.write(`Total Marks : ${totalMarks}<br>`)
// document.write(`Marks Obtained : ${marksObtained}<br>`)
// document.write(`Percentage : ${percentage}`)

// Q:09
// var dollar = 10, riyal = 25;
// rupee = (dollar * 104.8) + (25 * 28);
// document.write(`<h1>Currency in PKR</h1><br><br>`)
// document.write(`Total currency in PKR: ${rupee}`)

// Q:10
// var num = 7;
// var result = (((num + 5) * 10) / 2);

// Q:11
// var currentYear = 2022;
// var birthYear = +prompt('Enter your birth year : ');
// var age = currentYear - birthYear
// document.write(`<h1>Age Calculator</h1><br><br>`)
// document.write(`Current year : ${currentYear}<br>`)
// document.write(`Birth year : ${birthYear}<br>`)
// document.write(`Your age is : ${age}<br>`)

// Q:12
// var radius = 20;
// var circumference = 2 * Math.PI * radius;
// var area = Math.PI * Math.pow(radius, 2);
// document.write(`<h1>The Geometrizer</h1><br><br>`)
// document.write(`Radius of circle : ${radius}<br>`)
// document.write(`The circumference is : ${circumference}<br>`)
// document.write(`The area is : ${area}<br>`)

// // Q:13
// var favouriteSnack = 'chocolate chip', currentAge = 15;
// var maxAge = 65, estimatedAmout = 3;
// var lifeTimeSupply = estimatedAmout * 365 * (maxAge - currentAge);
// document.write(`<h1>The Lifetime Supply Calculator</h1><br><br>`)
// document.write(`Favourite Snack: ${favouriteSnack}<br>`)
// document.write(`Current Age: ${currentAge}<br>`)
// document.write(`Estimated Maximum Age: ${maxAge}<br>`)
// document.write(`Amount of Snacks per day: ${estimatedAmout}<br>`)
// document.write(`You will need ${lifeTimeSupply} ${favouriteSnack} to last you until the ripe old age of ${maxAge} <br>`)