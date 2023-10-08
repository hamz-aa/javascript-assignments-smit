
// Chapter#21-25

// Q:01
// let firstName = prompt('Enter first name : ')
// let lastName = prompt('Enter last name : ')

// let fullName = firstName + ' ' + lastName;

// alert(`Welcome! ${fullName}`)

// Q:02
// let favouritePhoneModel = prompt('Enter your favourite mobile phone model : ')

// document.write(`My favourite phone is: ${favouritePhoneModel}<br>`)
// document.write(`Length of string: ${favouritePhoneModel.length}`)

// Q:03
// let word = 'Pakistani'

// document.write(`String: ${word}<br>`)
// document.write(`Index of 'n': ${word.indexOf('n')}`)

// Q:04
// let word = 'Hello World'

// document.write(`String: ${word}<br>`)
// document.write(`Last index of 'l': ${word.lastIndexOf('l')}`)

// Q:05
// let word = 'Pakistani'

// document.write(`String: ${word}<br>`)
// document.write(`Character at index 3: ${word.charAt(3)}`)

// Q:06
// let firstName = prompt('Enter first name : ')
// let lastName = prompt('Enter last name : ')

// let fullName = firstName.concat(' ', lastName);

// alert(`Welcome! ${fullName}`)

// Q:07
// let city = 'Hyderabad'

// document.write(`City: ${city}<br>`)
// document.write(`After replacement: ${city.replace('Hyder', 'Islam')}`)

// Q:08
// let message = 'Ali and Sami are best friends. They play cricket and football together.';

// document.write(`${message.replaceAll('and', '&')}`)

// Q:09
// let num = '472'

// document.write(`Value: ${num}<br>`)
// document.write(`Type: ${typeof num}<br>`)
// num = Number(num)
// document.write(`Value: ${num}<br>`)
// document.write(`Type: ${typeof num}`)

// Q:10
// userInput = prompt('Enter some input : ')

// document.write(`User input: ${userInput}<br>`)
// document.write(`Upper case: ${userInput.toUpperCase()}`)

// Q:11
// userInput = prompt('Enter some input : ')

// document.write(`User input: ${userInput}<br>`)
// document.write(`Title case: ${userInput.charAt(0).toUpperCase() + userInput.slice(1)}`)

// Q:12
// let num = 35.36

// document.write(`Number: ${num}<br>`)
// stringNum = String(num)
// document.write(`Result: ${stringNum.replace('.', '')}`)

// Q:13
// userName = prompt('Enter user name : ')
// let flag = false

// for(let i in userName){
//     for(let j of [33, 44, 46, 64]){
//         if(userName.charAt(i).charCodeAt(0) === j){
//             alert('Please enter a valid username')
//             flag = true
//             break
//         }
//     }
//     if(flag) break;
// }
