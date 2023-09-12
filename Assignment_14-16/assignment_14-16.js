
// Chapter#14-16

// Q:01
// var studentNames = []

// Q:02
// var studentNames = new Array()

// Q:03
// var stringArray = ['car', 'toys', 'home']

// Q:04
// var numberArray = [1, 2, 3]

// Q:05
// var booleanArray = [true, false]

// Q:06
// var mixedArray = [1, 'car', true]

// Q:07
// var qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'MPHIL', 'PHD']
// document.write(`<h1>Qualifications:</h1><br>`)
// document.write(`1)${qualifications[0]}<br>`)
// document.write(`2)${qualifications[1]}<br>`)
// document.write(`3)${qualifications[2]}<br>`)
// document.write(`4)${qualifications[3]}<br>`)
// document.write(`5)${qualifications[4]}<br>`)
// document.write(`6)${qualifications[5]}<br>`)
// document.write(`7)${qualifications[6]}<br>`)
// document.write(`8)${qualifications[7]}<br>`)

// Q:08
// var names = ['Michael', 'John', 'Tony']
// var score = [320, 230, 480]
// var totalMarks = 500;
// document.write(`Score of ${names[0]} is ${score[0]}. Percentage: ` + (score[0] / totalMarks) * 100 + '%<br>')
// document.write(`Score of ${names[2]} is ${score[1]}. Percentage: ` + (score[1] / totalMarks) * 100 + '%<br>')
// document.write(`Score of ${names[1]} is ${score[2]}. Percentage: ` + (score[2] / totalMarks) * 100 + '%')

// Q:09
// var colors = ['red', 'green', 'blue']
// alert(`Colors stored in array : ${colors}`)
// var addColor = prompt('What color you want to add at the beginning of the array : ')
// colors.unshift(addColor);
// alert(`Colors stored in array : ${colors}`)
// addColor = prompt('What color you want to add at the end of the array : ')
// colors.push(addColor);
// alert(`Colors stored in array : ${colors}`)
// colors.unshift('purple', 'indigo')
// alert(`Added two more colors to the beginning of the array : ${colors}`)
// colors.shift()
// alert(`Deleted a color from the beginning of the array : ${colors}`)
// colors.pop()
// alert(`Deleted a color from the end of the array : ${colors}`)
// var ind = +prompt('Enter index to add color in array : ')
// addColor = prompt('Enter name of the color : ')
// colors.splice(ind, 0, addColor)
// alert(`After adding new color at desired position : \n ${colors}`)
// var startInd = +prompt('Enter position to delete colors from array : ')
// var endInd = +prompt('How many colors you want to delete from array : ')
// colors.splice(startInd, endInd)
// alert(`After removing colors from desired position : \n ${colors}`)

// Q:10
// var studentScores = [320, 230, 480, 120]
// document.write(`Scores of students: ${studentScores}<br>`)
// studentScores.sort();
// document.write(`Ordered scores of students: ${studentScores}`)

// Q:11
// var cityNames = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar']
// var selectedCities = cityNames.slice(2, 5)
// document.write('Cities List<br>')
// document.write(`${cityNames}<br><br>`)
// document.write('Selected Cities List<br>')
// document.write(`${selectedCities}<br>`)

// Q:15
// var phoneManufacturers = ['apple', 'samsung', 'motorola', 'nokia', 'sony', 'haier']
// document.write('<label for=\'phones\'>Choose a Phone: </label>')
// document.write('<select name="phones" id="phones">')
// document.write('<option value="apple">Apple</option>')
// document.write('<option value="samsung">Samsung</option>')
// document.write('<option value="motorola">Motorola</option>')
// document.write('<option value="nokia">Nokia</option>')
// document.write('<option value="sony">Sony</option>')
// document.write('<option value="haier">Haier</option>')
// document.write('</select>')