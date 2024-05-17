// Check if there are previously stored staff in local storage
let staff = [];
if (localStorage.getItem('staff')) {
    staff = JSON.parse(localStorage.getItem('staff'));
}

document.addEventListener("DOMContentLoaded", function() {
    const addStaffBtn = document.getElementById('add');
    addStaffBtn.addEventListener('click', addStaff);

    const logoutButton = document.querySelector(".logout-button");
    logoutButton.addEventListener("click", logout);

    showStaff();
});

function addStaff() {
    // Remove the event listener to prevent duplication
    const addStaffBtn = document.getElementById('add');
    addStaffBtn.removeEventListener('click', addStaff);

    const nameValue = document.getElementById('name').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const departmentValue = document.getElementById('department').value.trim();

    // Check if any field is empty
    if (!nameValue || !emailValue || !departmentValue) {
        alert("All fields are required!");
        // Add the event listener back after showing the alert
        addStaffBtn.addEventListener('click', addStaff);
        return;
    }

    const newStaff = {
        name: nameValue,
        email: emailValue,
        department: departmentValue
    };

    staff.push(newStaff);

    localStorage.setItem('staff', JSON.stringify(staff));

   alert("Record Added Successfully")

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('department').value = '';

    // Add the event listener back after adding the staff
    addStaffBtn.addEventListener('click', addStaff);
}



function deleteStaff(index) {
    staff.splice(index, 1);

    localStorage.setItem('staff', JSON.stringify(staff));

 
}

function logout() {
    window.location.href = "dashboard.html";
}
function showStaffRecord(){
    window.location.href = "staff_records.html";
}
