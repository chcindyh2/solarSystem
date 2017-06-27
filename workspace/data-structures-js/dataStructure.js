//Data structures 

//App that puts students in line for donuts
// var firstStudent = 'Crazy Cinthya'
// var secondStudent = 'Hana'
// var thirdStudent - 'Goldie'

// Arrays
var lineOfStudents = [ ]
var kwkStudents = ["Maya", "Emma", "Allison", "Charity", "Keiana", "Zoe", "Sofia", "Hana", "Selin", "Jady", "Goldie", "Isabella", "Ela", "Grace", "Katrina", "Alexis", "Catherine", "Tallie", "Victoria", "Cinthya"]

function addStudent (arr) {
    var studentName = prompt("What's the name of the Student?");
    console.log(studentName);
    console.log(arr);
    return arr.push (studentName);
    
}

// function studentBack (studentName) {
//     return kwkStudents.push(studentName);
// }

function removeStudent(arr) {
    console.log(name + " recieved a donut!");
    var name = arr.shift() 
    
    
}

// function recieved(studentName) {
//     var name = kwkStudents.splice(0,1)
//     return  name + "recieved a donut!"
// }
// .splice () updates array
// .shift () removes the first element from an array

function cut (arr) {
    var studentName = prompt("Who's Cuting in Line?")
    console.log(arr)
    return arr.unshift(studentName)
}

function noDonuts (arr) {
    console.log(arr)
    return arr.pop()
}
// Arrays are used to store lists of data that 
// come in a certain order


// GOALS
// Write functions that do the following 
//first write a function that adds a student to the back of the line
// write a function that takes a student off the front of the line, and returns a string that says "(studentName) recieved a donut!"

//write a function that lets someone cut in line to the front 

// Write a function that takes someone off the back
// of the line if they don't want donuts anymore.