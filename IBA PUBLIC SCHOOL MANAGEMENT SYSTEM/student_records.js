document.addEventListener("DOMContentLoaded", function() {
    showStudents();

    document.getElementById("search").addEventListener("input", search);
    document.getElementById("logoutButton").addEventListener("click", logout);
});

function showStudents() {
    const studentList = document.getElementById('student-list');
    studentList.innerHTML = '';

    const students = JSON.parse(localStorage.getItem('students')) || [];

    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `ID: ${student.ID}, Name: ${student.name}, Email: ${student.email}, Age: ${student.age}, GPA: ${student.grade}, Degree: ${student.degree}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteStudent(student.ID);

        li.appendChild(deleteButton);

        studentList.appendChild(li);
    });
}

function deleteStudent(id) {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students = students.filter(student => student.ID !== id);

    localStorage.setItem('students', JSON.stringify(students));

    showStudents();
}

function search() {
    const query = document.getElementById("search").value.toLowerCase();
    const studentList = document.getElementById('student-list');
    const students = JSON.parse(localStorage.getItem('students')) || [];

    studentList.innerHTML = '';

    students
        .filter(student => 
            student.name.toLowerCase().includes(query) ||
            student.email.toLowerCase().includes(query) ||
            student.degree.toLowerCase().includes(query)
        )
        .forEach(student => {
            const li = document.createElement('li');
            li.textContent = `ID: ${student.ID}, Name: ${student.name}, Email: ${student.email}, Age: ${student.age}, GPA: ${student.grade}, Degree: ${student.degree}`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteStudent(student.ID);

            li.appendChild(deleteButton);

            studentList.appendChild(li);
        });
}

function logout() {
    window.location.href = "student.html";
}
