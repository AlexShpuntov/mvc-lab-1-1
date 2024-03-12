const student = require("./student");

const fullName = student.getStudentFullName();
const studentID = student.getStudentId();

const message = `My name is ${fullName}. My student ID is ${studentID}`;

console.log(message);
