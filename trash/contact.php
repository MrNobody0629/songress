<?php
$servername = "localhost";
$username = "root";
$password = "Hacker22";
$dbname = "admin_details";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $sql = "INSERT INTO MyGuests (Name,emailid,dob,password,Mobileno,phaseverifier)
  VALUES ('Annu Verma','annuv309@gmail.com','01-01-1998','Sfhgjkhfd',95597110195,'1')";
  // use exec() because no results are returned
  $conn->exec($sql);
  echo "New record created successfully";
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>