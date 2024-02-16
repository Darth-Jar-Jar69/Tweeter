// Function to authenticate user
function authenticate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple authentication logic (replace with a more secure authentication mechanism)
    if (username && password) {
        // Redirect to the main page (social hub)
        window.location.href = "page.html";
    } else {
        alert("Please enter a username and password.");
    }
}
