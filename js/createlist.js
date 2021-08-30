function readyList(sl1,al1,nl1)
        {
           /* songs=sl1;
            poster=al1;
            songsname=nl1;
            document.getElementById("sl1").innerHTML = songsname[0];
            document.getElementById("psl1").innerHTML = songsname[0];
            document.getElementById("sl2").innerHTML = songsname[1];
            document.getElementById("psl2").innerHTML = songsname[1];
            document.getElementById("sl3").innerHTML = songsname[2];
            document.getElementById("psl3").innerHTML = songsname[2];
            document.getElementById("sl4").innerHTML = songsname[3];
            document.getElementById("psl4").innerHTML = songsname[3];
            document.getElementById("sl5").innerHTML = songsname[4];
            document.getElementById("psl5").innerHTML = songsname[4];
            document.getElementById("sl6").innerHTML = songsname[5];
            document.getElementById("psl6").innerHTML = songsname[5];
            document.getElementById("sl7").innerHTML = songsname[6];
            document.getElementById("psl7").innerHTML = songsname[6];
            document.getElementById("sl8").innerHTML = songsname[7];
            document.getElementById("psl8").innerHTML = songsname[7];
            document.getElementById("sl9").innerHTML = songsname[8];
            document.getElementById("psl9").innerHTML = songsname[8];
            document.getElementById("sl10").innerHTML = songsname[9];
            document.getElementById("psl10").innerHTML = songsname[9];
            $(".1 #songimg img").attr("src",poster[0]);
            $(".2 #songimg img").attr("src",poster[1]);
            $(".3 #songimg img").attr("src",poster[2]);
            $(".4 #songimg img").attr("src",poster[3]);
            $(".5 #songimg img").attr("src",poster[4]);
            $(".6 #songimg img").attr("src",poster[5]);
            $(".7 #songimg img").attr("src",poster[6]);
            $(".8 #songimg img").attr("src",poster[7]);
            $(".9 #songimg img").attr("src",poster[8]);
            $(".10 #songimg img").attr("src",poster[9]);*/
        }


function addsonglist(imgs,name) 
{
      // Create image tag...
      var img = document.createElement("img");
      img.setAttribute("src",imgs);

      // Create image box...
      var divsi = document.createElement("div");
      divsi.setAttribute('id',"songimg");

      // Add image to image box...
      divsi.appendChild(img);

      // Create h5 tag for song name
      var h5sl1 = document.createElement("h5");
      h5sl1.setAttribute('id',"sl1");
      h5sl1.setAttribute("onclick","playSong(this.innerText)");
      h5sl1.appendChild(document.createTextNode(name));

      // Create p tag for singer name
     /* var ppsl1 = document.createElement("p");
      ppsl1.setAttribute('id',"psl1");
      ppsl1.setAttribute("onclick","playSongbyname(this.innerText)");
      ppsl1.appendChild(document.createTextNode(sin_name));*/

      // Create Div tag for Song details...
      var divsd = document.createElement("div");
      divsd.setAttribute('id',"songdetails");

      // Add h5 and p tag to songdetail tag...
      divsd.appendChild(h5sl1);
      //divsd.appendChild(ppsl1);

      //Create side baar..
      var i=document.createElement("i");
      i.setAttribute('class',"fa fa-ellipsis-v");

      // Create div tag for songbox...
      var divsb = document.createElement("div");
      divsb.setAttribute('id',"songbox");

      // Add image and song details to songbox...
      divsb.appendChild(divsi);
      divsb.appendChild(divsd);
      divsb.appendChild(i);

      //create Hr tag..
      var hr=document.createElement("hr");

      // Import list to add song box...
      var slist=document.getElementById("songList");
      slist.appendChild(divsb);
      slist.appendChild(hr);
}


