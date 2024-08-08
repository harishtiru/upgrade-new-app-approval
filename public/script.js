let students = [];

function addStudent() {
<<<<<<< HEAD
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const grade = document.getElementById("grade").value;

  const student = { name, age, grade };
=======
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;
  const grade = document.getElementById("grade").value;

  const student = { firstName, lastName, age, grade };
>>>>>>> repo-b/main
  students.push(student);

  updateStudentList();
  saveToDatabase(student);
}

function updateStudentList() {
  const studentList = document.getElementById("studentList");
  studentList.innerHTML = "";
  students.forEach(student => {
    const li = document.createElement("li");
<<<<<<< HEAD
    li.textContent = `${student.name}, ${student.age}, ${student.grade}`;
=======
    li.textContent = `${student.firstName} ${student.lastName}, ${student.age}, ${student.grade}`;
>>>>>>> repo-b/main
    studentList.appendChild(li);
  });
}

function saveToDatabase(student) {
  // Simulate saving to a database (in this case, a JSON file)
  const database = localStorage.getItem("studentDatabase");
  const databaseArray = database ? JSON.parse(database) : [];
  databaseArray.push(student);
  localStorage.setItem("studentDatabase", JSON.stringify(databaseArray));
}

window.onload = function() {
  // Load initial data from database when the page loads
  const database = localStorage.getItem("studentDatabase");
  if (database) {
    students = JSON.parse(database);
    updateStudentList();
  }
};
