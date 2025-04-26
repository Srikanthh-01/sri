document.addEventListener("DOMContentLoaded", function () {
    // ✅ Handle Login
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Stop form from submitting

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }

        // ✅ Get stored credentials
        let storedUser = localStorage.getItem("username");
        let storedPass = localStorage.getItem("password");

        if (storedUser && storedPass) {
            if (username === storedUser && password === storedPass) {
                localStorage.setItem("loggedIn", "true"); // ✅ Store login status

                // ✅ Redirect properly
                window.location.assign("space.html");
            } else {
                alert("No user found. Please sign up first.");
            }
        } 
    });

    // ✅ Handle Signup
    document.getElementById("signupBtn").addEventListener("click", function () {
        let newUser = prompt("Enter a new username:");
        let newPass = prompt("Enter a new password:");

        if (newUser && newPass) {
            localStorage.setItem("username", newUser);
            localStorage.setItem("password", newPass);
            alert("Signup successful! Now login with your new credentials.");
        } else {
            alert("Signup failed. Please enter valid credentials.");
        }
    });
});
