// Check if there are previously stored students in local storage
let students = [];
if (localStorage.getItem('students')) {
    students = JSON.parse(localStorage.getItem('students'));
}

document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginButton");
    loginButton.addEventListener("click", function() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        // Validate username and password (you can add your validation logic here)
        if (username === "JAZIB" && password === "123") {
            window.location.href = "index.html";
        } else {
            // Display an error message for invalid credentials
            alert("Invalid username or password. Please try again.");
        }
    });

    const addStudentBtn = document.getElementById('addStudentBtn');
    addStudentBtn.addEventListener('click', addStudent);

    const showRecordsBtn = document.getElementById('showRecordsBtn');
    showRecordsBtn.addEventListener('click', showRecords);

    const logoutButton = document.getElementById("logoutButton");
    logoutButton.addEventListener("click", logout);

    showStudents();
});

function addStudent() {
    const nameValue = document.getElementById('name').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const ageValue = document.getElementById('age').value.trim();
    const gradeValue = document.getElementById('grade').value.trim();
    const degreeValue = document.getElementById('degree').value.trim();

    if (!nameValue || !emailValue || !ageValue || !gradeValue || !degreeValue) {
        alert("All fields are required!");
        return;
    }

    const newID = students.length > 0 ? students[students.length - 1].ID + 1 : 1;

    const newStudent = {
        ID: newID,
        name: nameValue,
        email: emailValue,
        age: ageValue,
        grade: gradeValue,
        degree: degreeValue
    };

    students.push(newStudent);

    // Store students in local storage
    localStorage.setItem('students', JSON.stringify(students));

   alert("Record added successfully")

    // Clear the form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('age').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('degree').value = '';
}

function showStudents() {
    const studentList = document.getElementById('student-list');
    studentList.innerHTML = '';

    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `ID: ${student.ID}, Name: ${student.name}, Email: ${student.email}, Age: ${student.age}, GPA: ${student.grade}, Degree: ${student.degree}`;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => populateFormForEdit(student);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteStudent(student.ID);

        li.appendChild(editButton);
        li.appendChild(deleteButton);

        studentList.appendChild(li);
    });

    studentList.classList.remove('hidden');
}

function populateFormForEdit(student) {
    document.getElementById('name').value = student.name;
    document.getElementById('email').value = student.email;
    document.getElementById('age').value = student.age;
    document.getElementById('grade').value = student.grade;
    document.getElementById('degree').value = student.degree;

    const saveButton = document.getElementById('saveButton');
    saveButton.onclick = () => saveStudent(student.ID);
}

function saveStudent(studentId) {
    const nameValue = document.getElementById('name').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const ageValue = document.getElementById('age').value.trim();
    const gradeValue = document.getElementById('grade').value.trim();
    const degreeValue = document.getElementById('degree').value.trim();

    if (!nameValue || !emailValue || !ageValue || !gradeValue || !degreeValue) {
        alert("All fields are required!");
        return;
    }

    const updatedStudent = {
        ID: studentId,
        name: nameValue,
        email: emailValue,
        age: ageValue,
        grade: gradeValue,
        degree: degreeValue
    };

    const index = students.findIndex(s => s.ID === studentId);
    students[index] = updatedStudent;

    localStorage.setItem('students', JSON.stringify(students));

    showStudents();

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('age').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('degree').value = '';

    document.getElementById('saveButton').onclick = null;
}

function deleteStudent(id) {
    students = students.filter(student => student.ID !== id);

    localStorage.setItem('students', JSON.stringify(students));

    showStudents();
}

function showRecords() {
    window.location.href = "student_records.html";
}

function logout() {
    window.location.href = "dashboard.html";
}
