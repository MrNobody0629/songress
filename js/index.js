
        var songs;
        var poster;
        var i=true;
       /* var l1 = ["Songs/Song1.mp3","Songs/Song2.mp3","Songs/Song3.mp3","Songs/Song4.mp3","Songs/Song5.mp3","Songs/Song6.mp3","Songs/Song7.mp3","Songs/Song8.mp3","Songs/Song9.mp3","Songs/Song10.mp3"];
        var p1 = ["Poster1.jpg","Poster2.jpg","Album/Poster3.jpg","Album/Poster4.jpg","Album/Poster5.jpg","Album/Poster6.jpg","Album/Poster7.jpeg","Album/Poster8.jpeg","Album/Poster9.jpeg","Album/Poster10.jpeg"];
        var n1 = ["Proper patola","Chamma Chamma","Daru Wargi","Billo","8 parche","Sia - Cheap Thrills","sing me to sleep","Broken Angel","Taki Taki","Faded"];
        var l2 = ["Songs/Song6.mp3","Songs/Song7.mp3","Songs/Song8.mp3","Songs/Song9.mp3","Songs/Song10.mp3"];
        var p2 = ["Album/Poster6.jpg","Album/Poster7.jpeg","Album/Poster8.jpeg","Album/Poster9.jpeg","Album/Poster10.jpeg"];*/
        
        var main = document.getElementById("main");
        var minmain = document.getElementById("minmain");
        var songTitle = document.getElementById("songTitle");
        var minsongTitle = document.getElementById("minsongTitle");
        var fillBar = document.getElementById("fill");
        var minfillBar = document.getElementById("minfill");
        var seekbar = document.getElementById("seek-bar");
        var minseekbar = document.getElementById("minseek-bar");
        var current = document.getElementById("currentTime");
        var total = document.getElementById("totalTime");
        
        
        var song = new Audio();
        var currentSong = 0;    // it point to the current song
        
        /*window.onload = readyList(l1,p1,n1);   // it will call the function playSong when window is load*/

        function playfirst() 
        {
            var val=1;
            // body...
            if(val==1)
            {
                main.style.display = "none";
                minmain.style.display = "block";
                minmain.style.display = "flex";
                val=2;
            }
            else
            {
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
                        $("#minimage img").attr("src",astr.concat(albumpic[0].album_loc));
                        $("#image img").attr("src",astr.concat(albumpic[0].album_loc));
                        $("#bg img").attr("src",astr.concat(albumpic[0].album_loc));
                        playSongbyname(albumpic[0].name,sstr.concat(albumpic[0].s_name));
                    }
                };
                xhttp.open("GET", "../php/Load data php/getalbum.php?q="+txt, true);
                xhttp.send();
            }
            else
            {
            currentSong = txt;
            song.src = sl1[currentSong];  //set the source of 0th song 
            
            songTitle.textContent = sl1[currentSong]; // set the title of song
            minsongTitle.textContent = sl1[currentSong];

            playfirst();
            song.play();    // play the song

            $("#play img").attr("src","icons/Pause.png");
            $("#minimage img").attr("src",al1[currentSong]);
            $("#image img").attr("src",al1[currentSong]);
            $("#bg img").attr("src",al1[currentSong]);

            $("#play img").attr("src","icons/Pause.png");
            $("#minplay img").attr("src","icons/Pause.png"); 
            }       

        }

        function playSongbyname(sname,ssrc)
        {
            //var str="Songs/",astr="Album/",xhttp;
            //var strr=str.concat(txt);
            //strr=strr.concat(".mp3");
            song.src = ssrc;  //set the source of 0th song 
            
            songTitle.textContent = sname; // set the title of song
            minsongTitle.textContent = sname;

            playfirst();
            song.play();    // play the song
            $("#play img").attr("src","icons/Pause.png");
            $("#minplay img").attr("src","icons/Pause.png");
            /*xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() 
            {
                if (this.readyState == 4 && this.status == 200) 
                {
                    var albumpic = JSON.parse(this.responseText);
                    $("#minimage img").attr("src",astr.concat(albumpic[0].album_loc));
                    $("#image img").attr("src",astr.concat(albumpic[0].album_loc));
                    $("#bg img").attr("src",astr.concat(albumpic[0].album_loc));
                }
            };
            xhttp.open("GET", "../php/Load data php/getalbum.php?q="+txt, true);
            xhttp.send(); */       
        }

        function playOrPauseSong()
        {
            
            if(song.paused){
                song.play();
                $("#play img").attr("src","icons/Pause.png");
                $("#minplay img").attr("src","icons/Pause.png");
            }
            else{
                song.pause();
                $("#play img").attr("src","icons/Play.png");
                $("#minplay img").attr("src","icons/Play.png");
            }
        }
        
        song.addEventListener('timeupdate',function(){ 
            
            var position = song.currentTime / song.duration;
            fillBar.style.width = position * 100 +'%';
            minfillBar.style.width = position * 100 +'%';
            var cs=parseInt(song.currentTime % 60);
            var cm=parseInt((song.currentTime / 60) % 60);
            current.textContent=cm+":"+cs;
            var ts=parseInt(song.duration % 60);
            var tm=parseInt((song.duration / 60 ) % 60);
            total.textContent=tm+":"+ts;
            if (song.currentTime == song.duration)
            {
                next();
            }
        });
        
        seekbar.addEventListener("click",seek.bind(this));
        function seek(event)
        {
            var per = event.offsetX/seekbar.offsetWidth;
            this.song.currentTime=per * this.song.duration;
            fillBar.style.width = percent*100 + "%";
            minfillBar.style.width = percent*100 + "%";
        }

        minseekbar.addEventListener("click",seek1.bind(this));

        function seek1(event)
        {
            var per = event.offsetX/minseekbar.offsetWidth;
            this.song.currentTime=per * this.song.duration;
            fillBar.style.width = percent*100 + "%";
            minfillBar.style.width = percent*100 + "%";
        }


        function next()
        {
            currentSong++;
            if(currentSong >= sl1.length){
                currentSong = 0;
            }
            playSong(sl1[currentSong]);
        }
    
        function pre()
        {
            
            currentSong--;
            if(currentSong < 0){
                currentSong = songs.length-1;
            }
            playSong(sl1[currentSong]);
        }

        minimage.addEventListener("click",myFunction.bind());
       /* main.addEventListener("click",myFunction.bind());*/

        function myFunction()
        {
            if (main.style.display == "none")
            {
                main.style.display = "block";
                minmain.style.display = "none";
                minmain.style.display = "none";
            }
            else
            {
                main.style.display = "none";
                minmain.style.display = "block";
                minmain.style.display = "flex";
            }
        }

        function showqueue()
        {
            var q=document.getElementById('songList');
            if (q.style.display == "block")
            {
                q.style.display="none";
            }
            else
            {
                q.style.display="block"
            }
            main.style.display="none";
            minmain.style.display='block';
        }

        fill.slider({range:"min",min:0,max:10,start:function(event,ui){},slide:function(event,ui){song.currentTime=ui.value;},stop:function(event,ui){}});

        function navsidebarFun() 
        {
            var x = document.getElementById("topnav");
            if (x.className === "topnav") 
            {
                x.className += " responsive";
            }
            else
            {
                x.className = "topnav";
            }
        }

        window.onload=function setPlaylist()
        {
            
        }

        function handleSeekBar(val) { song.currentTime = seekbar.value }