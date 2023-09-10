
// Chapter#6-9

// Q:01
// var num = Number(prompt('Enter a number : '));
// document.write(`Result: <br>`)
// document.write(`The value of a is: ${num} <br>`)
// document.write(`<br>`)
// document.write(`The value of ++a is: ${++num} <br>`)
// document.write(`Now the value of a is: ${num} <br>`)
// document.write(`<br>`)
// document.write(`The value of a++ is: ${num++} <br>`)
// document.write(`Now the value of a is: ${num} <br>`)
// document.write(`<br>`)
// document.write(`The value of --a is: ${--num} <br>`)
// document.write(`Now the value of a is: ${num} <br>`)
// document.write(`<br>`)
// document.write(`The value of a-- is: ${num--} <br>`)
// document.write(`Now the value of a is: ${num} <br>`)

// Q:02
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write(`a is : ${a}<br>`)
// document.write(`b is : ${b}<br>`)
// document.write(`result is : ${result}`)

// Q:03
// var userName = prompt('Enter your name : ')
// alert(`Assalam-o-alaikum ${userName}`)

// Q:05
// var num = +prompt("Enter number to print its table : ")
// if (num === 0) num = 5;
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
// var totalMarksInEachSub = 100, totalMarks = 300;
// var sub1 = prompt('Enter subject 01 name : ');
// var marksObtained01 = +prompt('Enter marks obtained in subject 01 : ')
// var sub2 = prompt('Enter subject 02 name : ');
// var marksObtained02 = +prompt('Enter marks obtained in subject 02 : ')
// var sub3 = prompt('Enter subject 03 name : ');
// var marksObtained03 = +prompt('Enter marks obtained in subject 03 : ')
// var totalMarksObtained = marksObtained01 + marksObtained02 + marksObtained03;
// var percentage01 = (marksObtained01 / totalMarksInEachSub) * 100;
// var percentage02 = (marksObtained02 / totalMarksInEachSub) * 100;
// var percentage03 = (marksObtained03 / totalMarksInEachSub) * 100;
// var percentage = (totalMarksObtained / totalMarks) * 100;
// document.write(`<table>`)
// document.write(`<thead>`)
// document.write(`<tr>`)
// document.write(`<th>Subject</th>`)
// document.write(`<th>Total Marks</th>`)
// document.write(`<th>Obtained Marks</th>`)
// document.write(`<th>Percentage</th>`)
// document.write(`</tr>`)
// document.write(`</thead>`)
// document.write(`<tbody>`)
// document.write(`<tr>`)
// document.write(`<td>${sub1}</td>`)
// document.write(`<td>${totalMarksInEachSub}</td>`)
// document.write(`<td>${marksObtained01}</td>`)
// document.write(`<td>${percentage01}%</td>`)
// document.write(`</tr>`)
// document.write(`<tr>`)
// document.write(`<td>${sub2}</td>`)
// document.write(`<td>${totalMarksInEachSub}</td>`)
// document.write(`<td>${marksObtained02}</td>`)
// document.write(`<td>${percentage02}%</td>`)
// document.write(`</tr>`)
// document.write(`<tr>`)
// document.write(`<td>${sub3}</td>`)
// document.write(`<td>${totalMarksInEachSub}</td>`)
// document.write(`<td>${marksObtained03}</td>`)
// document.write(`<td>${percentage03}%</td>`)
// document.write(`</tr>`)
// document.write(`</tbody>`)
// document.write(`<tfoot>`)
// document.write(`<tr>`)
// document.write(`<td></td>`)
// document.write(`<td>${totalMarks}</td>`)
// document.write(`<td>${totalMarksObtained}</td>`)
// document.write(`<td>${percentage}%</td>`)
// document.write(`</tr>`)
// document.write(`</tfoot>`)
// document.write(`<table>`)