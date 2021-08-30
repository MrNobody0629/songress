<!DOCTYPE html>
<html>
<head>
  <style type="text/css">
    h1
    {
      text-align: center;
      color: red;
      background-color: blue;
      font-size: 50;
    }
  </style>
  <title></title>
</head>
<body>
  <h1>
<?php
$name = $_POST['name'];
$songname = basename( $_FILES["s_name"]["name"]);
$sinname = $_POST['sin_name'];
$DOR = $_POST['Date_of_release'];
$albumpic = basename( $_FILES["album"]["name"]);
$category = $_POST['Category'];
$playss = 0;
$target_diralbum = "F:/Songress/Album/";
$target_filealbum = $target_diralbum . basename($_FILES["album"]["name"]);
$target_dirsong = "F:/Songress/Songs/";
$target_filesong = $target_dirsong . basename($_FILES["s_name"]["name"]);
$imageFileType = strtolower(pathinfo($target_filealbum,PATHINFO_EXTENSION));
$songFileType = strtolower(pathinfo($target_filesong,PATHINFO_EXTENSION));

if (!empty($name) || !empty($songname) || !empty($sinname) || !empty($DOR) || !empty($albumpic)  || !empty($category)) 
{
  $host = "localhost";
  $dbUsername = "root";
  $dbPassword = "Hacker22";
  $dbname = "songs";

  //Server DB
  /*
  $hostt = "sql207.epizy.com";
  $dbUsernamee = "epiz_25740704";
  $dbPasswordd = "H2cDHxx29B7";
  $dbnamee = "epiz_25740704_songs";*/

  //create connection
  $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
  /*$conns = new mysqli($hostt, $dbUsernamee, $dbPasswordd, $dbnamee);*/
  if (mysqli_connect_error())
  {
    die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
  }
  else
  {
    if($songFileType != "mp3" && ($imageFileType != "jpg" || $imageFileType != "png" || $imageFileType != "jpeg" || $imageFileType != "gif"))
    {
      echo "Sorry, only JPG, JPEG, PNG, GIF & mp3 files are allowed.";
    }
    else
    {
      $SELECT = "SELECT s_name From bollywood Where s_name = ? Limit 1";
      $stmt = $conn->prepare($SELECT);
      $stmt->bind_param("s", $songname);
      $stmt->execute();
      $stmt->bind_result($songname);
      $stmt->store_result();
      $rnum = $stmt->num_rows;
      if ($rnum==0) 
      {
        if (file_exists($target_filealbum) || file_exists($target_filesong))
        {
          echo "Sorry, file already exists in server";
        }
        else
        {
          if (round($_FILES["s_name"]["size"] / 1024 / 1024, 1)>10 && round($_FILES["album"]["size"] / 1024 / 1024, 1)>1)
          {
           # code...
            echo "filesize is too large";
          }
          else
          {
            if (move_uploaded_file($_FILES["s_name"]["tmp_name"], $target_filesong) && move_uploaded_file($_FILES["album"]["tmp_name"], $target_filealbum))
            {
              echo "The file " . basename( $_FILES["s_name"]["name"]). " & ". basename( $_FILES["album"]["name"]). " has been uploaded in server \n";
              $INSERT = "INSERT INTO bollywood(name,s_name,sin_name,r_date,album_loc,category,plays) VALUES (?,?,?,?,?,?,?)";
              $stmt->close();
              $stmtt = $conn->prepare($INSERT);
              /*$stmtts = $conns->prepare($INSERT);*/
              $stmtt->bind_param("ssssssi",$name,$songname,$sinname,$DOR,$albumpic,$category,$playss);
              /*$stmtts->bind_param("ssssssi",$name,$songname,$sinname,$DOR,$albumpic,$category,$playss);*/
              if ($stmtt->execute()) 
              {
                # code...
                echo "New record inserted sucessfully in mysql";
              }
              else
                echo "unsuccesfull in mysql";
              $stmtt->close();
              $conn->close();
            }
            else
            {
              echo "Sorry, there was an error uploading your file.";
            }
          }
        }
      } 
      else 
      {
        echo "Song is already inserted in SQL databse";
      }
    }
  }
}
else
{
  echo "All field are required";
  die();
}
?>
  </h1>
</body>
</html>