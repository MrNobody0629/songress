<?php
$target_diralbum = "F:/Songress/Album/";
$target_filealbum = $target_diralbum . basename($_FILES["album"]["name"]);
$target_dirsong = "F:/Songress/Songs/";
$target_filesong = $target_dirsong . basename($_FILES["s_name"]["name"]);
$imageFileType = strtolower(pathinfo($target_filealbum,PATHINFO_EXTENSION));
$songFileType = strtolower(pathinfo($target_filesong,PATHINFO_EXTENSION));


// Allow certain file formats
if($songFileType != "mp3" && ($imageFileType != "jpg" || $imageFileType != "png" || $imageFileType != "jpeg" || $imageFileType != "gif"))
{
  echo "Sorry, only JPG, JPEG, PNG, GIF & mp3 files are allowed.";
}
else
{
  if (file_exists($target_filealbum) || file_exists($target_filesong))
  {
    echo "Sorry, file already exists.";
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
        echo "The file " . basename( $_FILES["s_name"]["name"]). " & ". basename( $_FILES["album"]["name"]). " has been uploaded.";
      }
      else
      {
        echo "Sorry, there was an error uploading your file.";
      }
    } 
  }
}
?>