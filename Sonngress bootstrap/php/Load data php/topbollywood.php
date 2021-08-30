<?php
$conn = new mysqli("localhost", "root", "Hacker22", "songs");
if($conn->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT name,s_name,album_loc FROM bollywood where category='Bollywood' limit 0,10";

$result= $conn->query($sql);

if ($result->num_rows > 0) 
{
	$outp = $result->fetch_all(MYSQLI_ASSOC);
	echo json_encode($outp);
}
else
{
	echo "0 results";
}
?>