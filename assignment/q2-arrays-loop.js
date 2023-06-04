/*
    Task
    - In the function, iterate through the array `studentList`.
    - Print each student's name inside the loop using console.log().
*/

const studentList = ["Johnson", "Christina", "Michael", "Lina", "Larry", "Michelle", "Bob", "Wilson"]

function printStudentNames(){
    // Add code here
    for(let sL of studentList){
        console.log(sL)
    }
}

printStudentNames();

// Ignore the code below this line
module.exports = {
    studentList,
    printStudentNames
}