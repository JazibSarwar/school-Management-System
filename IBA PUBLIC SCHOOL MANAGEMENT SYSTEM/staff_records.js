document.addEventListener("DOMContentLoaded", function() {
    const logoutButton = document.getElementById("logoutButton");
    logoutButton.addEventListener("click", logout);

    showStaff();
});

function showStaff() {
    const staffList = document.getElementById('staff-list');
    staffList.innerHTML = '';

    // Retrieve staff data from local storage
    let staff = [];
    if (localStorage.getItem('staff')) {
        staff = JSON.parse(localStorage.getItem('staff'));
    }

    staff.forEach(staffMember => {
        const li = document.createElement('li');
        li.textContent = `Name: ${staffMember.name}, Email: ${staffMember.email}, Department: ${staffMember.department}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteStaff(staffMember);

        li.appendChild(deleteButton);

        staffList.appendChild(li);
    });

    staffList.classList.remove('hidden');
}

function deleteStaff(member) {
    let staff = JSON.parse(localStorage.getItem('staff'));

    staff = staff.filter(staffMember => staffMember.name !== member.name);

    localStorage.setItem('staff', JSON.stringify(staff));

    showStaff();
}



function logout() {
    window.location.href = "staff.html";
}

