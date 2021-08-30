function showCustomer() 
{
  var txt="Broken Angel",str="Album/";
  xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() 
            {
                if (this.readyState == 4 && this.status == 200) 
                {
                    var albumpic = JSON.parse(this.responseText);
                }
                document.getElementById("demo").innerHTML = str.concat(albumpic[0].album_loc);
            };
            xhttp.open("GET", "../php/Load data php/getalbum.php?q="+txt, true);
            xhttp.send();
}