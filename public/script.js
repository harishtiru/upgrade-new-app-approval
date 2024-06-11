let students = [];

function addStudent() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const grade = document.getElementById("grade").value;

  const student = { name, age, grade };
  students.push(student);

  updateStudentList();
  saveToDatabase(student);
}

function updateStudentList() {
  const studentList = document.getElementById("studentList");
  studentList.innerHTML = "";
  students.forEach(student => {
    const li = document.createElement("li");
    li.textContent = `${student.name}, ${student.age}, ${student.grade}`;
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
