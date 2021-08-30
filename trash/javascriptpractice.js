
        var songs = ["Songs/song1.mp3","Songs/Song2.mp3","Songs/Song3.mp3","Songs/8 Parche-(Mr-Jatt.com).mp3","Songs/Billo - J Star.mp3"];
        var poster = ["Album/Poster1.jpg","Album/Poster2.jpg","Album/Poster3.jpg","Album/8-Parche-Baani-Sandhu.jpg","Album/j-Star-Billo-video-song1.jpg"];

        var songTitle = document.getElementById("songTitle");
        var minsongTitle = document.getElementById("minsongTitle");
        var fillBar = document.getElementById("fill");
        var minfillBar = document.getElementById("minfill");

        var song = new Audio();
        var currentSong = 0;    // it point to the current song

        window.onload = playSong;   // it will call the function playSong when window is load

        function playSong()
        {

            song.src = songs[currentSong];  //set the source of 0th song

            songTitle.textContent = songs[currentSong]; // set the title of song
            minsongTitle.textContent = songs[currentSong];

            song.play();    // play the song
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
        });


        function next()
        {

            currentSong++;
            if(currentSong > songs.length){
                currentSong = 0;
            }
            playSong();
            $("#play img").attr("src","icons/Pause.png");
            $("#minimage img").attr("src",poster[currentSong]);
            $("#image img").attr("src",poster[currentSong]);
            $("#bg img").attr("src",poster[currentSong]);
        }

        function pre()
        {

            currentSong--;
            if(currentSong < 0){
                currentSong = songs.length-1;
            }
            playSong();
            $("#play img").attr("src","icons/Pause.png");
            $("#minimage img").attr("src",poster[currentSong]);
            $("#image img").attr("src",poster[currentSong]);
            $("#bg img").attr("src",poster[currentSong]);
        }


        function myFunction()
        {
            var x = document.getElementById("main");
            var y = document.getElementById("minmain");
            if (x.style.display === "none")
            {
                x.style.display = "block";
                y.style.display = "none";
                y.style.display = "none";
            }
            else
            {
                x.style.display = "none";
                y.style.display = "block";
                y.style.display = "flex";
            }
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