function toptenbollywood(imgs,name) 
{
      // Create image tag...
      var img = document.createElement("img");
      img.setAttribute("src",imgs);

      // Create h5 tag for song name
      var h5 = document.createElement("h5");
      h5.setAttribute("onclick","playSong(this.innerText)");
      h5.appendChild(document.createTextNode(name));

      // Create h5 tag for song name
      var div = document.createElement("div");
      div.appendChild(img);
      div.appendChild(h5);

       
      // Import list to add song box...
      var tplist=document.getElementById("top10bollywood");
      tplist.appendChild(div);
}

function toptenhollywood(imgs,name) 
{
      // Create image tag...
      var img = document.createElement("img");
      img.setAttribute("src",imgs);

      // Create h5 tag for song name
      var h5 = document.createElement("h5");
      h5.setAttribute("onclick","playSong(this.innerText)");
      h5.appendChild(document.createTextNode(name));

      // Create h5 tag for song name
      var div = document.createElement("div");
      div.appendChild(img);
      div.appendChild(h5);

       
      // Import list to add song box...
      var tplist=document.getElementById("top10hollywood");
      tplist.appendChild(div);
}

function toptenglobal(imgs,name) 
{
      // Create image tag...
      var img = document.createElement("img");
      img.setAttribute("src",imgs);

      // Create h5 tag for song name
      var h5 = document.createElement("h5");
      h5.setAttribute("onclick","playSong(this.innerText)");
      h5.appendChild(document.createTextNode(name));

      // Create h5 tag for song name
      var div = document.createElement("div");
      div.appendChild(img);
      div.appendChild(h5);

       
      // Import list to add song box...
      var tplist=document.getElementById("top10global");
      tplist.appendChild(div);
}


function toppunjab(imgs,name) 
{
      // Create image tag...
      var img = document.createElement("img");
      img.setAttribute("src",imgs);

      // Create h5 tag for song name
      var h5 = document.createElement("h5");
      h5.setAttribute("onclick","playSong(this.innerText)");
      h5.appendChild(document.createTextNode(name));

      // Create h5 tag for song name
      var div = document.createElement("div");
      div.appendChild(img);
      div.appendChild(h5);

       
      // Import list to add song box...
      var tplist=document.getElementById("toptenpunjab");
      tplist.appendChild(div);
}


function toppicks(imgs,name) 
{
      // Create image tag...
      var img = document.createElement("img");
      img.setAttribute("src",imgs);

      // Create h5 tag for song name
      var h5 = document.createElement("h5");
      h5.setAttribute("onclick","playSong(this.innerText)");
      h5.appendChild(document.createTextNode(name));

      // Create h5 tag for song name
      var div = document.createElement("div");
      div.appendChild(img);
      div.appendChild(h5);

       
      // Import list to add song box...
      var tplist=document.getElementById("homesonglist");
      tplist.appendChild(div);
}

function mostplayed(imgs,name) 
{
      // Create image tag...
      var img = document.createElement("img");
      img.setAttribute("src",imgs);

      // Create h5 tag for song name
      var h5 = document.createElement("h5");
      h5.setAttribute("onclick","playSong(this.innerText)");
      h5.appendChild(document.createTextNode(name));

      // Create h5 tag for song name
      var div = document.createElement("div");
      div.appendChild(img);
      div.appendChild(h5);

       
      // Import list to add song box...
      var tplist=document.getElementById("mostplayed");
      tplist.appendChild(div);
}


function justtarrived(imgs,name) 
{
      // Create image tag...
      var img = document.createElement("img");
      img.setAttribute("src",imgs);

      // Create h5 tag for song name
      var h5 = document.createElement("h5");
      h5.setAttribute("onclick","playSong(this.innerText)");
      h5.appendChild(document.createTextNode(name));

      // Create h5 tag for song name
      var div = document.createElement("div");
      div.appendChild(img);
      div.appendChild(h5);

       
      // Import list to add song box...
      var jalist=document.getElementById("justarrived");
      jalist.appendChild(div);
}