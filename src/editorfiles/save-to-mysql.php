<?php

/**
 * This is a demo of how you handle SAVE requests from BuilderJS.
 * The example is in PHP. However, you can use any server side programming
 * you are familiar with (JAVA, .NET, Ruby, Perl, Python...).
 *
 * The point is to capture the HTML content posted from BuilderJS
 * through HTTP "content" parameter to the server.
 *
 * In this example, we write the HTML content to MySQL
 *
 */

ini_set('display_errors', 1);

// Sample DB credentials
$servername = "localhost";
$username = "mysqlusername";
$password = "SEcrEt!";
$dbname = "db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Retrieve posted information
// Get the Template ID posted to the server
$id = $_POST['template_id'];
$html = $_POST['content'];

// Insert/update BuilderJS' posted content to the `emails` DB table
$stmt = $conn->prepare("UPDATE `emails` SET html_content = ? WHERE id = ?");
$stmt->bind_param("ss", $html, $id);
$stmt->execute();

// Close
$stmt->close();
$conn->close();

// BuilderJS expects JSON response, so we need to set up the HTTP response' headers accordingly
// And return 200 SUCCESS
header("HTTP/1.1 200");
header('Content-Type: application/json');
echo json_encode([ 'success' => "Saved to MySQL" ]);
return;
