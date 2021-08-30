<?php
$target_dir = "F:/Songress/Songs/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$songFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Allow certain file formats
if($songFileType != "mp3") 
{
  echo "Sorry, only mp3 files are allowed.";
  $uploadOk = 0;
}
else
{
  if (file_exists($target_file))
  {
    echo "Sorry, file already exists.";

  else
  {
    if (round($_FILES["fileToUpload"]["size"] / 1024 / 1024, 1)>10) 
    {
      # code...
      echo "filesize is too large";
    }
    else
    {
      if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file))
      {
        echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
      }
      else
      {
        echo "Sorry, there was an error uploading your file.";
      }
    } 
  }
}
?>