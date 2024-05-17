// Login function
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Implement your login logic here
}

document.getElementById('loginBtn').addEventListener('click', () => {
    // Clear session storage on logout
    sessionStorage.removeItem("loggedIn");
    window.location.href = 'login.html';
});
