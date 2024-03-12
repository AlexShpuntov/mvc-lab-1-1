const http = require("http");
const student = require("./student");

const fullName = student.getStudentFullName();
const studentID = student.getStudentId();

const PORT = 3000;

function requestListener(request, response) {
  response.setHead("Content-Type", "text/html");
  response.end();
}

function infoDisplay() {
  console.log(`Server is running on ${PORT}`);
  console.log(`My name is ${fullName}. My student ID is ${studentID}`);
}

const server = http.createServer(requestListener);

server.listen(PORT, infoDisplay);
