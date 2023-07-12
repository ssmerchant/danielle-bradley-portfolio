<?php
  if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Perform validations, e.g., check if fields are not empty, email is valid, etc.
    // If validations pass, you can perform actions like sending an email.

    // Example: Sending an email
    $to = "suddenpeach@yahoo.com";
    $subject = "New contact form submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
      // Email sent successfully
      echo "Thank you for your message!";
    } else {
      // Error sending email
      echo "Oops! Something went wrong.";
    }
  }
?>
