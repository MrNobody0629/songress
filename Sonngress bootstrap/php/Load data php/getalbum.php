<?php
$q =$_GET['q'];

$con = mysqli_connect('localhost','root','Hacker22','songs');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
$sql="SELECT name,s_name,album_loc,plays FROM bollywood WHERE name = '".$q."'";
$result = mysqli_query($con,$sql);

if ($row=$result->num_rows > 0) 
{
	$sqll="UPDATE bollywood SET plays=plays+1 WHERE name = '".$q."'";
	$results = mysqli_query($con,$sqll);
	$outp = $result->fetch_all(MYSQLI_ASSOC);
	echo json_encode($outp);
}
else
{
  echo "0 results";
}
mysqli_close($con);
?>