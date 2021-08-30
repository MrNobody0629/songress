var sl1=[];
var al1=[];
var sl11 = ["Song1.mp3","Song2.mp3","Song3.mp3","Song4.mp3","Song5.mp3","Song6.mp3","Song7.mp3","Song8.mp3","Song9.mp3","Song10.mp3"];
var al11 = ["Poster1.jpg","Poster2.jpg","Poster3.jpg","Poster4.jpg","Poster5.jpg","Poster6.jpg","Poster7.jpeg","Poster8.jpeg","Poster9.jpeg","Poster10.jpeg"];
var nl11 = ["Proper patola","Chamma Chamma","Daru Wargi","Billo","8 parche","Sia - Cheap Thrills","sing me to sleep","Broken Angel","Taki Taki","Faded"];

window.onload = function loadsong()
{
  mostplayedd();
  topbollywood();
 // top10punjab();
  tophollywood();
  topglobal();
  justarrived();

 // ready();
  createqueue();
  //readyList(sl1,al1,nl1);
}


function createqueue() 
{
   var astr="Album/",sstr="Songs/";
  // body...
  var xhttp,txt;
  /*if (str == "") {
    document.getElementById("demo").innerHTML = "";
    return;
  }*/
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {
      var myObj = JSON.parse(this.responseText);
      for (i in myObj) 
      {
        addsonglist(astr.concat(myObj[i].album_loc),myObj[i].name);
        toppicks(astr.concat(myObj[i].album_loc),myObj[i].name);
        sl1.push(myObj[i].name);
        al1.push(astr.concat(myObj[i].album_loc));
      }
      /*sl1.reverse();
      al1.reverse();*/
    }
  };
  xhttp.open("GET", "../php/Load data php/topbollywood.php?q=", true);
  xhttp.send();
}

function mostplayedd() 
{
   var astr="Album/",sstr="Songs/",xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {
      var myObj = JSON.parse(this.responseText);
      for (i in myObj) 
      {
        mostplayed(astr.concat(myObj[i].album_loc),myObj[i].name);
      }
    }
  };
  xhttp.open("GET", "../php/Load data php/mostplayed.php?q=", true);
  xhttp.send();
}

function topbollywood() 
{
  var astr="Album/",sstr="Songs/",xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {
      var myObj = JSON.parse(this.responseText);
      for (i in myObj) 
      {
        t10bolly(astr.concat(myObj[i].album_loc),myObj[i].name);
      }
    }
  };
  xhttp.open("GET", "../php/Load data php/topbollywood.php?q=", true);
  xhttp.send();
}

function top10punjab() 
{
  var astr="Album/",sstr="Songs/",xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {
      var myObj = JSON.parse(this.responseText);
      for (i in myObj) 
      {
        toppunjab(astr.concat(myObj[i].album_loc),myObj[i].name);
      }
    }
  };
  xhttp.open("GET", "../php/Load data php/top10punjabi.php?q=", true);
  xhttp.send();
}

function tophollywood()
{
  var astr="Album/",sstr="Songs/",xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {
      var myObj = JSON.parse(this.responseText);
      for (i in myObj) 
      {
        t10holly(astr.concat(myObj[i].album_loc),myObj[i].name);
      }
    }
  };
  xhttp.open("GET", "../php/Load data php/tophollywood.php?q=", true);
  xhttp.send();
}

function topglobal() 
{
  var astr="Album/",sstr="Songs/",xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {
      var myObj = JSON.parse(this.responseText);
      for (i in myObj) 
      {
        toppicks(astr.concat(myObj[i].album_loc),myObj[i].name);
      }
    }
  };
  xhttp.open("GET", "../php/Load data php/topglobal.php?q=", true);
  xhttp.send();
}


function justarrived() 
{
  var astr="Album/",sstr="Songs/",xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {
      var myObj = JSON.parse(this.responseText);
      for (i in myObj) 
      {
        justarrived(astr.concat(myObj[i].album_loc),myObj[i].name);
      }
    }
  };
  xhttp.open("GET", "../php/Load data php/justarrived.php?q=", true);
  xhttp.send();
}