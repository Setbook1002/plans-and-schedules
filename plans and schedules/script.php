<?php
// Database connection
$servername = "localhost";
$username = "Shaddynm"; // Change this to your MySQL username
$password = "12345678"; // Change this to your MySQL password
$dbname = "wanderwiseeiy"; // Change this to your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize user input
    $username = htmlspecialchars(trim($_POST['username']));
    $password = htmlspecialchars(trim($_POST['password']));

    // Validate username (example: minimum length of 5 characters)
    if (strlen($username) < 5) {
        die("Username must be at least 5 characters long.");
    }

    // Validate password (example: minimum length of 8 characters)
    if (strlen($password) < 8) {
        die("Password must be at least 8 characters long.");
    }

    // Hash the password securely
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Prepare SQL statement to insert user data into database
    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $hashed_password);

    // Execute the prepared statement
    if ($stmt->execute()) {
        echo "User registered successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement
    $stmt->close();
}

// Close connection
$conn->close();
?>
