document.addEventListener("DOMContentLoaded", function() {
    showEmployees();

    document.getElementById("search").addEventListener("input", search);
    document.getElementById("logoutButton").addEventListener("click", logout);
});

function showEmployees() {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = '';

    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    employees.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = `Name: ${employee.name}, Email: ${employee.email}, Department: ${employee.department}, Salary: ${employee.salary}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteEmployee(employee);

        li.appendChild(deleteButton);

        employeeList.appendChild(li);
    });
}

function deleteEmployee(employee) {
    let employees = JSON.parse(localStorage.getItem('employees'));
    employees = employees.filter(emp => emp.name !== employee.name);

    localStorage.setItem('employees', JSON.stringify(employees));

    showEmployees();
}




function search() {
    const query = document.getElementById("search").value.toLowerCase();
    const employeeList = document.getElementById('employee-list');
    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    employeeList.innerHTML = '';

    employees
        .filter(employee => 
            employee.name.toLowerCase().includes(query) ||
            employee.email.toLowerCase().includes(query) ||
            employee.department.toLowerCase().includes(query)
        )
        .forEach(employee => {
            const li = document.createElement('li');
            li.textContent = `Name: ${employee.name}, Email: ${employee.email}, Department: ${employee.department}, Salary: ${employee.salary}`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteEmployee(employee);

            li.appendChild(deleteButton);

            employeeList.appendChild(li);
        });
}

function logout() {
    window.location.href = "employee.html";
}
