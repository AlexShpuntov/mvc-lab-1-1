const http = require("http");
const student = require("./student");

const id = 0;

const fullName = student.getStudentFullName(id);
const studentID = student.getStudentId(id);

const PORT = 3000;

function requestListener(request, response) {
  const fullName = student.getStudentFullName();
  const studentID = student.getStudentId();

  response.setHeader("Content-Type", "text/html");
  response.write("<html>");
  response.write("<head><title>About student</title></head>");
  response.write("<body>");
  response.write(`<p>My name is ${fullName}. My student ID is ${studentID}</p>`);
  response.write("</body>");
  response.write("</html>");
  response.end();
}

const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
