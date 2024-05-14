function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // For demonstration purposes, just alert that login functionality is not implemented
    alert("Login functionality is not implemented yet");
}

function register() {
    var username = document.getElementById("registerUsername").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;

    // For demonstration purposes, just alert that registration functionality is not implemented
    alert("Registration functionality is not implemented yet");

    // Redirect to welcome.html page upon successful registration
    window.location.href = "welcome.html";
}
