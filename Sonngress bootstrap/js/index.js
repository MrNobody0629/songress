var songs;
var poster;
var i=true;
var l1 = ["Songs/Besabriyaan.mp3","Songs/Yalgaar.mp3","Songs/Chaar Botal Vodka.mp3"];
var p1 = ["Album/Poster1.jpg","Album/Poster2.jpg","Album/Poster3.jpg","Album/Poster4.jpg","Album/Poster5.jpg","Album/Poster6.jpg","Album/Poster7.jpeg","Album/Poster8.jpeg","Album/Poster9.jpeg","Album/Poster10.jpeg"];
var sn1 = ["Besabriyaan","Yalgaar","Chaar Botal Vodka"];

var minplayer = document.getElementById("minplayer");
var maxplayer = document.getElementById("maxplayer");
var minsname = document.getElementById("min-pl-s-name");
var maxsname = document.getElementById("max-pl-s-name");
var slidermax = document.getElementById("max-fill");
var slidermin = document.getElementById("min-fill");




var song = new Audio();
var currentSong = 0;    // it point to the current song
var status = 0;


function playOrPauseSong()
{
    if(song.paused)
    {
        song.play();
        document.getElementById('max-playorpause').className = "fa fa-pause btn btn-outline-primary";
        document.getElementById('min-playorpause').className = "fa fa-pause btn btn-outline-primary";
    }
    else
    {
        song.pause();
        document.getElementById('max-playorpause').className = "fa fa-play btn btn-outline-primary";
        document.getElementById('min-playorpause').className = "fa fa-play btn btn-outline-primary";
    }
}

function playSong(txt)
{
    if (typeof txt == "string") 
    {
        var astr="Album/",sstr="Songs/",xhttp;
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200) 
            {
                var albumpic = JSON.parse(this.responseText);
                $("#max-pl-img").attr("src",astr.concat(albumpic[0].album_loc));
                $("#min-pl-img").attr("src",astr.concat(albumpic[0].album_loc));
                minsname.textContent = albumpic[0].name;
                maxsname.textContent = albumpic[0].name;
                playSongbyname(albumpic[0].name,sstr.concat(albumpic[0].s_name));
                openplayer();
            }
        };
        xhttp.open("GET", "../php/Load data php/getalbum.php?q="+txt, true);
        xhttp.send();
    }
    else
    {
        song.src = l1[txt];  //set the source of 0th song 
        minsname.textContent = sn1[txt]; // set the title of song
        maxsname.textContent = sn1[txt];
        $("#max-pl-img").attr("src",p1[txt]);
        $("#min-pl-img").attr("src",p1[txt]);
        openplayer();
        song.play();    // play the song
    }       
}

function openplayer(argument) 
{
    if (status == 0) 
    {
        minplayer.style.display = "block";
        status = 1;
    }
}

function playSongbyname(sname,ssrc)
{
    song.src = ssrc;  //set the source of 0th song 
    song.play();    // play the song 
}

function pre()
{
    currentSong--;
    if(currentSong < 0)
    {
        currentSong = l1.length-1;
    }
    playSong(currentSong);
}

function next()
{
    currentSong++;
    if(currentSong >= l1.length)
    {
        currentSong = 0;
    }
    playSong(currentSong);
}

function volumecontrol()
{
    // body...
    var x=document.getElementById("max-bt-bar");
    if (x.muted == false)
        x.muted = true;
    else
        x.muted = false;
}


song.addEventListener('timeupdate',function()
    {
        var position = song.currentTime / song.duration;
       /* document.getElementById("max-fill").value = position * 100 +'%';
        minfillBar.style.width = position * 100 +'%';*/
        var cs=parseInt(song.currentTime % 60);
        var cm=parseInt((song.currentTime / 60) % 60);
        document.getElementById("dur-curr").innerHTML = cm+":"+cs;
        slidermax.value = (song.currentTime/song.duration)*100;
        slidermin.value = (song.currentTime/song.duration)*100;
        var ts=parseInt(song.duration % 60);
        var tm=parseInt((song.duration / 60 ) % 60);
        document.getElementById("dur-tot").innerHTML = tm+":"+ts;
        if (song.currentTime == song.duration)
        {
            next();
        }
    });

slidermax.oninput = function()
{
    var per = this.value/100;
    song.currentTime=per * song.duration;
}

slidermin.oninput = function()
{
    var per = this.value/100;
    song.currentTime=per * song.duration;
}