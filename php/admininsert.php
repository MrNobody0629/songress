<?php
$username = $_POST['admin_name'];
$email = $_POST['email'];
$DOB = $_POST['date'];
$phone = $_POST['c-number'];
$password = $_POST['psw'];
if (!empty($username) || !empty($email) || !empty($DOB) || !empty($phone) || !empty($password))
{
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "Hacker22";
    $dbname = "user";
    //create connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
    if (mysqli_connect_error()) {
     die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    } else {
     $SELECT = "SELECT email From admin_details Where email = ? Limit 1";
     $INSERT = "INSERT INTO admin_details (Name,emailid,dob,Mobileno,password) VALUES (?,?,?,?,?)";
     //Prepare statement
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $email);
     $stmt->execute();
     $stmt->bind_result($email);
     $stmt->store_result();
     $rnum = $stmt->num_rows;
     if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("sssis",$username,$email,$DOB,$phone,$password);
      $stmt->execute();
      echo "New record inserted sucessfully";
     } else {
      echo "Someone already register using this email";
     }
     $stmt->close();
     $conn->close();
    }
} else {
 echo "All field are required";
 die();
}
?>