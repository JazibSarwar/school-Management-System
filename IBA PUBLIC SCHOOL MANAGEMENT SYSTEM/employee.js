// Check if there are previously stored employees in local storage
let employees = [];
if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'));
}

document.addEventListener("DOMContentLoaded", function() {
    const addEmployeeBtn = document.getElementById('add');
    addEmployeeBtn.addEventListener('click', addEmployee);

    const logoutButton = document.querySelector(".logout-button");
    logoutButton.addEventListener("click", logout);

    showEmployees();
});

function addEmployee() {
    // Remove the event listener to prevent duplication
    const addEmployeeBtn = document.getElementById('add');
    addEmployeeBtn.removeEventListener('click', addEmployee);

    const nameValue = document.getElementById('name').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const departmentValue = document.getElementById('department').value.trim();
    const salaryValue = document.getElementById('salary').value.trim();

    // Check if any field is empty
    if (!nameValue || !emailValue || !departmentValue || !salaryValue) {
        alert("All fields are required!");
        // Add the event listener back after showing the alert
        addEmployeeBtn.addEventListener('click', addEmployee);
        return;
    }

    const newEmployee = {
        name: nameValue,
        email: emailValue,
        department: departmentValue,
        salary: salaryValue
    };

    employees.push(newEmployee);

    localStorage.setItem('employees', JSON.stringify(employees));

    alert("Record added successfully")

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('department').value = '';
    document.getElementById('salary').value = '';

    // Add the event listener back after adding the employee
    addEmployeeBtn.addEventListener('click', addEmployee);
}



function deleteEmployee(employee) {
    employees = employees.filter(emp => emp !== employee);

    localStorage.setItem('employees', JSON.stringify(employees));

    showEmployees();
}
function ShowEmRecord(){
    window.location.href = "employee_records.html";
}

function logout() {
    window.location.href = "dashboard.html";
}
