document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginButton");
    loginButton.addEventListener("click", function() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        // Validate username and password (you can add your validation logic here)
        if (username === "JAZIB" && password === "123") {
            // Store user login state in session storage
            sessionStorage.setItem("loggedIn", true);
            window.location.href = "dashboard.html";
        } else {
            // Display an error message for invalid credentials
            alert("Invalid username or password. Please try again.");
        }
    });
});
